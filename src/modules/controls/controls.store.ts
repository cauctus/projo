import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
  persist: true,
  state: () => ({
    lockConfiguration: !import.meta.env.PROD,
  }),
});
