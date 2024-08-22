import type { PropType } from 'vue'
import { ref, watch, computed, useSlots } from 'vue'

export interface DJSwitchPropsType {
    checkedLabel: string;
    unCheckedLabel: string;
    checkedColor: string;
    unCheckedColor: string;
    checkedBackgroundColor: string;
    unCheckedBackgroundColor: string;
    disabled: boolean;
    modelValue: boolean;
}

export const DJSwitchOptions = {
    name: "dj-switch"
};

export const DJSwitchProps = {
    checkedLabel: {
        type: String as PropType<string>,
        default: ""
    },
    unCheckedLabel: {
        type: String as PropType<string>,
        default: ""
    },
    checkedColor: {
        type: String as PropType<string>,
        default: ""
    },
    unCheckedColor: {
        type: String as PropType<string>,
        default: ""
    },
    checkedBackgroundColor: {
        type: String as PropType<string>,
        default: ""
    },
    unCheckedBackgroundColor: {
        type: String as PropType<string>,
        default: ""
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    modelValue: {
        type: Boolean as PropType<boolean>,
        default: false
    },
};

export type DJSwitchEmits = {
    (e: 'update:modelValue', value: boolean): void,
    (e: 'change', value: boolean): void,
};

export const useSwitch = (props: DJSwitchPropsType, emits: DJSwitchEmits, slots: ReturnType<typeof useSlots>) => {
    const { unCheckedLabel, checkedLabel, checkedColor, unCheckedColor, checkedBackgroundColor, unCheckedBackgroundColor, disabled } = props;

    const DJSwitchInnerRef = ref();

    watch(() => props.modelValue, (checked: boolean) => {
        DJSwitchInnerRef.value.style.transition = "background-color 350ms, box-shadow 250ms";
        emits("change", checked)
    })

    /**
     * 是否显示未选中状态时文字
     */
    const isUnCheckedLabel = computed(() => unCheckedLabel || slots.unCheckedLabel)

    /**
     * 是否显示选中状态时文字
     */
    const isCeckedLabel = computed(() => checkedLabel || slots.checkedLabel);

    /**
     * 样式
     */
    const DJSwitch_Style = computed(() => {
        return {
            '--dj-switch-custom-checked-color': checkedColor,
            '--dj-switch-custom-unChecked-color': unCheckedColor,
            '--dj-switch-custom-checked-background-color': checkedBackgroundColor,
            '--dj-switch-custom-unChecked-background-color': unCheckedBackgroundColor
        }
    })

    /**
     * 开关样式
     */
    const DJSwicth_Class = computed(() => {
        return [disabled ? 'is-disabled' : '', props.modelValue ? 'is-checked' : ''];
    })

    /**
     * 未选中样式
     */
    const DJSwitch_LeftClass = computed(() => !props.modelValue ? 'is-checked' : '')

    /**
     * 是否选中样式
     */
    const DJSwicth_RightClass = computed(() => props.modelValue ? 'is-checked' : '')

    /**
     * 切换switch状态
     */
    const toggle = () => {
        emits("update:modelValue", !props.modelValue);
    }

    /**
     * 开发动画结束触发
     */
    const DJSwitcn_TransitionendChange = () => {
        DJSwitchInnerRef.value.style.transition = "box-shadow 250ms";
    }

    return {
        DJSwitchInnerRef,
        isUnCheckedLabel,
        isCeckedLabel,
        DJSwicth_Class,
        DJSwitch_Style,
        DJSwitch_LeftClass,
        DJSwicth_RightClass,
        toggle,
        DJSwitcn_TransitionendChange
    }
}