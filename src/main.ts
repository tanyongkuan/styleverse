import { createApp } from 'vue';
import './css/style.css';
import './css/index.css';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount('#app');
