<script lang="ts" setup>
import {categories} from '@cauctus/dataset'
import { defineProps, defineEmits, computed } from 'vue';
import { InfoFilled } from '@vicons/material';

const props = defineProps<{ value: string }>();
const emit = defineEmits<{ (e: 'update:value', id: string): void }>();

const normalyze = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const categoriesTitles = categories.map(({title}) => title)
const categoryIndices =  categories.reduce((acc, v) => {
  acc[normalyze(v.title)] = v.description
  return acc
}, {} as {[k:string]: string})

const options = computed(() => categoriesTitles.filter((c) => normalyze(c).includes(normalyze(props.value))));
const tooltip = computed(() => categoryIndices[normalyze(props.value)]);
</script>

<template>
  <n-auto-complete :options="options" :value="props.value" :on-update:value="(value: string) => emit('update:value', value)" placeholder="ex: Western">
    <template #suffix>
      <n-tooltip v-if="tooltip" trigger="hover" placement="top" :style="{ maxWidth: '400px' }">
        <template #trigger>
          <n-icon style="margin-left: 5px; cursor: pointer;"><InfoFilled /></n-icon>
        </template>
        {{ tooltip }}
      </n-tooltip>
    </template>
  </n-auto-complete>
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
