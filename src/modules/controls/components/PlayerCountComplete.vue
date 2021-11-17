<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps<{ value: string }>();
const emit = defineEmits<{ (e: 'update:value', id: string): void }>();

const options = computed(() => {
  const parsed = parseInt(props.value);

  return [...(isNaN(parsed) ? [] : [`${parsed} par équipes`, `${parsed} personnes maximum`]), 'Illimité'];
});
</script>

<template>
  <n-auto-complete :options="options" :value="props.value" :on-update:value="(value: string) => emit('update:value', value)" placeholder="ex: Illimité" />
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
