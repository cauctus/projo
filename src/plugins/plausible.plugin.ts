import Plausible, { PlausibleOptions } from 'plausible-tracker';
import { App } from 'vue';

const options: PlausibleOptions = {
  domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN as string,
  apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST as string,
  trackLocalhost: false,
};

export const plausible = {
  install: (app: App) => {
    const plausible = Plausible(options);
    plausible.enableAutoPageviews();

    app.config.globalProperties.$plausible = plausible;
  },
};
