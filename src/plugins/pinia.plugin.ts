import { createPinia } from 'pinia';
import { PiniaSharedState } from 'pinia-shared-state';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export const pinia = createPinia()
  .use(PiniaSharedState({ enable: true }))
  .use(piniaPluginPersistedstate);
