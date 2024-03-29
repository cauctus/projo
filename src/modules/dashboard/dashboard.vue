<template>
  <n-config-provider :theme="darkTheme">
    <div class="fullpage-centered">
      <n-card
        v-show="!store.overlay.displayed"
        class="main-card scale-wrapper"
        :bordered="false"
        content-style="padding: 0;"
      >
        <n-space v-if="store.displayHeader" class="header" justify="center" align="center">
          {{ eventStore.name.length ? eventStore.name : eventStore.type }}
        </n-space>

        <n-space class="teams-wrapper" justify="space-between" align="center" :wrap="false">
          <team-info :team="store.teamLeft" />

          <n-space class="middle-wrapper" vertical align="center" :wrap="false">
            <div v-if="store.displayGlobalTimer" class="timer global-timer">
              {{ formatTimer(store.globalTimer, { showHours: true }) }}
            </div>

            <div class="timer current-timer">{{ formatTimer(store.timer) }}</div>
          </n-space>
          <team-info :team="store.teamRight" />
        </n-space>

        <div v-if="store.displayFooter" class="footer">
          <div class="footer-left">
            <div>
              <span class="item-title">Type :</span>
              {{ store.type }}
            </div>
            <div>
              <span class="item-title">Catégorie :</span>
              {{ store.category }}
            </div>
          </div>
          <div class="footer-center">
            <div class="footer-center-head">Thème</div>
            <div class="footer-center-theme">{{ store.theme }}</div>
          </div>
          <div class="footer-right">
            <div class="item-title">Nb. de personnes :</div>
            <div>{{ store.playerCount.length ? store.playerCount : 'Illimité' }}</div>
            <!-- <div><span>Type :</span> {{ store.type }}</div> -->
          </div>
        </div>
      </n-card>

      <div v-show="store.overlay.displayed" class="scale-wrapper">
        <Overlay :content="store.overlay.content" />
      </div>
    </div>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '@/stores/dashboard.store';
import { useEventStore } from '@/stores/event.store';
import { formatTimer } from '@/utils/string';
import { darkTheme } from 'naive-ui';
import Overlay from './components/Overlay.vue';
import TeamInfo from './components/TeamInfo.vue';

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
  overflow: hidden;
}

.scale-wrapper {
  transform: scale(v-bind("store.zoom")) translate(calc(v-bind("store.offsetX") * 100vw),
      calc(v-bind("store.offsetY") * 100vh));
}

.main-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 1520px;
  flex: 0 0 auto;
  // transform: translate(v-bind('store.offsetX'), v-bind('store.offsetY')) scale(v-bind('store.zoom'));

  .header {
    padding: 20px 0 12px;
    border-bottom: @hr;
    font-size: 40px;
    color: hsla(0, 0%, 100%, 0.5);
  }

  .footer {
    border-top: @hr;
    padding: 50px;
    color: hsla(0, 0%, 100%, 0.8);
    line-height: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: v-bind("store.footerFontSizePx");

    .footer-left {
      width: 25%;
    }

    .footer-center {
      width: 50%;
      text-align: center;

      .footer-center-theme {
        font-size: v-bind("store.themeFontSizePx");
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

      .timer {
        line-height: 1;
        font-family: monospace;
      }

      .current-timer {
        border-radius: 20px;
        font-size: 110px;
        background-color: #2a2a30;
        padding: 25px 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      .global-timer {
        margin-bottom: 10px;
        font-size: 40px;
      }
    }
  }
}
</style>
