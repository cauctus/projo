<script setup lang="ts">
import { Team } from '@/types/Team.model';
import { defineProps } from 'vue';

const props = defineProps<{ team: Team; maxPenality: number }>();
</script>

<template>
  <div class="team">
    <div class="name-wrapper">
      <n-h1>{{ props.team.name }}</n-h1>
    </div>
    <n-space class="score" justify="center">{{ props.team.score }}</n-space>
    <n-space class="penalities-wrapper" justify="space-around" align="center">
      <div v-for="index in props.maxPenality" :key="index" class="penality" :class="{ active: index <= props.team.penality }" />
    </n-space>
  </div>
</template>

<style scoped lang="less">
.team {
  z-index: 40;
  background-color: #1f1f24;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding-bottom: 30px;
  border-radius: 10px;
  text-align: center;
  overflow-y: hidden;
  //   background-color: v-bind('props.team.color');
  //   border: 12px solid v-bind('props.team.color');

  .penalities-wrapper {
    padding: 30px 60px 25px;
    .penality {
      @size: 50px;

      height: @size;
      width: @size;
      border-radius: 50%;
      border: 4px solid hsla(0, 0%, 100%, 0.24);

      &.active {
        background-color: hsla(0, 0%, 100%, 0.24);
      }
    }
  }

  .name-wrapper {
    width: 430px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    background-color: v-bind('props.team.color');

    .n-h1 {
      line-height: 1;
      font-size: 55px;
      margin: 0;
      display: inline;
      overflow-wrap: break-word;
      text-shadow: 2px 2px 5px #00000088;

      // color: v-bind('props.team.color');
      // padding: 5px 20px 13px;
      // border-bottom: 5px solid;
      // border-left: 5px solid;
      // border-bottom-left-radius: 8px;
      // border-color: v-bind('props.team.color');
    }
  }

  .score {
    font-size: 150px;
    line-height: 1;
    padding: 30px 0 20px;
    // color: v-bind('props.team.color');
  }
}
</style>
