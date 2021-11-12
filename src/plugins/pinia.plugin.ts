import { createPinia } from 'pinia';
import { PiniaSharedState } from 'pinia-shared-state';

export const pinia = createPinia().use(PiniaSharedState({ enable: true }));
