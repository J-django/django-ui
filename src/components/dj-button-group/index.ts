import type { App } from 'vue'
import DJButtonGoup from './index.vue'

DJButtonGoup.install = (app: App) => {
    app.component(DJButtonGoup?.name!, DJButtonGoup);
}

export default DJButtonGoup;