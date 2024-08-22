import type { App } from 'vue'
import DJTextarea from './index.vue'

DJTextarea.install = (app: App) => {
    app.component(DJTextarea?.name!, DJTextarea);
}

export default DJTextarea