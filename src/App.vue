<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { useStyleStore } from '@/stores/style.store';

const store = useStyleStore();
</script>

<template>
  <n-config-provider :theme="store.isDarkMode ? darkTheme : null">
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>

<style>
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
