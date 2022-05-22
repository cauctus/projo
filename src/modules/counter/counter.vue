<script lang="ts" setup>
import { useMediaQuery, useNow } from '@vueuse/core';
import { useCounterStore } from './counter.store';

const store = useCounterStore()
const isMobile = useMediaQuery('(max-width: 440px)')
const now = useNow()
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space justify="center">
        <n-time :time="now" format="hh:mm:ss" class="time" />
      </n-space>
      <br>
      <br>
      <n-space item-style="flex:1 1 0">
        <n-card style="width: 100%">
          <n-statistic tabular-nums label="Actuellement"> 
            <n-space justify="center" class="timer timer-current">
              {{ store.countCurrent }}
            </n-space>
          </n-statistic>
        </n-card>

        <n-card style="width: 100%">
          <n-statistic tabular-nums label="Au total"> 
            <n-space justify="center" class="timer timer-global">
              {{ store.countGlobal }}
            </n-space>
          </n-statistic>
        </n-card>
      </n-space>
      <br>
      <n-space vertical>
        <n-button class="button" secondary @click="store.increment">
          +1
        </n-button>
        <n-button class="button" secondary @click="store.decrement">
          -1
        </n-button>

        <n-space item-style="flex:1 1 0" :vertical="isMobile">
          <n-popconfirm
            positive-text="Reset"
            negative-text="Annuler"
            @positive-click="() => store.countCurrent = 0"
          >
            <template #trigger>
              <n-button tertiary style="width: 100%">
                Reset le compteur actuel
              </n-button>
            </template>
            Êtes-vous sûr·e·s de vouloir reset le compteur actuel ?
          </n-popconfirm>
          <n-popconfirm
            positive-text="Reset"
            negative-text="Annuler"
            @positive-click="() => store.countGlobal = 0"
          >
            <template #trigger>
              <n-button tertiary style="width: 100%">
                Reset le compteur global
              </n-button>
            </template>
            Êtes-vous sûr·e·s de vouloir reset le compteur global ?
          </n-popconfirm>
        </n-space>
      </n-space>
    </div>
  </div>
</template>

<style scoped lang="less">
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5fb;
  padding: 60px 25px;
  box-sizing: border-box;

  .content-wrapper {
    max-width: 550px;
    margin: 0 auto;
  }


  .time {
    opacity: 0.6;
    font-size: 25px;
  }

.button {
  width: 100%;
  padding: 35px 0;
  font-size: 25px;
}
  .timer {
    font-size: 60px;

  }
}
</style>
