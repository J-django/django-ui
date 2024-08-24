import type { PropType } from 'vue'
import { computed } from 'vue'

export interface DJLinkPropsType {
    href: String;
    target: string;
    color: string;
    label: string;
    underline: boolean;
    disabled: boolean;
}

export const DJLinkOptions = {
    name: "dj-link"
};

export const DJLinkProps = {
    href: {
        type: String as PropType<string>,
        default: ""
    },
    target: {
        type: String as PropType<string>,
        default: "_self"
    },
    color: {
        type: String as PropType<string>,
        default: ""
    },
    label: {
        type: String as PropType<string>,
        default: ""
    },
    underline: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
};

export type DJLinkEmits = {
    (e: 'click', event: MouseEvent): void
}

export const useLink = (props: DJLinkPropsType, emits: DJLinkEmits) => {
    const DJLink_Class = computed(() => {
        return [
            props.underline ? 'is-underline' : '',
            props.disabled ? 'is-disabled' : ''
        ]
    })

    const DJLink_Style = computed(() => {
        return {
            '--dj-link-custom-color': props.color
        };
    })

    const DJLink_ClickChange = (event: MouseEvent) => {
        if (props.disabled) {
            event.preventDefault();
            return;
        }
        emits("click", event)
    }

    return {
        DJLink_Class,
        DJLink_Style,
        DJLink_ClickChange
    }
}