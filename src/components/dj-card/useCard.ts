import type { PropType } from 'vue'
import { computed, useSlots } from 'vue'

export interface DJCardPropsType {
    align: string;
    title: string;
    footer: string;
};

export const DJCardOptions = {
    name: "dj-card"
};

export const DJCardProps = {
    align: {
        type: String as PropType<string>,
        default: "left"
    },
    title: {
        type: String as PropType<string>,
        default: ""
    },
    footer: {
        type: String as PropType<string>,
        default: ""
    },
};

export const useCard = (props: DJCardPropsType, slots: ReturnType<typeof useSlots>) => {
    const isHeader = computed(() => props.title || slots.header);

    const isFooter = computed(() => props.footer || slots.footer);

    return {
        isHeader,
        isFooter
    }
}