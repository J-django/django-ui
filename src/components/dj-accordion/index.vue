<script setup lang="ts" name="dj-accordion">
// plugins
import "./index.less";
import { ref, reactive, watch, onMounted } from 'vue'

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

watch(() => props.modelValue, (val: boolean) => {
    if (val) {
        accordionConfig.wrapperStyle = {
            transition: "background-color .25s"
        }
        DJAccordionInner.value.style.display = "block"
        accordionConfig.contentStyle = {
            overflow: "hidden",
            height: `${DJAccordionInner.value.scrollHeight}px`,
            willChange: "height",
            transition: "height .25s"
        }
    } else {
        accordionConfig.wrapperStyle = {
            transition: "background-color .25s"
        }
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
    emits("change", val)
})

const emits = defineEmits(["update:modelValue", "change"])

const DJAccordionInner = ref();
const accordionConfig = reactive({
    wrapperStyle: {},
    contentStyle: {}
})

const accordion__toggle = () => {
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
                    <svg class="button-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
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