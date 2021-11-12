<script setup lang="ts">
import { darkTheme } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>

<style>
body {
  min-height: 100%;
}
html {
  height: 100%;
}
</style>
