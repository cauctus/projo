<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{ value: string }>();
const emit = defineEmits<{ (e: 'update:value', id: string): void }>();

const types = ['Mixte', 'Comparée', 'Fusillade', 'Mitraillette'].map((label) => ({ label, value: label }));
</script>

<template>
  <n-select :options="types" :value="props.value" :on-update:value="(value: string) => emit('update:value', value)" placeholder="ex: Western" filterable />
</template>

<style lang="less" scoped>
.color-picker {
  display: flex;
  align-items: center;

  .color-item {
    margin-right: 10px;
  }
}
</style>
