<script lang="ts" setup name="dj-switch">
// plugin
import "./index.less";
import { watch, computed, useSlots } from "vue"

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

const UnChecked = computed(() => props.unCheckedLabel || slots.unChecked)

const checked = computed(() => props.checkedLabel || slots.checked);

/**
 * 切换switch状态
 */
const switchToggle = () => {
    emits("update:modelValue", !props.modelValue);
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
            <span v-if="UnChecked" class="dj-switch__label dj-switch__label-left"
                :class="!modelValue ? 'is-checked' : ''">
                <slot name="unChecked">
                    {{ unCheckedLabel }}
                </slot>
            </span>
            <span class="dj-switch__inner">
                <span class="dj-switch__thumb"></span>
            </span>
            <span v-if="checked" class="dj-switch__label dj-switch__label-right"
                :class="modelValue ? 'is-checked' : ''">
                <slot name="checked">
                    {{ checkedLabel }}
                </slot>
            </span>
        </button>

    </label>
</template>