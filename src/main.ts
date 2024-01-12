import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DJUI from './components/django-ui'

const app = createApp(App);
app.use(DJUI)
app.mount('#app')
