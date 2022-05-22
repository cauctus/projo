import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  persist: true,
  state: () => ({
    countCurrent: 0,
    countGlobal: 0,
  }),
  actions: {
    increment() {
      this.countCurrent++
      this.countGlobal++
    },
    decrement() {
      this.countCurrent--
    },
  }
});
