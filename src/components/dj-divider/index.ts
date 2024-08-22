import type { App } from 'vue'
import DJDivider from './index.vue'

DJDivider.install = (app: App) => {
    app.component(DJDivider?.name!, DJDivider);
}

export default DJDivider;