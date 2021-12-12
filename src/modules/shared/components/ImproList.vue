<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults, ref, computed } from 'vue';
import type { Impro } from '@/models/Impro.model';
import { TheaterComedyRound, PlusRound } from '@vicons/material';
import { formatTime } from '@/utils/string';
import { downloadObjectAsJson } from '@/utils/download';
import { parseImportedImproFile } from '@/utils/upload';
import { UploadFileInfo } from 'naive-ui';
import draggable from 'vuedraggable';
import { FileExport } from '@/models/FileExport.model';
import ImproEditor from './ImproEditor.vue';
import ImproListItem from './ImproListItem.vue';

const emit = defineEmits<{ (e: 'remove', index: number): void; (e: 'update:impros', impros: Impro[]): void; (e: 'loadImpro', impro: Impro): void }>();
const props = withDefaults(
  defineProps<{
    impros: Impro[];
    showExport?: boolean;
    showImport?: boolean;
    showClear?: boolean;
    showLoad?: boolean;
    showArchive?: boolean;
    showCreate?: boolean;
    placeholder?: string;
  }>(),
  {
    showLoad: false,
    showArchive: false,
    showExport: true,
    showImport: true,
    showCreate: true,
    showClear: true,
    placeholder: 'Ajoutez une impro grace au formulaire sur la droite',
  }
);

const showEditModal = ref(false);
const showCreateModal = ref(false);
const improToEdit = ref<Impro>();

const impros = computed(() => props.impros)

function remove(i: number) {
  const a = [...impros.value];
  a.splice(i, 1);
  updateImpros(a);
}

function updateImpros(impros: Impro[]) {
  emit('update:impros', impros);
}

function getFileExport(): FileExport {
  return {
    name: 'projo export',
    version: 1, // increment if format changes
    projoVersion: import.meta.env.PACKAGE_VERSION,
    description: "Fichier utilisé pour l'import de configuration de match d'improvisation",
    impros: impros.value,
  };
}

function exportJson() {
  const content = getFileExport()

  downloadObjectAsJson(content, 'projo-impros.json');
}

async function uploaded({ file: { file } }: { file: UploadFileInfo }) {
  if (file) {
    const improsImported = await parseImportedImproFile(file);
    updateImpros([...impros.value, ...improsImported]);
  }
}

</script>
<template>
  <div class="list-wrapper">
    <n-space class="actions" align="center" justify="space-between">
      <div
        v-show="impros.length > 0"
      >{{ impros.length }} impros pour une durée de {{ formatTime(impros.reduce((acc, { duration }) => acc + duration, 0)) }}</div>

      <n-space>
        <n-upload v-if="props.showImport" :show-file-list="false" :on-change="uploaded">
          <n-button tertiary>Importer</n-button>
        </n-upload>

        <n-popconfirm
          v-if="props.showClear"
          positive-text="Supprimer"
          negative-text="Annuler"
          @positive-click="updateImpros([])"
        >
          <template #trigger>
            <n-button tertiary :disabled="impros.length === 0">Vider</n-button>
          </template>
          Êtes-vous sûr·e·s de vouloir supprimer toutes les impros de la liste?
        </n-popconfirm>

        <n-button
          v-if="props.showClear"
          tertiary
          :disabled="impros.length === 0"
          @click="updateImpros([...impros].reverse())"
        >Inverser</n-button>
        <n-button
          v-if="props.showExport"
          :type="props.showCreate ? 'default' : 'primary'"
          :tertiary="props.showCreate"
          :disabled="impros.length === 0"
          @click="exportJson"
        >Exporter</n-button>
        <n-button v-if="props.showCreate" type="primary" circle @click="showCreateModal = true">
          <n-icon size="large">
            <PlusRound />
          </n-icon>
        </n-button>
      </n-space>
    </n-space>
    <br />
    <n-empty
      v-if="impros.length === 0"
      :description="props.placeholder"
      size="large"
      style="margin: 50px 0"
    >
      <template #icon>
        <n-icon>
          <TheaterComedyRound />
        </n-icon>
      </template>
    </n-empty>

    <draggable :list="impros" handle=".handle" ghost-class="ghost" :item-key="Math.random">
      <template #item="{ element, index }">
        <ImproListItem
          :impro="element"
          :show-load="props.showLoad"
          :first="index === 0"
          @update:impro="(impro) => impros[index] = impro"
          @remove="remove(index)"
          @load="emit('loadImpro', element)"
          @send-last="impros.push(impros.splice(index, 1)[0])"
        />
      </template>
    </draggable>

    <n-modal v-model:show="showEditModal">
      <n-card style="width: 600px" title="Modal" size="huge">
        <template #header>
          <div>Modifier l'impro</div>
        </template>
        <ImproEditor edit :impro="improToEdit" @edited="showEditModal = false" />
      </n-card>
    </n-modal>
    <n-modal v-model:show="showCreateModal">
      <n-card style="width: 600px" title="Modal" size="huge">
        <template #header>
          <div>Ajouter une impro</div>
        </template>
        <ImproEditor
          @added="(impro) => (updateImpros([impro, ...impros]), showCreateModal = false)"
        />
      </n-card>
    </n-modal>
  </div>
</template>

<style lang="less" scoped>
</style>
