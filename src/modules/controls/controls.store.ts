import { Impro } from '../../models/Impro.model';
import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
  persist: true,
  state: () => ({
    lockConfiguration: !import.meta.env.PROD,
    lockOverlay: !import.meta.env.PROD,
    impros: [] as Impro[],
    useImproList: true,
  }),
});
