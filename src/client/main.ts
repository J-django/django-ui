import { createApp } from 'vue'
import App from './App.vue'
import DjangoUI from '@/index';
import VConsole from 'vconsole';
new VConsole();

const app = createApp(App);
app.use(DjangoUI)
app.mount('#app')
