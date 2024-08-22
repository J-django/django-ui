import type { App } from 'vue'
import DJAccordion from './index.vue'

DJAccordion.install = (app: App) => {
    app.component(DJAccordion?.name!, DJAccordion);
}

export default DJAccordion;