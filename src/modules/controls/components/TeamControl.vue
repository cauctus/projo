<script setup lang="ts">
import { Team } from '@/types/Team.model';
import { defineProps } from 'vue';
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from '@vicons/tabler';

const props = defineProps<{ team: Team; maxPenality: number }>();
</script>

<template>
  <n-card embedded class="team" :title="props.team.name">
    <n-space vertical align="center">
      <n-space align="center" justify="center">
        <div class="score">{{ props.team.score }}</div>
        <n-space vertical>
          <n-button size="large" ghost circle @click="props.team.increaseScore">
            <template #icon>
              <n-icon><ArrowUp /></n-icon>
            </template>
          </n-button>
          <n-button size="large" ghost circle @click="props.team.decreaseScore">
            <template #icon>
              <n-icon><ArrowDown /></n-icon>
            </template>
          </n-button>
        </n-space>
      </n-space>
      <!-- <div>Score</div> -->
    </n-space>
    <n-space class="penalities-wrapper" justify="space-around" align="center">
      <div v-for="index in props.maxPenality" :key="index" class="penality" :class="{ active: index <= props.team.penality }" />
    </n-space>
    <n-space justify="center">
      <n-button size="large" ghost circle :disabled="props.team.penality === 0" @click="props.team.decreasePenality">
        <template #icon>
          <n-icon><ArrowLeft /></n-icon>
        </template>
      </n-button>
      <n-button size="large" ghost circle @click="props.team.increasePenality()">
        <template #icon>
          <n-icon><ArrowRight /></n-icon>
        </template>
      </n-button>
    </n-space>
  </n-card>
</template>

<style lang="less" scoped>
.team {
  .score {
    line-height: 1.1;
    font-size: 120px;
  }

  .penalities-wrapper {
    padding: 30px 60px 25px;
    .penality {
      @size: 20px;

      height: @size;
      width: @size;
      border-radius: 50%;
      border: 2px solid rgba(0, 0, 0, 0.5);

      &.active {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
