import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
  persist: true,
  state: () => ({
    lockConfiguration: false as boolean,
  }),
});
