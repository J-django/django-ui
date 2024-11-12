import type { App } from 'vue'
import DJCard from './index.vue'

DJCard.install = (app: App) => {
    app.component(DJCard?.name!, DJCard);
}

export default DJCard;