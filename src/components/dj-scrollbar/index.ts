import type { App } from 'vue'
import DJScrollbar from './index.vue'

DJScrollbar.install = (app: App) => {
    app.component(DJScrollbar?.name!, DJScrollbar);
}

export default DJScrollbar;
