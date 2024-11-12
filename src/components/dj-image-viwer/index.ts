import type { App } from 'vue'
import DJImageViwer from './index.vue'

DJImageViwer.install = (app: App) => {
    app.component(DJImageViwer?.name!, DJImageViwer);
}


export default DJImageViwer;