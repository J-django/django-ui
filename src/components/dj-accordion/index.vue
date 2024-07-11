<script setup lang="ts" name="dj-accordion">
// plugin
import "./index.less";
import { ref, unref, reactive, watch, onMounted } from 'vue'

// script
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(["update:modelValue", "change"])

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

/**
 * 切换
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

onMounted(() => {
    initAccordion();
})

defineExpose({ toggle })
</script>

<template>
    <div class="dj-accordion">
        <div class="dj-accordion__wrapper"
            :class="[props.modelValue ? 'is-active' : '', props.disabled ? 'is-disabled' : '']"
            :style="accordionConfig.wrapperStyle">
            <button class="dj-accordion__header" @click="toggle">
                <span class="dj-accordion__header-label">
                    <slot name="title">
                        {{ props.title }}
                    </slot>
                </span>
                <span class="dj-accordion__header-icon">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0" />
                    </svg>
                </span>
            </button>
            <div class="dj-accordion__inner" :style="accordionConfig.contentStyle" ref="accordionRef"
                @transitionend="DJAccordion_TransitionendChange">
                <div class="dj-accordion__inner-content">
                    <slot name="default">
                        {{ props.content }}
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>