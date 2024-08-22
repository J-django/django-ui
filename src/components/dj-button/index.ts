import type { App } from 'vue'
import DJButton from './index.vue'

DJButton.install = (app: App) => {
    app.component(DJButton?.name!, DJButton);
}

export default DJButton;