import type { App } from 'vue'
import DJInput from "./index.vue";

DJInput.install = (app: App) => {
    app.component(DJInput?.name!, DJInput);
}

export default DJInput;