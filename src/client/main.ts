import { createApp } from 'vue'
import App from './App.vue'
import "@/style/index.less"
import DjangoUI from '@/index';
// import DjangoUI from 'django-ui';
// import "django-ui/style.css";

const app = createApp(App);
app.use(DjangoUI)
app.mount('#app')
