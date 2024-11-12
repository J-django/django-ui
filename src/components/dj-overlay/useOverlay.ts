import type { PropType, StyleValue } from 'vue'
import { ref, computed } from 'vue'

export interface OverlayPropsType {
    appendBody: boolean;
    visible: boolean;
    zIndex: number | string;
    overlay: boolean;
    transition: boolean
}

export const DJOverlayOptions = {
    name: "dj-overlay"
};

export const DJOverlayProps = {
    appendBody: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    visible: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    zIndex: {
        type: [Number, String] as PropType<number | string>,
        default: 2024
    },
    overlay: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    transition: {
        type: Boolean as PropType<boolean>,
        default: true
    }
};

export const useDJOverlay = ({ zIndex, overlay, transition }: OverlayPropsType) => {
    const has_transition = ref(transition ? "overlay" : "");

    const DJOverlay_Style = computed(() => {
        return {
            zIndex: zIndex,
            backgroundColor: overlay ? "var(--dj-dialog-backdrop-background-color)" : ""
        } as StyleValue;;
    })

    return {
        has_transition,
        DJOverlay_Style
    }
}