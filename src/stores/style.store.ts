import { defineStore } from 'pinia';

export const useStyleStore = defineStore('style', {
  persist: true,
  state: () => ({
    isDarkMode: false as boolean,
  }),
});
