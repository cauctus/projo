<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults, ref } from 'vue';
import { Impro } from '@/types/Impro.model';
import { DeleteFilled, TheaterComedyRound, EditFilled } from '@vicons/material';
import { Menu } from '@vicons/tabler';
import { formatTime } from '@/utils/string';
import { downloadObjectAsJson } from '@/utils/download';
import { parseImportedImproFile } from '@/utils/upload';
import { UploadFileInfo } from 'naive-ui';
import draggable from 'vuedraggable';
import { FileExport } from '@/types/FileExport.model';
import ImproEditor from './ImproEditor.vue';

const emit = defineEmits<{ (e: 'remove', index: number): void; (e: 'update:impros', impros: Impro[]): void }>();
const props = withDefaults(defineProps<{ impros: Impro[]; showExport?: boolean; showImport?: boolean; showClear?: boolean }>(), { showExport: true, showImport: true, showClear: true });

const showModal = ref(false);
const improToEdit = ref<Impro>();

function editImpro(impro: Impro) {
  showModal.value = true;
  improToEdit.value = impro;
}

function remove(i: number) {
  const a = [...props.impros];
  a.splice(i, 1);
  updateImpros(a);
}

function updateImpros(impros: Impro[]) {
  emit('update:impros', impros);
}

function exportJson() {
  const content: FileExport = {
    name: 'projo export',
    version: 1, // increment if format changes
    projoVersion: import.meta.env.PACKAGE_VERSION,
    description: "Fichier utilisé pour l'import de configuration de match d'improvisation",
    impros: props.impros,
  };

  downloadObjectAsJson(content, 'impros-data.json');
}

async function uploaded({ file: { file } }: { file: UploadFileInfo }) {
  if (file) {
    const impros = await parseImportedImproFile(file);
    updateImpros([...props.impros, ...impros]);
  }
}
</script>
<template>
  <div class="list-wrapper">
    <n-space class="actions" align="center" justify="space-between">
      <div v-show="props.impros.length > 0">{{ props.impros.length }} impros pour une durée de {{ formatTime(props.impros.reduce((acc, { duration }) => acc + duration, 0)) }}</div>

      <n-space>
        <n-upload v-if="props.showImport" :show-file-list="false" :on-change="uploaded"><n-button tertiary>Importer</n-button></n-upload>

        <n-popconfirm v-if="props.showClear" positive-text="Supprimer" negative-text="Annuler" @positive-click="updateImpros([])">
          <template #trigger>
            <n-button tertiary :disabled="props.impros.length === 0">Vider</n-button>
          </template>
          Êtes-vous sûr·e·s de vouloir supprimer toutes les impros de la liste?
        </n-popconfirm>

        <n-button v-if="props.showClear" tertiary :disabled="props.impros.length === 0" @click="updateImpros([...props.impros].reverse())">Inverser</n-button>
        <n-button v-if="props.showExport" type="primary" :disabled="props.impros.length === 0" @click="exportJson">Exporter</n-button>
      </n-space>
    </n-space>
    <br />
    <n-empty v-if="props.impros.length === 0" description="Ajoutez une impro grace au formulaire sur la droite" size="large" style="margin: 50px 0">
      <template #icon>
        <n-icon><TheaterComedyRound /></n-icon>
      </template>
    </n-empty>

    <draggable :list="props.impros" handle=".handle" ghost-class="ghost" :item-key="Math.random">
      <template #item="{ element, index }">
        <n-card class="impro">
          <n-space align="center" justify="space-between" :wrap="false">
            <n-space align="center" :wrap="false">
              <n-icon size="25" class="handle"><Menu /></n-icon>

              <div>
                <div class="info"><span>Type:</span> {{ element.type }}</div>
                <div class="info"><span>Categorie:</span> {{ element.category }}</div>
              </div>
            </n-space>

            <div>
              <div class="info"><span>Nb. personnes:</span> {{ element.playerCount }}</div>
              <div class="info"><span>Durée: </span> {{ formatTime(element.duration) }}</div>
            </div>

            <n-space align="center" justify="center" vertical :size="0">
              <div class="info"><span>Theme</span></div>
              <div class="accent">{{ element.theme }}</div>
            </n-space>

            <n-space class="actions" align="center" justify="center">
              <n-popconfirm positive-text="Supprimer" negative-text="Annuler" @positive-click="() => remove(index)">
                <template #trigger>
                  <n-button class="delete" text style="font-size: 24px">
                    <n-icon><DeleteFilled /></n-icon>
                  </n-button>
                </template>
                Êtes-vous sûr·e·s de vouloir supprimer cette impro ?
              </n-popconfirm>

              <n-button text style="font-size: 24px" @click="editImpro(element)">
                <n-icon><EditFilled /></n-icon>
              </n-button>
            </n-space>
          </n-space>
        </n-card>
      </template>
    </draggable>

    <n-modal v-model:show="showModal">
      <n-card style="width: 600px" title="Modal" size="huge">
        <template #header>
          <div>Modifier l'impro</div>
        </template>
        <ImproEditor edit :impro="improToEdit" @edited="showModal = false" />
      </n-card>
    </n-modal>
  </div>
</template>

<style lang="less" scoped>
.list-wrapper {
  .impro {
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);

    &.ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }

    .handle {
      color: #a2a2a2cc;
      cursor: move;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .info {
      span {
        color: #a2a2a2cc;
        line-height: 1;
      }
    }
    .accent {
      font-size: 22px;
      line-height: 1;
    }
    .actions {
      border-left: 2px solid #a2a2a277;
      height: 100%;
      padding-left: 10px;

      .n-button {
        color: #a2a2a2cc;

        &:hover {
          color: gray;
        }
        &.delete:hover {
          color: indianred;
        }
      }
    }
  }
}
</style>
