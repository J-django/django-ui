import type { PropType } from 'vue'
import { ref, unref, reactive, computed, watch } from 'vue'

export interface DJAccordionPropsType {
    title: string;
    content: string;
    disabled: boolean;
    modelValue: boolean;
}

export const DJAccordionOptions = {
    name: "dj-accordion"
};

export const DJAccordionProps = {
    title: {
        type: String as PropType<string>,
        default: ""
    },
    content: {
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
    }
};

export type DJAccordionEmits = {
    (e: 'update:modelValue', value: boolean): void,
    (e: 'change', value: boolean): void
}

export const useDJAccordion = (props: DJAccordionPropsType, emits: DJAccordionEmits) => {
    const accordionRef = ref();

    const accordionConfig = reactive({
        wrapperStyle: {},
        contentStyle: {}
    })

    watch(() => props.modelValue, (val: boolean) => {
        if (val) {
            unref(accordionRef).style.display = "block"
            accordionConfig.contentStyle = {
                overflow: "hidden",
                height: `${unref(accordionRef).scrollHeight}px`,
                willChange: "height",
                transition: "height 250ms"
            }
        } else {
            unref(accordionRef).style.height = `${unref(accordionRef)?.scrollHeight}px`;
            setTimeout(() => {
                accordionConfig.contentStyle = {
                    transition: "height 250ms",
                    willChange: "height",
                    height: "0px",
                    overflow: "hidden"
                }
            }, 0);
        }
    })

    const DJAccordion_Class = computed(() => {
        return [props.modelValue ? 'is-active' : '', props.disabled ? 'is-disabled' : '']
    })

    /**
     * 切换
     * @returns 
     */
    const toggle = () => {
        if (props.disabled) return;
        const res = !props.modelValue;
        emits("change", res)
        emits("update:modelValue", res)
    }

    /**
     * 手风琴动画结束触发
     */
    const DJAccordion_TransitionendChange = () => {
        if (props.modelValue) {
            accordionConfig.wrapperStyle = {};
            unref(accordionRef).style.display = "";
            accordionConfig.contentStyle = {};
        } else {
            accordionConfig.wrapperStyle = {};
            accordionConfig.contentStyle = {
                height: "0px",
                overflow: "hidden",
                display: "none"
            }
        }
    }

    /**
     * 加载手风琴初始样式
     */
    const initAccordion = () => {
        if (!props.modelValue) {
            unref(accordionRef).style.display = "none";
            unref(accordionRef).style.height = "0";
            unref(accordionRef).style.overflow = "hidden";
        }
    }

    return {
        accordionRef,
        accordionConfig,
        DJAccordion_Class,
        toggle,
        DJAccordion_TransitionendChange,
        initAccordion
    }
}