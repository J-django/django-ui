// plugins
import type { App, Component } from 'vue'
import { forEach } from 'lodash-es'
import * as components from '@/components'

const DjangoUI = {
    install(app: App) {
        forEach(components, (component: Component) => {
            app.component(component.name!, component);
        });

    },
};

export default DjangoUI;