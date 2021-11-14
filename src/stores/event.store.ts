import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
  state: () => ({
    type: "Match d'improvisation",
    name: '',
  }),
});
