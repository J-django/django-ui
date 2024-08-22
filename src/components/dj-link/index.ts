import type { App } from 'vue'
import DJLink from "./index.vue";

DJLink.install = (app: App) => {
    app.component(DJLink?.name!, DJLink);
}

export default DJLink;