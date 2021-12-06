<script setup lang="ts">
import { defineProps } from 'vue';
import { PauseRound, PlayArrowRound, StopRound } from '@vicons/material';
import { Timer, TimerSate } from '@/types/Timers.model';
import { formatTimer } from '@/utils/string';

const props = defineProps<{ timer: Timer }>();
</script>

<template>
  <n-card class="horizontal-timer">
    <n-space align="center" item-style="flex: 1 1 0">
      <div class="timer-title">Timer global</div>
      <div class="timer">
        {{ formatTimer(props.timer, { showHours: true }) }}
      </div>

      <div class="controls">
        <n-button v-show="props.timer.state !== TimerSate.RUNNING" circle color="#aaa" @click="props.timer.start">
          <n-icon size="23"><PlayArrowRound /></n-icon>
        </n-button>
        <span v-show="props.timer.state === TimerSate.RUNNING">
          <n-popconfirm positive-text="Mettre en pause" negative-text="Annuler" @positive-click="props.timer.pause">
            <template #trigger>
              <n-button circle color="#aaa">
                <n-icon size="23"><PauseRound /></n-icon>
              </n-button>
            </template>
            Mettre en pause le timer global ?
          </n-popconfirm>
        </span>
        &nbsp;
        <span v-show="props.timer.state !== TimerSate.STOPPED">
          <n-popconfirm positive-text="Réinitialiser" negative-text="Annuler" @positive-click="props.timer.stop">
            <template #trigger>
              <n-button circle color="#aaa">
                <n-icon size="23"><StopRound /></n-icon>
              </n-button>
            </template>
            Réinitialiser le timer global ?
          </n-popconfirm>
        </span>
      </div>
    </n-space>

    <n-progress
      :border-radius="0"
      class="progress"
      type="line"
      :percentage="(props.timer.elapsed / props.timer.duration) * 100"
      indicator-placement="inside-label"
      color="#888"
    />
  </n-card>
</template>

<style scoped lang="less">
.horizontal-timer {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 10px;
  .timer-title {
    font-size: 16px;
    opacity: 0.7;
  }
  .timer {
    line-height: 1;
    font-size: 25px;
    text-align: center;
    opacity: 0.9;
  }

  .controls {
    text-align: right;
  }
  .progress {
    position: absolute;
    bottom: -4px;
    width: 100%;
    left: 0;
  }
}
</style>
