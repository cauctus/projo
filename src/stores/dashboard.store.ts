import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    teamLeft: {
      name: 'Equipe 1',
      color: '#335FFF',
      score: 0,
      penality: 0,
    },
    teamRight: {
      name: 'Equipe 2',
      color: '#FFAC26',
      score: 0,
      penality: 0,
    },
    timer: {
      value: 0,
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
