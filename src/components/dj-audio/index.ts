import type { App } from 'vue'
import DJAudio from "./index.vue"

DJAudio.install = (app: App) => {
    app.component(DJAudio?.name!, DJAudio);
}

export default DJAudio;