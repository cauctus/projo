<template>
  <n-config-provider :theme="darkTheme">
    <div class="fullpage-centered">
      <n-card class="main-card" :bordered="false" content-style="padding: 0;">
        <n-space v-if="store.displayHeader" class="header" justify="center" align="center">{{ eventStore.name.length ? eventStore.name : eventStore.type }}</n-space>

        <n-space class="teams-wrapper" justify="space-between" align="center">
          <team-info :team="store.teamLeft" :max-penality="store.maxPenality" />

          <n-space class="middle-wrapper" vertical align="center" :wrap="false">
            <div v-if="store.displayGlobalTimer" class="timer global-timer">
              {{ formatTimer(store.globalTimer, { showHours: true }) }}
            </div>

            <div class="timer current-timer">
              {{ formatTimer(store.timer) }}
            </div>
          </n-space>

          <team-info :team="store.teamRight" :max-penality="store.maxPenality" />
        </n-space>

        <div v-if="store.displayFooter" class="footer">
          <div class="footer-left">
            <div><span>Type :</span> {{ store.type }}</div>
            <div><span>Catégorie :</span> {{ store.category }}</div>
          </div>
          <div class="footer-center">
            <div class="footer-center-head">Thème</div>
            <div class="footer-center-theme">
              {{ store.theme }}
            </div>
          </div>
          <div class="footer-right">
            <div>Nb. de personnes :</div>
            <div>{{ store.playerCount.length ? store.playerCount : 'Illimité' }}</div>
            <!-- <div><span>Type :</span> {{ store.type }}</div> -->
          </div>
        </div>
      </n-card>
    </div>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useEventStore } from '@/stores/event.store';
import { useDashboardStore } from '@/stores/dashboard.store';
import TeamInfo from './components/TeamInfo.vue';
import { darkTheme } from 'naive-ui';
import { formatTimer } from '@/utils/string';

const store = useDashboardStore();
const eventStore = useEventStore();
</script>

<style lang="less" scoped>
@hr: 4px solid hsla(0, 0%, 100%, 0.12);
.fullpage-centered {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #101014;
}

.main-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 1520px;
  flex: 0 0 auto;
  // transform: translate(v-bind('store.offsetX'), v-bind('store.offsetY')) scale(v-bind('store.zoom'));
  transform: scale(v-bind('store.zoom')) translate(calc(v-bind('store.offsetX') * 100vw), calc(v-bind('store.offsetY') * 100vh));

  .header {
    padding: 20px 0 12px;
    border-bottom: @hr;
    font-size: 40px;
    color: hsla(0, 0%, 100%, 0.5);
  }

  .footer {
    border-top: @hr;
    padding: 50px;
    color: hsla(0, 0%, 100%, 0.5);
    line-height: 1;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .footer-left {
      width: 25%;
    }
    .footer-center {
      width: 50%;
      text-align: center;

      .footer-center-theme {
        font-size: 60px;
        color: hsla(0, 0%, 100%, 0.8);
      }
    }
    .footer-right {
      width: 25%;
      text-align: right;
    }
  }

  .teams-wrapper {
    padding: 50px;

    .middle-wrapper {
      z-index: 50;
      margin: 0 -40px;
      .timer {
        line-height: 1;
        font-family: monospace;
      }
      .current-timer {
        border-radius: 20px;
        font-size: 110px;
        background-color: #2a2a30;
        padding: 25px 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      .global-timer {
        margin-bottom: 10px;
        font-size: 40px;
      }
    }
  }
}
</style>
