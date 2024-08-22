import type { PropType } from 'vue'
import { ref, unref, reactive, computed, watch, onMounted } from 'vue'

export interface DJSegmentedPropsType {
    data: Array<string | number | SegmentedDataType>;
    disabled: boolean;
    modelValue: string | number;
}

export interface SegmentedDataType {
    label: string;
    value: string | number;
    disabled: boolean;
}

export const DJSegmentedOptions = {
    name: "dj-segmented"
};

export const DJSegmentedProps = {
    data: {
        type: Array as PropType<Array<string | number | SegmentedDataType>>,
        default: [],
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    modelValue: {
        type: [String, Number] as PropType<string | number>,
        default: false
    }
};

export type DJSegmentedEmits = {
    (e: 'update:modelValue', value: string | number): void,
    (e: 'change', value: string | number): void,
};

export const useSegmented = (props: DJSegmentedPropsType, emits: DJSegmentedEmits) => {
    watch(() => props.modelValue, () => {
        init();
        emits("change", props.modelValue)
    })

    const segmentedInnerRef = ref();

    const segmentedConfig = reactive({
        indicatorWidth: "",
        indicatorHeight: "",
        indicatorTranslateX: "",
        indicatorTranslateY: ""
    })

    const isObject = computed(() => (item: String | Number | SegmentedDataType) => {
        return typeof item == "object";
    })

    const isDisabled = computed(() => (item: SegmentedDataType) => {
        return typeof item == "object" && item?.disabled
    })

    /**
    * 切换选中项
    * @param value 选中值
    */
    const segmentedToggle = (item: string | number | SegmentedDataType) => {
        if (props.disabled || unref(isDisabled)(item as SegmentedDataType)) return;
        if (unref(isObject)(item)) {
            if ((item as SegmentedDataType).value !== props.modelValue) {
                emits("update:modelValue", (item as SegmentedDataType)?.value)
            }
        } else {
            if (item !== props.modelValue) {
                emits("update:modelValue", item as string | number)
            }
        }
    }

    /**
     * 加载标记
    */
    const init = () => {
        setTimeout(() => {
            const parentStyle = window.getComputedStyle(segmentedInnerRef.value);
            const activeElement = segmentedInnerRef.value.querySelector('.dj-segmented__option[data-active="true"]')
            if (activeElement) {
                const translateX = activeElement.offsetLeft - parseInt(parentStyle.paddingRight);
                const translateY = activeElement.offsetTop - parseInt(parentStyle.paddingTop);
                segmentedConfig.indicatorWidth = activeElement.offsetWidth + 'px';
                segmentedConfig.indicatorHeight = activeElement.offsetHeight + 'px';
                segmentedConfig.indicatorTranslateX = translateX + 'px';
                segmentedConfig.indicatorTranslateY = translateY + 'px';
            }
        }, 0);
    }

    onMounted(() => {
        init();
    })

    return {
        segmentedInnerRef,
        segmentedConfig,
        isObject,
        isDisabled,
        segmentedToggle,
        init
    }
}