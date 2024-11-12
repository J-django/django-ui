// plugin
import type { App, Component } from 'vue'
import { forEach } from 'lodash-es'
import * as components from '@/components'
import {
    DJAccordion,
    DJAudio,
    DJButton,
    DJButtonGroup,
    DJCard,
    DJDialog,
    DJDivider,
    DJImageViwer,
    DJInput,
    DJLink,
    DJScrollbar,
    DJSegmented,
    DJSlider,
    DJSwitch,
    DJTextarea,
    DJVideo,
    DJWatermark,
} from '@/components'

const DjangoUI = {
    install(app: App) {
        forEach(components, (component: Component) => {
            const componentName = component.name;
            if (componentName) {
                app.component(componentName, component);
            }
        });
    },
};

export {
    DJAccordion,
    DJAudio,
    DJButton,
    DJButtonGroup,
    DJCard,
    DJDialog,
    DJDivider,
    DJImageViwer,
    DJInput,
    DJLink,
    DJScrollbar,
    DJSegmented,
    DJSlider,
    DJSwitch,
    DJTextarea,
    DJVideo,
    DJWatermark,
}

export default DjangoUI;