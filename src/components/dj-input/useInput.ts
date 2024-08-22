import type { PropType } from 'vue'
import { ref, unref, reactive, computed, useSlots } from 'vue'

export interface DJInputPropsType {
    id: string;
    placeholder: string;
    disabled: boolean;
    clearable: boolean;
    modelValue: string;
    enterkeyhint: string;
    addonBefore: string;
    addonAfter: string;
}

export const DJInputOptions = {
    name: "dj-input"
};

export const DJInputProps = {
    id: {
        type: String as PropType<string>,
        default: ""
    },
    placeholder: {
        type: String as PropType<string>,
        default: ""
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    clearable: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    modelValue: {
        type: String as PropType<string>,
        default: ""
    },
    enterkeyhint: {
        type: String as PropType<string>,
        default: ""
    },
    addonBefore: {
        type: String as PropType<string>,
        default: ""
    },
    addonAfter: {
        type: String as PropType<string>,
        default: ""
    }
};

export type DJInputEmits = {
    (e: 'update:modelValue', value: string): void,
    (e: 'input', value: string): void,
    (e: 'change', value: string): void,
    (e: 'keyup', event: KeyboardEvent): void,
    (e: 'focus', event: FocusEvent): void,
    (e: 'blur', event: FocusEvent): void,
    (e: 'clear'): void,
};

export const useInput = (props: DJInputPropsType, emits: DJInputEmits, slots: ReturnType<typeof useSlots>) => {
    const inputRef = ref();

    const inputConfig = reactive({
        focus: false,
        active: false,
    })

    const isSlot = computed(() => (slotName: string) => {
        return slots[slotName];
    })

    /**
    * 输入框类名
    */
    const DJInput_Class = computed(() => {
        return [
            props.disabled ? 'is-disabled' : '',
            inputConfig.focus ? 'is-focus' : '',
            slots["addon-before"] || props.addonBefore ? 'is-addon-before' : '',
            slots["addon-after"] || props.addonAfter ? 'is-addon-after' : ''
        ]
    })

    /**
    * 输入时触发
    * @param event Event
    */
    const DJInput_InputChange = (event: Event) => {
        emits("update:modelValue", (event.target as any).value)
        emits("input", (event.target as any).value)
    }

    /**
    * 值改变时触发
    * @param event Event
    */
    const DJInput_Change = (event: Event) => {
        emits("change", (event.target as any).value)
    }

    /**
    * 获取焦点时触发
    * @param event Event
    */
    const DJInput_FocusChange = (event: FocusEvent) => {
        inputConfig.focus = true;
        emits("focus", event)
    }

    /**
    * 失去焦点时触发
    * @param event Event
    */
    const DJInput_FocusoutChange = (event: FocusEvent) => {
        inputConfig.focus = false;
        emits("blur", event)
    }

    /**
 * 回车时触发
 * @param event Event
 */
    const DJInput_KeyupChange = (event: KeyboardEvent) => {
        emits("keyup", event);
    }

    /**
     * 获取输入框焦点
     */
    const focus = () => {
        unref(inputRef).focus();
    }

    /**
     * 失去输入框焦点
     */
    const blur = () => {
        unref(inputRef).blur();
    }

    /**
     * 清空输入框
     */
    const clear = () => {
        emits("update:modelValue", "")
        emits("clear")
    }

    return {
        inputRef,
        inputConfig,
        DJInput_Class,
        isSlot,
        DJInput_InputChange,
        DJInput_Change,
        DJInput_FocusChange,
        DJInput_FocusoutChange,
        DJInput_KeyupChange,
        focus,
        blur,
        clear
    }
}