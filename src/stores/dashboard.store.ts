import { defineStore } from 'pinia';

const colors = ['#4FB233', '#335FFF', '#4FB233', '#D92149', '#FFAC26'];

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    teamLeft: {
      name: 'TTI',
      color: colors[3],
      score: 0,
      penality: 2,
    },
    teamRight: {
      name: 'Le CLAP',
      color: colors[2],
      score: 0,
      penality: 2,
    },
    globalTimer: {
      value: 90 * 60,
      duration: 90 * 60,
      intervalId: -1,
    },
    timer: {
      value: 3 * 60,
      duration: 3 * 60,
      intervalId: -1,
    },
    maxPenality: 3,
    category: 'Libre',
    theme: 'Caucus sur le cactus',
    playerCount: -1,
    type: 'Comparé',
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
      this.timer.value = this.timer.duration;
      this.timer.intervalId = window.setInterval(() => {
        this.timer.value--;

        if (this.timer.value <= 0) {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      window.clearInterval(this.timer.intervalId);
    },
  },
});
