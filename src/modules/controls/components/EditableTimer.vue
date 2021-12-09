<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { PauseRound, PlayArrowRound, StopRound } from '@vicons/material';
import { Timer, TimerSate } from '@/types/Timers.model';
import { formatTimer } from '@/utils/string';

const duration = ref(3 * 60 * 1000); 
const props = defineProps<{ timer: Timer }>();
</script>

<template>
  <n-card class="horizontal-timer">
    <n-space align="center" item-style="flex: 1 1 0">
      <n-space vertical style="padding-right: 10px">
        <div class="timer-title">Timer actuel</div>

        <n-time-picker
          v-model:value="duration"
          :actions="['confirm']"
          format="mm'm' ss's'"
        />
        <n-space justify="space-between">
          <n-button size="small" tertiary @click="duration /= 2">÷ 2</n-button>
          <n-button size="small" type="primary" @click="props.timer.setDuration(duration), props.timer.stop()">Appliquer</n-button>
        </n-space>
      </n-space>

      <div style="text-align: center">
        <n-progress
          :status="props.timer.state === TimerSate.ENDED ? 'error' : 'success'"
          class="progress"
          type="circle"
          :percentage="(props.timer.elapsed / props.timer.duration) * 100"
          indicator-placement="inside-label"
        >
          <div class="timer">
            {{ formatTimer(props.timer) }}
          </div>
        </n-progress>
      </div>

      <div class="controls">
        <n-button
          v-show="props.timer.state !== TimerSate.RUNNING"
          circle
          type="primary"
          @click="props.timer.start"
        >
          <n-icon size="23"><PlayArrowRound /></n-icon>
        </n-button>
        <span v-show="props.timer.state === TimerSate.RUNNING">
          <n-button circle color="#aaa" @click="props.timer.pause">
            <n-icon size="23"><PauseRound /></n-icon>
          </n-button>
        </span>
        &nbsp;
        <span v-show="props.timer.state !== TimerSate.STOPPED">
          <n-button circle type="error" @click="props.timer.stop">
            <n-icon size="23"><StopRound /></n-icon>
          </n-button>
        </span>
      </div>
    </n-space>
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
    font-size: 32px;
    text-align: center;
  }

  .controls {
    text-align: right;
  }
}
</style>
