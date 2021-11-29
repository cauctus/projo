<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue';
import { Impro } from '@/types/Impro.model';
import { DeleteOutlineFilled } from '@vicons/material';
import { formatTime } from '@/utils/string';
import { downloadObjectAsJson } from '@/utils/download';
import { parseImportedImproFile } from '@/utils/upload';
import { UploadFileInfo } from 'naive-ui';
import draggable from 'vuedraggable';

const emit = defineEmits<{ (e: 'remove', index: number): void; (e: 'update:impros', impros: Impro[]): void }>();

const props = withDefaults(defineProps<{ impros: Impro[]; showExport?: boolean; showImport?: boolean; showClear?: boolean }>(), { showExport: true, showImport: true, showClear: true });

function remove(i: number) {
  const a = [...props.impros];
  a.splice(i, 1);
  updateImpros(a);
}

function updateImpros(impros: Impro[]) {
  emit('update:impros', impros);
}

function exportJson() {
  const content = {
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
    <n-space class="actions">
      <n-button v-if="props.showExport" @click="exportJson">Exporter pour arbitrage</n-button>
      <n-upload v-if="props.showImport" :show-file-list="false" :on-change="uploaded"><n-button>Importer une liste</n-button></n-upload>
      <n-button v-if="props.showClear" @click="updateImpros([])">Vider</n-button>
    </n-space>
    <br />

    <draggable :list="props.impros" handle=".handle" item-key="theme">
      <template #item="{ element, index }">
        <n-card class="impro">
          <n-space align="center" justify="space-between" :wrap="false">
            <n-space align="center">
              <div class="accent handle" style="margin-right: 10px">{{ index + 1 }}</div>

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

            <n-space class="actions" vertical align="center" justify="center">
              <n-popconfirm positive-text="Supprimer" negative-text="Annuler" @positive-click="() => remove(index)">
                <template #trigger>
                  <n-button text style="font-size: 24px">
                    <n-icon><DeleteOutlineFilled /></n-icon>
                  </n-button>
                </template>
                Êtes-vous sûr·e·s de vouloir supprimer cette impro ?
              </n-popconfirm>
            </n-space>
          </n-space>
        </n-card>
      </template>
    </draggable>

    <!-- <n-card v-for="(impro, i) in props.impros" :key="i" class="impro">
      <n-space align="center" justify="space-between" :wrap="false">
        <n-space align="center">
          <div class="accent" style="margin-right: 10px">{{ i + 1 }}</div>

          <div>
            <div class="info"><span>Type:</span> {{ impro.type }}</div>
            <div class="info"><span>Categorie:</span> {{ impro.category }}</div>
          </div>
        </n-space>

        <div>
          <div class="info"><span>Nb. personnes:</span> {{ impro.playerCount }}</div>
          <div class="info"><span>Durée: </span> {{ formatTime(impro.duration) }}</div>
        </div>

        <n-space align="center" justify="center" vertical :size="0">
          <div class="info"><span>Theme</span></div>
          <div class="accent">{{ impro.theme }}</div>
        </n-space>

        <n-space class="actions" vertical align="center" justify="center">
          <n-popconfirm positive-text="Supprimer" negative-text="Annuler" @positive-click="() => remove(i)">
            <template #trigger>
              <n-button text style="font-size: 24px">
                <n-icon><DeleteOutlineFilled /></n-icon>
              </n-button>
            </template>
            Êtes-vous sûr·e·s de vouloir supprimer cette impro ?
          </n-popconfirm>
        </n-space>
      </n-space>

       <n-button @click="remove(i)">X</n-button> -->
    <!-- </n-card> -->
  </div>
</template>

<style lang="less" scoped>
.list-wrapper {
  .impro {
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);

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
          color: indianred;
        }
      }
    }
  }
}
</style>
