import type { App } from 'vue'
import DJProgress from './index.vue'

DJProgress.install = (app: App) => {
    app.component(DJProgress?.name!, DJProgress);
}

export default DJProgress;