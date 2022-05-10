import { Impro } from '../../models/Impro.model';
import { defineStore } from 'pinia';

export const useBoardStore = defineStore('boards', {
  persist: true,
  state: () => ({
    impros: [] as Impro[],
  }),
});
