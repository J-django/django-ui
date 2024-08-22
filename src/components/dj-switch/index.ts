import type { App } from 'vue'
import DJSwitch from './index.vue'

DJSwitch.install = (app: App) => {
    app.component(DJSwitch?.name!, DJSwitch);
}

export default DJSwitch;