<script lang="ts" setup name="dj-segmented">
// plugin
import "./index.less";
import { ref, unref, reactive, watch, computed, onMounted } from 'vue'

// script
abstract class SegmentedItem {
    abstract label: string;
    abstract value: string;
    abstract disabled: boolean;
}

const props = defineProps({
    data: {
        type: Array,
        default: [],
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: false
    }
})

const emits = defineEmits(['update:modelValue', 'change'])

const segmentedInnerRef = ref();

const segmentedConfig = reactive({
    indicatorWidth: "",
    indicatorHeight: "",
    indicatorTranslateX: "",
    indicatorTranslateY: ""
})

const isObject = computed(() => (item: String | SegmentedItem) => {
    return typeof item == "object";
})

const isDisabled = computed(() => (item: SegmentedItem) => {
    return typeof item == "object" && item?.disabled
})

watch(() => props.modelValue, () => {
    init();
    emits("change", props.modelValue)
})

/**
 * 切换选中项
 * @param value 选中值
 */
const segmentedToggle = (item: String | SegmentedItem) => {
    if (props.disabled || unref(isDisabled)(item as SegmentedItem)) return;
    if (unref(isObject)(item)) {
        init();
        emits("update:modelValue", (item as SegmentedItem)?.value)
    } else {
        if (item !== props.modelValue) {
            init();
            emits("update:modelValue", item)
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
            const translateX = activeElement.offsetLeft - parseInt(parentStyle.paddingLeft);
            const translateY = activeElement.offsetTop - parseInt(parentStyle.paddingTop);
            segmentedConfig.indicatorWidth = activeElement.offsetWidth + 'px';
            segmentedConfig.indicatorHeight = activeElement.offsetHeight + 'px';
            segmentedConfig.indicatorTranslateX = translateX + 'px';
            segmentedConfig.indicatorTranslateY = translateY + 'px';
        }
    }, 0);
}

/**
 * 初始化
 */
onMounted(() => {
    init();
})
</script>

<template>
    <div class="dj-segmented">
        <div class="dj-segmented__wrapper" :class="[disabled ? 'is-disabled' : '']">
            <div class="dj-segmented__inner" ref="segmentedInnerRef" :aria-disabled="disabled">
                <div class="dj-segmented-indicator" :style="{
            '--dj-segmented-indicator-width': segmentedConfig.indicatorWidth,
            '--dj-segmented-indicator-height': segmentedConfig.indicatorHeight,
            'transform': `translate(${segmentedConfig.indicatorTranslateX},${segmentedConfig.indicatorTranslateY})`
        }"></div>
                <div class="dj-segmented__option" v-for="(item, index) of data" :key="index"
                    :data-active="isObject(item as SegmentedItem) ? modelValue == (item as SegmentedItem).value : modelValue == item"
                    :class="[(isObject(item as SegmentedItem) && isDisabled(item as SegmentedItem)) ? 'is-disabled' : '']"
                    @click=" segmentedToggle(item as String | SegmentedItem)">
                    <span class="dj-segmented__option-label">
                        {{ isObject(item as String | SegmentedItem) ? (item as SegmentedItem)?.label : item }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>