<script lang="ts" setup>
// plugin
import "./index.less";
import { useSlots } from "vue"
import { DJSwitchOptions, DJSwitchProps, DJSwitchEmits, useSwitch } from './useSwitch'

// script
defineOptions(DJSwitchOptions)
const props = defineProps(DJSwitchProps)
const emits = defineEmits<DJSwitchEmits>()
const { DJSwitchInnerRef, isUnCheckedLabel, isCeckedLabel, DJSwitch_Style, DJSwicth_Class, DJSwitch_LeftClass, DJSwicth_RightClass, toggle, DJSwitcn_TransitionendChange } = useSwitch(props, emits, useSlots());
defineExpose({ toggle })
</script>

<template>
    <label class="dj-switch" :class="DJSwicth_Class">
        <button class="dj-switch__wrapper" :style="DJSwitch_Style" :disabled="disabled" @click.prevent="toggle">
            <span v-if="isUnCheckedLabel" class="dj-switch__label dj-switch__label-left" :class="DJSwitch_LeftClass">
                <slot name="unChecked-label">
                    {{ unCheckedLabel }}
                </slot>
            </span>
            <span class="dj-switch__inner" ref="DJSwitchInnerRef" @transitionend="DJSwitcn_TransitionendChange">
                <span class="dj-switch__thumb">
                    <slot name="checked-thumb" v-if="modelValue"></slot>
                    <slot name="unChecked-thumb" v-else></slot>
                </span>
            </span>
            <span v-if="isCeckedLabel" class="dj-switch__label dj-switch__label-right" :class="DJSwicth_RightClass">
                <slot name="checked-label">
                    {{ checkedLabel }}
                </slot>
            </span>
        </button>

    </label>
</template>