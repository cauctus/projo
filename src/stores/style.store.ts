import { defineStore } from 'pinia';

export const useStyleStore = defineStore('style', {
  state: () => ({
    isDarkMode: false as boolean,
  }),
});
