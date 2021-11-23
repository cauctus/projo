import { Timer, TimerSate } from '@/types/Timers.model';
import { Team } from '@/types/Team.model';
import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

const colors = ['#4FB233', '#335FFF', '#4FB233', '#D92149', '#FFAC26'];

function createTimerStore(partialSate: Partial<Timer>) {
  const state = reactive(
    Object.assign(
      {
        elapsed: 0,
        duration: 0, // in ms
        intervalId: -1,
        state: TimerSate.STOPPED,
      },
      partialSate
    )
  );

  state.intervalId = window.setInterval(() => {
    if (state.state === TimerSate.RUNNING) {
      state.elapsed += 1000;

      if (state.elapsed >= state.duration) {
        pause();
        state.elapsed = state.duration;
        state.state = TimerSate.ENDED;
      }
    }
  }, 1000);

  function setDuration(duration: number | null) {
    state.duration = duration ?? 0;

    if (state.elapsed >= state.duration) {
      pause();
      state.elapsed = state.duration;
      state.state = TimerSate.ENDED;
    }
  }

  function stop() {
    state.elapsed = 0;
    state.state = TimerSate.STOPPED;
  }

  function pause() {
    state.state = TimerSate.PAUSED;
  }

  function start() {
    state.state = TimerSate.RUNNING;
  }

  return { ...toRefs(state), start, stop, pause, setDuration };
}

function createTeamStore(partialSate: Partial<Team>) {
  const state = reactive(
    Object.assign(
      {
        name: 'Equipe',
        color: '#ff0000',
        score: 0,
        penality: 0,
      },
      partialSate
    )
  );

  const dashboardStore = useDashboardStore();

  function increasePenality() {
    if (++state.penality > dashboardStore.maxPenality) {
      state.score--;
      state.penality = 0;
    }
  }

  function decreasePenality() {
    state.penality = Math.max(state.penality - 1, 0);
  }

  function increaseScore() {
    state.score++;
  }
  function decreaseScore() {
    state.score--;
  }

  return { ...toRefs(state), increasePenality, decreasePenality, increaseScore, decreaseScore };
}

export const useDashboardStore = defineStore('dashboard', {
  persist: true,
  state: () => ({
    teamLeft: createTeamStore({ name: 'Equipe 1', color: colors[3] }),
    teamRight: createTeamStore({ name: 'Equipe 2', color: colors[2] }),
    globalTimer: createTimerStore({ duration: 90 * 60 * 1000 }),
    timer: createTimerStore({ duration: 3 * 60 * 1000 }),
    maxPenality: 3,
    category: 'Libre',
    theme: 'Caucus sur le cactus',
    playerCount: 'Illimité',
    type: 'Mixte',
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    displayHeader: true,
    displayGlobalTimer: true,
    displayFooter: true,
  }),
});
