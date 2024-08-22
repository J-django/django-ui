import type { PropType, StyleValue } from 'vue'
import { computed } from 'vue'
import { useColor } from "@/hooks"

export interface ButtonPropsType {
    label: string;
    color: string;
    plain: boolean;
}

export const DJButtonOptions = {
    name: "dj-button"
};

export const DJButtonProps = {
    label: {
        type: String as PropType<string>,
        default: "",
    },
    color: {
        type: String as PropType<string>,
        default: ""
    },
    plain: {
        type: Boolean as PropType<boolean>,
        default: false
    }
};

export const useDJButton = (props: ButtonPropsType) => {
    const { isDarkColor, hexToRgba } = useColor();

    const DJButton_Style = computed(() => {
        const color = props.color;
        const style = {} as StyleValue & any;
        if (color) {
            const dc = isDarkColor(color);
            style["--dj-button-custom-background-color"] = color;
            style["--dj-button-custom-color"] = dc ? "var(--dj-button-white-color)" : "var(--dj-button-black-color)";
        }
        if (props.plain && color) {
            const dc = isDarkColor(color);
            style["--dj-button-custom-background-color"] = null;
            style["--dj-button-custom-color"] = null;
            style["--dj-button-plain-background-color"] = hexToRgba(color, .1);
            style["--dj-button-plain-border-color"] = hexToRgba(color, .75);
            style["--dj-button-plain-color"] = color;
            style["--dj-button-plain-hover-color"] = dc ? "var(--dj-button-white-color)" : "var(--dj-button-black-color)";
            style["--dj-button-plain-hover-background-color"] = color;
        }
        return style;
    })

    return {
        DJButton_Style
    }
}