<template>
  <div class="page-wrapper">
    <n-space align="center" justify="space-between">
      <n-h1>Controls</n-h1>
      <div>
        <n-button type="success" tag="a" href="/dashboard" target="_blank">
          Ouvrir le dashboard &nbsp;&nbsp;
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144l-144 144" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M392 256H100" />
            </svg>
          </n-icon>
        </n-button>
      </div>
    </n-space>
    <n-card title="Configuration générale" class="raised" segmented>
      <template #header-extra>
        <n-switch v-model:value="lock">
          <template #checked>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512">
                <path
                  d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                  fill="currentColor"
                />
              </svg>
            </n-icon>
          </template>
          <template #unchecked>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512">
                <path
                  d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9c40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0C139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  fill="currentColor"
                />
              </svg>
            </n-icon>
          </template>
        </n-switch>
      </template>

      <n-collapse-transition :show="!lock">
        <n-card embedded bordered="false" title="Evenenment">
          <n-form label-width="200" label-placement="left" :disabled="lock">
            <n-form-item label="Type d'évenement">
              <n-input v-model:value="eventStore.type" type="text" placeholder="ex: Match d'improvisation" />
            </n-form-item>
            <n-form-item label="Nom de l'evenement">
              <n-input v-model:value="eventStore.name" type="text" placeholder="ex: Le match des petits" />
            </n-form-item>
          </n-form>
        </n-card>
      </n-collapse-transition>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '@/stores/dashboard.store';
import { useEventStore } from '@/stores/event.store';
import { ref } from 'vue';

const dashboardStore = useDashboardStore();
const eventStore = useEventStore();

const eventTypes = ["Match d'improvisation"];
const lock = ref(true);
</script>

<style scoped lang="less">
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5fb;
  padding: 60px;
  box-sizing: border-box;
}
.n-h1 {
  margin: 0;
}
.raised {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: none;
}
</style>
