import { Timer, TimerSate } from '@/types/Timers.model';
import { defineStore } from 'pinia';

const colors = ['#4FB233', '#335FFF', '#4FB233', '#D92149', '#FFAC26'];

const createTimerSate = (durationMS: number): Timer => ({
  elapsed: 0,
  duration: durationMS, // in ms
  intervalId: -1,
  state: TimerSate.STOPPED,
});

export const useDashboardStore = defineStore('dashboard', {
  persist: true,
  state: () => ({
    teamLeft: {
      name: 'TTI',
      color: colors[3],
      score: 0,
      penality: 0,
    },
    teamRight: {
      name: 'Le CLAP',
      color: colors[2],
      score: 0,
      penality: 0,
    },
    globalTimer: createTimerSate(90 * 60 * 1000),
    timer: createTimerSate(3 * 60 * 1000),
    maxPenality: 3,
    category: 'Libre',
    theme: 'Caucus sur le cactus',
    playerCount: -1,
    type: 'Comparé',
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    displayHeader: true,
    displayGlobalTimer: true,
    displayFooter: true,
  }),
  actions: {
    increasePenality(team: 'teamLeft' | 'teamRight') {
      const teamState = this[team];

      if (++teamState.penality > this.maxPenality) {
        teamState.score--;
        teamState.penality = 0;
      }
    },
    decreasePenality(team: 'teamLeft' | 'teamRight') {
      const teamState = this[team];

      teamState.penality = Math.max(teamState.penality - 1, 0);
    },
    startTimer() {
      this.timer.intervalId = window.setInterval(() => {
        this.timer.elapsed += 1000;

        if (this.timer.elapsed >= this.timer.duration) {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      window.clearInterval(this.timer.intervalId);
    },
    startGlobalTimer() {
      this.globalTimer.intervalId = window.setInterval(() => {
        this.globalTimer.elapsed += 1000;

        if (this.globalTimer.elapsed >= this.globalTimer.duration) {
          this.stopTimer();
        }
      }, 1000);
    },
    stopGlobalTimer() {
      window.clearInterval(this.globalTimer.intervalId);
    },
  },
});
