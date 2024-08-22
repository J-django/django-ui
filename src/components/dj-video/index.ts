import type { App } from 'vue'
import DJVideo from './index.vue'

DJVideo.install = (app: App) => {
    app.component(DJVideo?.name!, DJVideo);
}

export default DJVideo;