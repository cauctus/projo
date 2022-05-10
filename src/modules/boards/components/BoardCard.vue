<template>
  <n-card class="raised content-no-padding board-card" :class="{ 'is-hidden': isHidden }">
    <n-grid x-gap="12" y-gap="12" :cols="2">
      <n-gi class="type">
        <div v-if="props.showHelp" class="help">Type :</div>
        {{ impro.type }}
      </n-gi>
      <n-gi class="category">
        <div v-if="props.showHelp" class="help">De catégorie :</div>

        {{ impro.category }}
      </n-gi>
      <n-gi class="theme" span="2">
        <div v-if="props.showHelp" class="help">Ayant pour thèmes :</div>

        {{ impro.theme }}
      </n-gi>
      <n-gi class="player-count">
        <div v-if="props.showHelp" class="help">Nombre de joueurs :</div>

        {{ impro.playerCount }}
      </n-gi>
      <n-gi class="duration">
        <div v-if="props.showHelp" class="help">Pour une durée de :</div>
        {{ formatTime(impro.duration) }} min
      </n-gi>
    </n-grid>
    <br>
    <n-space justify="center">
      <n-button tertiary @click="isHidden = !isHidden">
        {{ isHidden ? 'Afficher' : 'Masquer' }}
      </n-button>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { Impro } from '@/models/Impro.model';
import { defineProps, ref } from 'vue'
import { formatTime } from '@/utils/string';

const props = defineProps<{ impro: Impro, showHelp?: boolean }>()
const impro = ref(props.impro)
const isHidden = ref(false)
</script>

<style scoped lang="less">
.board-card {

  .help {
    font-size: 14px !important;
    opacity: 0.7;
  }

  &.is-hidden {
    opacity: 0.3;
  }

  .type,
  .player-count {
    text-align: left;
    font-size: 18px !important;

  }

  .theme {
    text-align: center;
    font-size: 20px !important;
    margin: 15px 0;


  }

  .category,
  .duration {
    text-align: right;
    font-size: 18px !important;

  }
}
</style>