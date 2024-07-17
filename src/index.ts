// plugin
import type { App, Component } from 'vue'
import { forEach } from 'lodash-es'
import * as components from '@/components'
import {
    DJAccordion,
    DJAudio,
    DJButton,
    DJCard,
    DJDivider,
    DJInput,
    DJTextarea,
    DJVideo,
    DJSegmented,
    DJSwitch,
    DJDialog,
    DJSlider,
    DJWatermark
} from '@/components'

const DjangoUI = {
    install(app: App) {
        forEach(components, (component: Component) => {
            app.component(component.name!, component);
        });

    },
};

export {
    DJAccordion,
    DJAudio,
    DJButton,
    DJCard,
    DJDivider,
    DJInput,
    DJTextarea,
    DJVideo,
    DJSegmented,
    DJSwitch,
    DJDialog,
    DJSlider,
    DJWatermark
}

export default DjangoUI;