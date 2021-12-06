<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{ value: string }>();
const emit = defineEmits(['update:value']);
const colors = ['#D92149', '#FFAC26', '#4FB233', '#335FFF'];
</script>

<template>
  <div style="width: 100%" class="color-picker">
    <span v-for="(color, i) of colors" :key="i" class="color-item">
      <n-button :color="color" circle size="small" @click="() => emit('update:value', color)">&nbsp;</n-button>
    </span>

    <n-color-picker :value="props.value" :on-update:value="(value: string) => emit('update:value', value)" :show-alpha="false" />
  </div>
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
