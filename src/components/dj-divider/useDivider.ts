import type { PropType } from 'vue'
import { computed, useSlots } from 'vue'

export type DividerType = "solid" | "dashed" | "dotted" | "double";

export type DividerAlign = "left" | "center" | "right";

export interface DJDividerPropsType {
    label: string;
    type: DividerType;
    align: DividerAlign;
    margin: number | string;
    offset: number | string;
}

export const DJDividerOptions = {
    name: "dj-divider"
};

export const DJDividerProps = {
    label: {
        type: String as PropType<string>,
        default: ""
    },
    type: {
        type: String as PropType<DividerType>,
        default: "solid",
        validator: (type: string): boolean => {
            return ["solid", "dashed", "dotted", "double"].includes(type as DividerType);
        }
    },
    align: {
        type: String as PropType<DividerAlign>,
        default: "center"
    },
    margin: {
        type: [Number, String],
        default: 10
    },
    offset: {
        type: [Number, String],
        default: 10
    }
};

export const useDivider = (props: DJDividerPropsType, slots: ReturnType<typeof useSlots>) => {
    const { type, offset, margin } = props;

    const DJDivider_Style = computed(() => {
        return {
            '--dj-divider-margin': typeof offset === 'string' ? `${margin}` : `${margin}px`,
            '--dj-divider-offset': typeof offset === 'string' ? `${offset}` : `${offset}px`
        }
    })

    const DJDivider_Type = computed(() => {
        return `dj-divider-type--${type}`;
    })

    const isDefault = computed(() => slots.default)

    return {
        DJDivider_Style,
        DJDivider_Type,
        isDefault,
    };
}