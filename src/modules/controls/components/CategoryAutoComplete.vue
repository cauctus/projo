<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps<{ value: string }>();
const emit = defineEmits<{ (e: 'update:value', id: string): void }>();

const normalyze = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const categories = ['Rimée', 'Western'];
const options = computed(() => categories.filter((c) => normalyze(c).includes(normalyze(props.value))));
</script>

<template>
  <n-auto-complete :options="options" :value="props.value" :on-update:value="(value: string) => emit('update:value', value)" placeholder="ex: Western" />
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
