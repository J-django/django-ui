import type { App } from 'vue'
import DJOverlay from './index.vue'

DJOverlay.install = (app: App) => {
    app.component(DJOverlay?.name!, DJOverlay);
}

export default DJOverlay;