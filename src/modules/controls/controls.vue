<script lang="ts" setup>
import { Impro } from '@/models/Impro.model';
import ImproList from '@/modules/shared/components/ImproList.vue';
import { useDashboardStore } from '@/stores/dashboard.store';
import { useEventStore } from '@/stores/event.store';
import { currentMillisToUTCMillis, utcMillisToCurrentMillis } from '@/utils/date';
import { ArrowUpRight, Lock } from '@vicons/tabler';
import CategoryAutoComplete from '../shared/components/CategoryAutoComplete.vue';
import PlayerCountComplete from '../shared/components/PlayerCountComplete.vue';
import TypeAutoComplete from '../shared/components/TypeAutoComplete.vue';
import ColorPicker from './components/ColorPicker.vue';
import EditableTimer from './components/EditableTimer.vue';
import HorizontalTimer from './components/HorizontalTimer.vue';
import TeamControl from './components/TeamControl.vue';
import { useControlsStore } from './controls.store';

const dashboardStore = useDashboardStore();
const eventStore = useEventStore();
const controlsStore = useControlsStore();

function loadImpro(impro: Impro) {
  dashboardStore.playerCount = impro.playerCount;
  dashboardStore.category = impro.category;
  dashboardStore.timer.setDuration(impro.duration);
  dashboardStore.theme = impro.theme;
  dashboardStore.type = impro.type;
}
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space align="center" justify="space-between">
        <n-h1>Controls</n-h1>
        <div> 
          <n-popconfirm
            positive-text="Reset"
            negative-text="Annuler"
            @positive-click="() => [dashboardStore.$reset(), eventStore.$reset(), controlsStore.$reset()]"
          >
            <template #trigger>
              <n-button>Reset</n-button>
            </template>
            Êtes-vous sûr·e·s de vouloir reset toutes la valeures par default ?
          </n-popconfirm>&nbsp;
          <router-link to="/dashboard" #="{ navigate, href }" custom>
            <n-button tag="a" :href="href" type="success" target="_blank">
              Ouvrir le dashboard &nbsp;
              <n-icon>
                <ArrowUpRight />
              </n-icon>
            </n-button>
          </router-link>
        </div>
      </n-space>
      <n-card
        title="Configuration générale"
        class="raised content-no-padding"
        :segmented="!controlsStore.lockConfiguration"
      >
        <template #header-extra>
          <n-switch v-model:value="controlsStore.lockConfiguration">
            <template #checked>
              <n-icon>
                <Lock />
              </n-icon>
            </template>
          </n-switch>
        </template>

        <n-collapse-transition :show="!controlsStore.lockConfiguration">
          <n-card embedded :bordered="false" class="section-card">
            <n-collapse :default-expanded-names="['1', '2', '3']">
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
                      :value="currentMillisToUTCMillis(dashboardStore.globalTimer.duration)"
                      :on-update:value="(value: number) => dashboardStore.globalTimer.duration = utcMillisToCurrentMillis(value)"
                      :actions="['confirm']"
                      format="H'h' mm'm'"
                      :minutes="Array.from(Array(12), (_, i) => i * 5)"
                      :disabled="!dashboardStore.displayGlobalTimer"
                      input-readonly
                    />
                    <span v-show="!dashboardStore.displayGlobalTimer" class="muted">&nbsp;&nbsp; Le timer global est desactivé</span>
                  </n-form-item>
                  <n-form-item label="Utiliser une liste d'impros">
                    <n-switch v-model:value="controlsStore.useImproList" />
                  </n-form-item>
                  <n-form-item label="Utiliser les pénalités">
                    <n-switch v-model:value="dashboardStore.displayPenality" />
                  </n-form-item>
                </n-form>
              </n-collapse-item>
              <n-collapse-item title="Affichage" name="2">
                <n-form label-width="200" label-placement="left">
                  <n-grid :cols="3">
                    <n-gi :span="2">
                      <n-form-item label="Zoom du dashboard">
                        <n-slider
                          v-model:value="dashboardStore.zoom"
                          :step="0.05"
                          :min="0"
                          :max="2"
                          :format-tooltip="(v: number) => `${Math.floor(v * 100)}%`"
                        />
                      </n-form-item>
                      <n-form-item label="Décalage horizontal">
                        <n-slider
                          v-model:value="dashboardStore.offsetX"
                          :step="0.05"
                          :min="-1"
                          :max="1"
                          :format-tooltip="(v: number) => `${Math.floor(v * 100)}%`"
                        />
                      </n-form-item>
                      <n-form-item label="Décalage vertical">
                        <n-slider
                          v-model:value="dashboardStore.offsetY"
                          :step="0.05"
                          :min="-1"
                          :max="1"
                          :format-tooltip="(v: number) => `${Math.floor(v * 100)}%`"
                        />
                      </n-form-item>

                      <n-form-item label="Taille des indications">
                        <n-input-number v-model:value="dashboardStore.footerFontSize" style="width: 100%" />
                      </n-form-item>
                      <n-form-item label="Taille du thème">
                        <n-input-number v-model:value="dashboardStore.themeFontSize" style="width: 100%" />
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
                <n-form-item label="Inverser la position des équipes dans les controls par rapport au dashboard" label-placement="left">
                  <n-switch v-model:value="controlsStore.inverseTeamPosition" />
                </n-form-item>
                <n-form label-width="200" label-placement="left">
                  <n-grid :cols="2" x-gap="24">
                    <n-gi>
                      <strong>Equipe 1</strong>
                      <n-form-item label="Nom de l'équipe">
                        <n-input v-model:value="dashboardStore.teamLeft.name" type="text" placeholder="ex: TTI" />
                      </n-form-item>
                      <n-form-item label="Nombre de pénalités max">
                        <n-input-number
                          v-model:value="dashboardStore.teamLeft.maxPenality"
                          style="width: 100%"
                          type="text"
                          placeholder="ex: 3"
                          :min="1"
                        />
                      </n-form-item>
                      <n-form-item label="Couleur l'équipe">
                        <color-picker v-model:value="dashboardStore.teamLeft.color" />
                      </n-form-item>
                    </n-gi>
                    <n-gi>
                      <strong>Equipe 2</strong>
                      <n-form-item label="Nom de l'équipe">
                        <n-input v-model:value="dashboardStore.teamRight.name" type="text" placeholder="ex: TTI" />
                      </n-form-item>
                      <n-form-item label="Nombre de pénalités max">
                        <n-input-number
                          v-model:value="dashboardStore.teamRight.maxPenality"
                          style="width: 100%"
                          type="text"
                          placeholder="ex: 3"
                          :min="1"
                        />
                      </n-form-item>
                      <n-form-item label="Couleur l'équipe">
                        <color-picker v-model:value="dashboardStore.teamRight.color" />
                      </n-form-item>
                    </n-gi>
                  </n-grid>
                </n-form>
              </n-collapse-item>
            </n-collapse>
          </n-card>
        </n-collapse-transition>
      </n-card>
      <br>

      <n-card title="Overlay" class="raised content-no-padding" :segmented="!controlsStore.lockOverlay">
        <template #header-extra>
          <n-switch v-model:value="controlsStore.lockOverlay">
            <template #checked>
              <n-icon>
                <Lock />
              </n-icon>
            </template>
          </n-switch>
        </template>

        <n-collapse-transition :show="!controlsStore.lockOverlay">
          <n-card embedded :bordered="false">
            <n-form label-width="200" label-placement="left">
              <n-form-item label="Afficher l'overlay">
                <n-switch v-model:value="dashboardStore.overlay.displayed" />
              </n-form-item>


              <n-form-item label="Contenu">
                <n-input v-model:value="dashboardStore.overlay.content" type="textarea" placeholder="Contenu" />
              </n-form-item>
            </n-form>
            <n-space justify="center">
              <n-alert v-if="dashboardStore.overlay.displayed" title="Attention" type="warning">
                L'overlay est affiché, les modifications seront visibles par tout le monde
              </n-alert>
            </n-space>
          </n-card>
        </n-collapse-transition>
      </n-card>
      <br>
      <!-- <n-card class="raised"> -->
      <n-grid :cols="7" x-gap="12">
        <n-gi span="2">
          <n-space vertical justify="center" style="height: 100%">
            <TeamControl
              :team="controlsStore.inverseTeamPosition ? dashboardStore.teamRight : dashboardStore.teamLeft"
              class="raised"
              @apply-penality="(controlsStore.inverseTeamPosition ? dashboardStore.teamLeft : dashboardStore.teamRight).increaseScore"
            />
          </n-space>
        </n-gi>
        <n-gi span="3">
          <n-space item-style="width: 100%" vertical style="height: 100%" justify="center">
            <HorizontalTimer
              v-show="dashboardStore.displayGlobalTimer"
              class="raised"
              :timer="dashboardStore.globalTimer"
            />
            <EditableTimer class="raised" :timer="dashboardStore.timer" />

            <n-card class="raised content-no-padding">
              <n-form label-placement="top">
                <div style="padding: 20px">
                  <n-space item-style="flex-grow: 1; padding:0" :wrap="false">
                    <n-form-item label="Type d'impro">
                      <TypeAutoComplete v-model:value="dashboardStore.type" />
                    </n-form-item>
                    <n-form-item label="Nombre de personnes">
                      <PlayerCountComplete v-model:value="dashboardStore.playerCount" />
                    </n-form-item>
                  </n-space>

                  <n-form-item label="Catégorie" :show-feedback="false">
                    <CategoryAutoComplete v-model:value="dashboardStore.category" />
                  </n-form-item>
                </div>

                <n-card embedded title="Thème">
                  <n-form-item :show-label="false">
                    <n-input
                      v-model:value="dashboardStore.theme"
                      size="large"
                      type="textarea"
                      :autosize="{ minRows: 1, maxRows: 5 }"
                      placeholder="ex: Caucus sur le cactus"
                    />
                  </n-form-item>
                </n-card>
              </n-form>
            </n-card>
          </n-space>
        </n-gi>
        <n-gi span="2">
          <n-space vertical justify="center" style="height: 100%">
            <TeamControl
              :team="controlsStore.inverseTeamPosition ? dashboardStore.teamLeft : dashboardStore.teamRight"
              icons-left
              class="raised"
              @apply-penality="(controlsStore.inverseTeamPosition ? dashboardStore.teamRight : dashboardStore.teamLeft).increaseScore"
            />
          </n-space>
        </n-gi>
      </n-grid>

      <br>
      <n-grid v-show="controlsStore.useImproList" :cols="8" x-gap="12">
        <n-gi :span="6" :offset="1">
          <n-card embedded class="raised">
            <ImproList
              v-model:impros="controlsStore.impros"
              show-load
              show-archive
              show-create
              placeholder="Créer un liste d'impro sur /create"
              @load-impro="loadImpro"
            />
          </n-card>
        </n-gi>
        <n-gi :span="2" />
      </n-grid>

      <!-- </n-card> -->
    </div>
  </div>
</template>

<style scoped lang="less">
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5fb;
  padding: 60px;
  box-sizing: border-box;

  .content-wrapper {
    max-width: 1300px;
    margin: 0 auto;
  }
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
  &> ::v-deep(.n-card__content) {
    padding: 0;
  }
}

.header-centered {
  ::v-deep(.n-card-header) {
    text-align: center;
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
