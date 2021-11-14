import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
  persist: true,
  state: () => ({
    type: "Match d'improvisation",
    name: '',
  }),
});
