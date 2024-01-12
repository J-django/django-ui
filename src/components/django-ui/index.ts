import DJButton from './dj-button/index.vue'

export { DJButton };

const component = [DJButton];

const DjangoUI = {
    install(App: any) {
        component.forEach((item) => {
            console.log(item.name)
            App.component(item.name, DJButton);
        });
    },
};

export default DjangoUI;