import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { naive } from './plugins/naive.plugin';
import { pinia } from './plugins/pinia.plugin';

createApp(App).use(pinia).use(router).use(naive).mount('#app');
