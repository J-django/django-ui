<script lang="ts" setup name="dj-segmented">
// plugin
import "./index.less";
import { ref, reactive, watch, onMounted } from 'vue'

// script
const props = defineProps({
    data: {
        type: Array<String | Number | Boolean>,
        default: [],
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: false
    }
})

const emits = defineEmits(['update:modelValue', 'change'])

const switchInnerRef = ref();

const switchConfig = reactive({
    indicatorWidth: "",
    indicatorHeight: "",
    indicatorTranslateX: "",
    indicatorTranslateY: ""
})

watch(() => props.modelValue, () => {
    init();
    emits("change", props.modelValue)
})

/**
 * 切换选中项
 * @param value 选中值
 */
const switchToggle = (value: String | Number | Boolean) => {
    if (props.disabled) return;
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        if (value !== props.modelValue) {
            init();
            emits("update:modelValue", value)
        }
    }
}

/**
 * 加载标记
 */
const init = () => {
    setTimeout(() => {
        const parentStyle = window.getComputedStyle(switchInnerRef.value);
        const activeElement = switchInnerRef.value.querySelector('.dj-switch__option[data-active="true"]')
        if (activeElement) {
            const translateX = activeElement.offsetLeft - parseInt(parentStyle.paddingLeft);
            const translateY = activeElement.offsetTop - parseInt(parentStyle.paddingTop);
            switchConfig.indicatorWidth = activeElement.offsetWidth + 'px';
            switchConfig.indicatorHeight = activeElement.offsetHeight + 'px';
            switchConfig.indicatorTranslateX = translateX + 'px';
            switchConfig.indicatorTranslateY = translateY + 'px';
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
    <div class="dj-switch">
        <div class="dj-switch__wrapper" :class="[disabled ? 'is-disabled' : '']">
            <div class="dj-switch__inner" ref="switchInnerRef" :aria-disabled="disabled">
                <div class="dj-swicth-indicator" :style="{
            '--dj-switch-indicator-width': switchConfig.indicatorWidth,
            '--dj-switch-indicator-height': switchConfig.indicatorHeight,
            'transform': `translate(${switchConfig.indicatorTranslateX},${switchConfig.indicatorTranslateY})`
        }" />
                <div class="dj-switch__option" v-for="(item, index) of data" :key="index"
                    :data-active="modelValue === item ? true : false" @click=" switchToggle(item)">
                    <span class="dj-switch__option-label">
                        {{ item }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>