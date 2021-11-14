<template>
  <div class="page-wrapper">
    <n-space align="center" justify="space-between">
      <n-h1>Controls</n-h1>
      <div>
        <n-popconfirm @positive-click="() => [dashboardStore.$reset(), eventStore.$reset(), controlsStore.$reset()]">
          <template #trigger>
            <n-button>Reset</n-button>
          </template>
          Êtes-vous sûr·e·s de vouloir reset toutes la valeures par default ?
        </n-popconfirm>
        &nbsp;
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
    <n-card title="Configuration générale" class="raised content-no-padding" :segmented="!controlsStore.lockConfiguration">
      <template #header-extra>
        <n-switch v-model:value="controlsStore.lockConfiguration">
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

      <n-collapse-transition :show="!controlsStore.lockConfiguration">
        <n-card embedded :bordered="false" class="section-card">
          <n-collapse>
            <n-collapse-item title="Événement" name="1">
              <n-form label-width="200" label-placement="left">
                <n-form-item label="Type d'évenement">
                  <n-input v-model:value="eventStore.type" type="text" placeholder="ex: Match d'improvisation" />
                </n-form-item>
                <n-form-item label="Nom de l'evenement">
                  <n-input v-model:value="eventStore.name" type="text" placeholder="ex: Le match des petits" />
                </n-form-item>
                <n-form-item label="Durée totale de l'evenement">
                  <n-time-picker
                    v-model:value="dashboardStore.globalTimer.duration"
                    placeholder="ex: Le match des petits"
                    :actions="['confirm']"
                    format="H'h' mm'm'"
                    :minutes="Array.from(Array(6), (_, i) => i * 10)"
                    :disabled="!dashboardStore.displayGlobalTimer"
                  />
                  <span v-show="!dashboardStore.displayGlobalTimer" class="muted"> &nbsp;&nbsp; Le timer global est desactivé</span>
                </n-form-item>
                <n-form-item label="Nombre de pénalités max">
                  <n-input-number v-model:value="dashboardStore.maxPenality" type="text" placeholder="ex: 3" :min="0" />
                </n-form-item>
              </n-form>
            </n-collapse-item>
            <n-collapse-item title="Affichage" name="2">
              <n-form label-width="200" label-placement="left">
                <n-grid :cols="3">
                  <n-gi :span="2">
                    <n-form-item label="Zoom du dashboard">
                      <n-slider v-model:value="dashboardStore.zoom" :step="0.05" :min="0" :max="2" :format-tooltip="(v) => `${Math.floor(v * 100)}%`" />
                    </n-form-item>
                    <n-form-item label="Décalage horizontal">
                      <n-slider v-model:value="dashboardStore.offsetX" :step="0.05" :min="-1" :max="1" :format-tooltip="(v) => `${Math.floor(v * 100)}%`" />
                    </n-form-item>
                    <n-form-item label="Décalage vertical">
                      <n-slider v-model:value="dashboardStore.offsetY" :step="0.05" :min="-1" :max="1" :format-tooltip="(v) => `${Math.floor(v * 100)}%`" />
                    </n-form-item>
                  </n-gi>
                  <n-gi>
                    <n-form-item label="Afficher le header">
                      <n-switch v-model:value="dashboardStore.displayHeader" />
                    </n-form-item>
                    <n-form-item label="Afficher le footer">
                      <n-switch v-model:value="dashboardStore.displayFooter" />
                    </n-form-item>
                    <n-form-item label="Afficher le timer global">
                      <n-switch v-model:value="dashboardStore.displayGlobalTimer" />
                    </n-form-item>
                  </n-gi>
                </n-grid>
              </n-form>
            </n-collapse-item>
            <n-collapse-item title="Equipes" name="3">
              <n-form label-width="200" label-placement="left">
                <n-grid :cols="2" x-gap="24">
                  <n-gi>
                    <strong>Equipe 1</strong>
                    <n-form-item label="Nom de l'équipe">
                      <n-input v-model:value="dashboardStore.teamLeft.name" type="text" placeholder="ex: TTI" />
                    </n-form-item>
                    <n-form-item label="Couleur l'équipe">
                      <n-color-picker v-model:value="dashboardStore.teamLeft.color" />
                    </n-form-item>
                  </n-gi>
                  <n-gi>
                    <strong>Equipe 2</strong>
                    <n-form-item label="Nom de l'équipe">
                      <n-input v-model:value="dashboardStore.teamRight.name" type="text" placeholder="ex: TTI" />
                    </n-form-item>
                    <n-form-item label="Couleur l'équipe">
                      <n-color-picker v-model:value="dashboardStore.teamRight.color" />
                    </n-form-item>
                  </n-gi>
                </n-grid>
              </n-form>
            </n-collapse-item>
          </n-collapse>
        </n-card>
      </n-collapse-transition>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '@/stores/dashboard.store';
import { useEventStore } from '@/stores/event.store';
import { useControlsStore } from './controls.store';
import { ref } from 'vue';

const dashboardStore = useDashboardStore();
const eventStore = useEventStore();
const controlsStore = useControlsStore();

const eventTypes = ["Match d'improvisation"];
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
.muted {
  color: #a2a2a2cc;
}
.content-no-padding {
  ::v-deep(.n-card__content) {
    padding: 0;
  }
}
.section-card {
  border-radius: 0;
  &:not(:first-child) {
    border-top: 1px solid #eee;
  }
  ::v-deep(.n-card__content) {
    padding: 30px;
  }
}
</style>
