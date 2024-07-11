<script lang="ts" setup name="dj-switch">
// plugin
import "./index.less";
import { ref, watch, computed, useSlots } from "vue"

// script
const props = defineProps({
    checkedLabel: {
        type: String,
        default: ""
    },
    unCheckedLabel: {
        type: String,
        default: ""
    },
    checkedColor: {
        type: String,
        default: ""
    },
    unCheckedColor: {
        type: String,
        default: ""
    },
    checkedBackgroundColor: {
        type: String,
        default: ""
    },
    unCheckedBackgroundColor: {
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
    },
})

const emits = defineEmits(["update:modelValue", "change"])

const slots = useSlots();

watch(() => props.modelValue, () => {
    emits("change", props.modelValue)
})

const DJSwitchInnerRef = ref();

/**
 * 是否显示未选中状态时文字
 */
const UnCheckedLabel = computed(() => props.unCheckedLabel || slots.unCheckedLabel)

/**
 * 是否显示选中状态时文字
 */
const checkedLabel = computed(() => props.checkedLabel || slots.checkedLabel);

/**
 * 切换switch状态
 */
const switchToggle = () => {
    DJSwitchInnerRef.value.style.transition = "background-color 350ms, box-shadow 250ms";
    emits("update:modelValue", !props.modelValue);
}

const DJSwitcnTransitionendChange = () => {
    DJSwitchInnerRef.value.style.transition = "box-shadow 250ms";
}

defineExpose({ switchToggle })
</script>

<template>
    <label class="dj-switch" :class="[disabled ? 'is-disabled' : '', modelValue ? 'is-checked' : '']">
        <button class="dj-switch__wrapper" :style="{
        '--dj-switch-custom-checked-color': checkedColor,
        '--dj-switch-custom-unChecked-color': unCheckedColor,
        '--dj-switch-custom-checked-background-color': checkedBackgroundColor,
        '--dj-switch-custom-unChecked-background-color': unCheckedBackgroundColor
    }" :disabled="disabled" @click.prevent="switchToggle">
            <span v-if="UnCheckedLabel" class="dj-switch__label dj-switch__label-left"
                :class="!modelValue ? 'is-checked' : ''">
                <slot name="unChecked-label">
                    {{ unCheckedLabel }}
                </slot>
            </span>
            <span class="dj-switch__inner" ref="DJSwitchInnerRef" @transitionend="DJSwitcnTransitionendChange">
                <span class="dj-switch__thumb">
                    <slot name="checked-thumb" v-if="modelValue"></slot>
                    <slot name="unChecked-thumb" v-else></slot>
                </span>
            </span>
            <span v-if="checkedLabel" class="dj-switch__label dj-switch__label-right"
                :class="modelValue ? 'is-checked' : ''">
                <slot name="checked-label">
                    {{ checkedLabel }}
                </slot>
            </span>
        </button>

    </label>
</template>