<template>
  <div class="container">
    <h1 class="text-4xl">{{ store.teamLeft.name }}</h1>
    <n-button>test</n-button>
  </div>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '../stores/dashboard.store';

const store = useDashboardStore();
</script>
