<script setup lang="ts">
// plugin
import "./index.less";
import { onMounted } from 'vue'
import { DJAccordionOptions, DJAccordionProps, DJAccordionEmits, useDJAccordion } from './useAccordion'

// script
defineOptions(DJAccordionOptions)
const props = defineProps(DJAccordionProps)
const emits = defineEmits<DJAccordionEmits>()

const { accordionRef, accordionConfig, DJAccordion_Class, toggle, DJAccordion_TransitionendChange, initAccordion } = useDJAccordion(props, emits);

onMounted(() => {
    initAccordion();
})

defineExpose({ toggle })
</script>

<template>
    <div class="dj-accordion">
        <div class="dj-accordion__wrapper" :class="DJAccordion_Class" :style="accordionConfig.wrapperStyle">
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