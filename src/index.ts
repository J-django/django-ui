// plugins
import type { App, Component } from 'vue'
import { forEach } from 'lodash-es'
import DJButton from '@/components//dj-button/index.vue'
import * as components from '@/components'

export { DJButton };

const DjangoUI = {
    install(app: App) {
        forEach(components, (component: Component) => {
            console.log(component)
            app.component(component.name!, component);
        });

    },
};

export default DjangoUI;