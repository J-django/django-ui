import type { App } from 'vue'
import DJWatermark from './index.vue'

DJWatermark.install = (app: App) => {
    app.component(DJWatermark?.name!, DJWatermark);
}

export default DJWatermark;