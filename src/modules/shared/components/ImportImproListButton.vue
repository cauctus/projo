<template>
  <n-upload :show-file-list="false" :on-change="uploaded" accept=".json, .json5, .jsonc">
    <slot />
  </n-upload>
</template>

<script setup lang="ts">
import { Impro } from '@/models/Impro.model';
import { parseImportedImproFile } from '@/utils/upload';
import { UploadFileInfo } from 'naive-ui';
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'improUploaded', impros: Impro[]): void;
}>();

async function uploaded({ file: { file } }: { file: UploadFileInfo }) {
  if (file) {
    const improsImported = await parseImportedImproFile(file);

    emit('improUploaded', improsImported)
  }
}
</script>

<style scoped>
</style> 