<script setup lang="ts">
import { Team } from '@/models/Team.model';
import { defineProps, defineEmits, computed } from 'vue';
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from '@vicons/tabler';
import { useDashboardStore } from '@/stores/dashboard.store';

const props = defineProps<{ team: Team; iconsLeft?: boolean }>();
const emit = defineEmits(['applyPenality']);

const hasMaxPenality = computed(() => props.team.penality === props.team.maxPenality);
const dashboardStore = useDashboardStore()


function applyPenality() {
  props.team.increasePenality();
  emit('applyPenality');
}
</script>

<template>
  <n-card embedded class="team" :title="props.team.name">
    <n-space vertical align="center">
      <n-space align="center" justify="center">
        <div v-if="!props.iconsLeft" class="score">{{ props.team.score }}</div>
        <n-space vertical>
          <n-button size="large" ghost circle @click="props.team.increaseScore">
            <template #icon>
              <n-icon>
                <ArrowUp />
              </n-icon>
            </template>
          </n-button>
          <n-button size="large" ghost circle @click="props.team.decreaseScore">
            <template #icon>
              <n-icon>
                <ArrowDown />
              </n-icon>
            </template>
          </n-button>
        </n-space>
        <div v-if="props.iconsLeft" class="score">{{ props.team.score }}</div>
      </n-space>
      <!-- <div>Score</div> -->
    </n-space>
    <div v-if="dashboardStore.displayPenality">
      <n-space class="penalities-wrapper" justify="space-around" align="center">
        <div
          v-for="index in props.team.maxPenality"
          :key="index"
          class="penality"
          :class="{ active: index <= props.team.penality }"
        />
      </n-space>
      <n-space justify="center">
        <n-button
          size="large"
          ghost
          circle
          :disabled="props.team.penality === 0"
          @click="props.team.decreasePenality"
        >
          <template #icon>
            <n-icon>
              <ArrowLeft />
            </n-icon>
          </template>
        </n-button>
        <n-button v-if="hasMaxPenality" size="large" round @click="applyPenality">Appliquer</n-button>
        <n-button
          v-else
          size="large"
          ghost
          circle
          @click="props.team.increasePenality"
        >
          <template #icon>
            <n-icon>
              <ArrowRight />
            </n-icon>
          </template>
        </n-button>
      </n-space>
    </div>
  </n-card>
</template>

<style lang="less" scoped>
.team {
  overflow: hidden;
  border-radius: 10px;
  ::v-deep(.n-card-header) {
    background-color: v-bind("props.team.color");
    text-align: center;
    .n-card-header__main {
      color: white !important;
      font-size: 30px;
    }
  }
  .score {
    line-height: 1.1;
    font-size: 120px;
  }

  .penalities-wrapper {
    padding: 30px 0 25px;
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
