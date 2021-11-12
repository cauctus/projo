<template>
  <div>
    <h1>Controls</h1>

    <n-card>
      <h1 class="text-4xl">{{ store.teamLeft.name }}&nbsp;</h1>
      <n-input v-model:value="store.teamLeft.name" type="text" placeholder="Nom de l'équipe" maxlength="25" show-count clearable />
      <n-color-picker :modes="['hex']" v-model:value="store.teamLeft.color" />
      <n-input-number v-model:value="store.teamLeft.score" />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '../stores/dashboard.store';

const store = useDashboardStore();
</script>
