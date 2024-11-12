import type { PropType, Ref } from 'vue'
import { ref } from 'vue'

export interface ImageViwerPropsType {
    src: string;
    appendBody: boolean;
}

export const DJImageViwerOptions = {
    name: "dj-image-viwer"
};

export const DJButtonProps = {
    src: {
        type: String as PropType<string>,
        default: ""
    },
    appendBody: {
        type: Boolean as PropType<boolean>,
        default: false
    },
};

export type DJImageViwerEmits = {
    (e: 'update:modelValue', value: boolean): void,
    (e: 'open', value: boolean): void,
    (e: 'close', value: boolean): void,
}

export const useDJImageViwer = (props: ImageViwerPropsType, emits: DJImageViwerEmits) => {
    const overlayImageRef = ref();
    const overlayZoomRef = ref();
    const overlayCloseRef = ref();

    const duration = 300;
    const visible = ref(false);
    const zoom = ref(false);

    function contains(source: Node, target: Ref<HTMLElement>) {
        return target.value && !target.value.contains(source);
    }

    function onClickOutside(event: MouseEvent) {
        const el = event.target as Node;
        if (contains(el, overlayImageRef) && contains(el, overlayZoomRef) && contains(el, overlayCloseRef)) {
            close();
        }
    }

    function setVisible(val: boolean) {
        visible.value = val;
        emits("update:modelValue", val);
    }

    function open() {
        setTimeout(() => {
            emits("open", true);
            setVisible(true);
            document.body.addEventListener("click", onClickOutside);
        }, duration);
    }

    function close() {
        setTimeout(() => {
            setVisible(false);
            emits("close", false);
            document.body.removeEventListener("click", onClickOutside);
        }, duration);
    }

    function zoom_toogle() {
        zoom.value = !zoom.value;
    }

    return {
        overlayImageRef,
        overlayZoomRef,
        overlayCloseRef,
        visible,
        zoom,
        open,
        close,
        zoom_toogle
    };
}