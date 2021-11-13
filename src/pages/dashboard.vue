<template>
  <div class="fullpage-centered">
    <n-card class="main-card" :bordered="false" content-style="padding: 0;">
      <n-space class="header" justify="center" align="center"> Match d'impro </n-space>

      <n-space class="teams-wrapper" justify="space-between" align="center">
        <team-info :team="store.teamLeft" />

        <n-space class="middle-wrapper" vertical align="center" :wrap="false">
          <div class="timer global-timer">
            {{ formatTime(store.globalTimer.value) }}
          </div>

          <div class="timer current-timer">
            {{ formatTime(store.timer.value) }}
          </div>
        </n-space>

        <team-info :team="store.teamRight" />
      </n-space>

      <div class="footer">
        <div class="footer-left">
          <div><span>Type :</span> {{ store.type }}</div>
          <div><span>Categorie :</span> {{ store.category }}</div>
        </div>
        <div class="footer-center">
          <div class="footer-center-head">Theme</div>
          <div class="footer-center-theme">
            {{ store.theme }}
          </div>
        </div>
        <div class="footer-right">
          <div>Nb. de joueurs·euses :</div>
          <div>{{ store.playerCount >= 0 ? store.playerCount : 'Illimité' }}</div>
          <!-- <div><span>Type :</span> {{ store.type }}</div> -->
        </div>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { useDashboardStore } from '@/stores/dashboard.store';
import { formatTime } from '@/utils/string';
import TeamInfo from '../modules/dashboard/components/TeamInfo.vue';

const store = useDashboardStore();
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
}

.main-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 1520px;
  flex: 0 0 auto;

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
