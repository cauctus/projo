import { Impro } from '../../models/Impro.model';
import { defineStore } from 'pinia';

export const useCreateStore = defineStore('create', {
  persist: true,
  state: () => ({
    impros: [] as Impro[],
  }),
});
