import type { App } from 'vue'
import DJDialog from "./index.vue";

DJDialog.install = (app: App) => {
    app.component(DJDialog?.name!, DJDialog);
}

export default DJDialog;