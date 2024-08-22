import type { PropType } from 'vue'
import { ref, unref, reactive } from 'vue'

export interface DJTextareaPropsType {
    id: string;
    disabled: boolean;
    placeholder: string;
    rows: number;
    cols: number;
    modelValue: string;
}

export const DJTextareaOptions = {
    name: "dj-textarea"
};

export const DJTextareaProps = {
    id: {
        type: String as PropType<string>,
        default: ""
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    placeholder: {
        type: String as PropType<string>,
        default: ""
    },
    rows: {
        type: Number as PropType<number>,
        default: 3
    },
    cols: {
        type: Number as PropType<number>,
        default: 5
    },
    modelValue: {
        type: String as PropType<string>,
        default: ""
    },
};

export type DJTextareaEmits = {
    (e: 'update:modelValue', value: boolean): void,
    (e: 'input', event: Event): void,
    (e: 'change', event: Event): void,
    (e: 'focus', event: FocusEvent): void,
    (e: 'blur', value: FocusEvent): void,
};

export const useTextarea = (emits: DJTextareaEmits) => {
    const textareaRef = ref();

    const textareaConfig = reactive({
        focus: false,
        active: false,
    })

    /**
     * 输入时触发
     * @param event Event
     */
    const DJTextarea_InputChange = (event: Event) => {
        emits("input", event)
    }

    /**
    * 值改变时触发
    * @param event Event
    */
    const DJTextarea_Change = (event: Event) => {
        emits("change", event)
        emits("update:modelValue", (event.target as any).value)
    }

    /**
     * 获取焦点时触发
     * @param event Event
    */
    const DJTextarea_FocusChange = (event: FocusEvent) => {
        textareaConfig.focus = true;
        emits("focus", event)
    }

    /**
     * 失去焦点时触发
     * @param event Event
     */
    const DJTextarea_FocusoutChange = (event: FocusEvent) => {
        textareaConfig.focus = false;
        emits("blur", event)
    }

    /**
    * 获取输入框焦点
    */
    const focus = () => {
        unref(textareaRef).focus();
    }

    /**
    * 失去输入框焦点
     */
    const blur = () => {
        unref(textareaRef).blur();
    }

    return {
        textareaRef,
        textareaConfig,
        DJTextarea_InputChange,
        DJTextarea_Change,
        DJTextarea_FocusChange,
        DJTextarea_FocusoutChange,
        focus,
        blur
    }
}