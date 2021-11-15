import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
  persist: true,
  state: () => ({
    lockConfiguration: true as boolean,
  }),
});
