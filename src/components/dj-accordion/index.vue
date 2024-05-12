<script setup lang="ts" name="dj-accordion">
// plugins
import "./index.less";
import { ref, reactive, watch, onMounted } from 'vue'

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
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(["update:modelValue", "change"])

watch(() => props.modelValue, (val: boolean) => {
    if (val) {
        DJAccordionInner.value.style.display = "block"
        accordionConfig.contentStyle = {
            overflow: "hidden",
            height: `${DJAccordionInner.value.scrollHeight}px`,
            willChange: "height",
            transition: "height .25s"
        }
    } else {
        DJAccordionInner.value.style.height = `${DJAccordionInner.value.scrollHeight}px`;
        setTimeout(() => {
            accordionConfig.contentStyle = {
                transition: "height .25s",
                willChange: "height",
                height: "0px",
                overflow: "hidden"
            }
        }, 0);
    }
})

const DJAccordionInner = ref();
const accordionConfig = reactive({
    wrapperStyle: {},
    contentStyle: {}
})

const accordion__toggle = () => {
    emits("change", !props.modelValue)
    emits("update:modelValue", !props.modelValue)
}

const accordionTransitionEnd = () => {
    if (props.modelValue) {
        accordionConfig.wrapperStyle = {};
        DJAccordionInner.value.style.display = "";
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

const initAccordion = () => {
    if (!props.modelValue) {
        DJAccordionInner.value.style.display = "none";
        DJAccordionInner.value.style.height = "0";
        DJAccordionInner.value.style.overflow = "hidden";
    }
}

onMounted(() => {
    initAccordion();
})
</script>

<template>
    <div class="dj-accordion">
        <div class="dj-accordion__wrapper" :class="[props.modelValue ? 'is-active' : '']"
            :style="accordionConfig.wrapperStyle">
            <button class="dj-accordion__header" @click="accordion__toggle">
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
            <div class="dj-accordion__inner" :style="accordionConfig.contentStyle" ref="DJAccordionInner"
                @transitionend="accordionTransitionEnd">
                <div class="dj-accordion__inner-content">
                    <slot name="default">
                        {{ props.content }}
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>