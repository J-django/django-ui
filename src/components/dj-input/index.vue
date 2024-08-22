<script setup lang="ts">
// plugin
import "./index.less";
import { useSlots } from 'vue'
import { DJInputOptions, DJInputProps, DJInputEmits, useInput } from './useInput'

// script
defineOptions(DJInputOptions)
const props = defineProps(DJInputProps);
const emits = defineEmits<DJInputEmits>()
const {
    inputRef,
    DJInput_Class,
    isSlot,
    DJInput_InputChange,
    DJInput_Change,
    DJInput_FocusChange,
    DJInput_FocusoutChange,
    DJInput_KeyupChange,
    focus,
    blur,
    clear
} = useInput(props, emits, useSlots());

defineExpose({ focus: focus, blur: blur, clear: clear })
</script>

<template>
    <div class="dj-input" :class="DJInput_Class">
        <div v-if="isSlot('addon-before') || addonBefore" class="dj-input-addon-before">
            <div class="dj-input-addon-before__wrapper">
                <slot name="addon-before">
                    {{ addonBefore }}
                </slot>
            </div>
        </div>
        <div class="dj-input__wrapper" @click="focus">
            <span class="dj-input__prefix" v-if="isSlot('prefix')">
                <span class="dj-input__prefix__inner">
                    <slot name="prefix" />
                </span>
            </span>
            <input :id="id" ref="inputRef" class="dj-input__inner" :placeholder="placeholder"
                :enterkeyhint="enterkeyhint" :disabled="disabled" :value="modelValue" @change="DJInput_Change"
                @input="DJInput_InputChange" @focus="DJInput_FocusChange" @focusout="DJInput_FocusoutChange"
                @keyup.native="DJInput_KeyupChange" />
            <div class="dj-input__clear" v-if="clearable && modelValue" @click="clear">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-x-circle-fill icon" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </div>
            <span class="dj-input__suffix" v-if="isSlot('suffix')">
                <span class="dj-input__suffix__inner">
                    <slot name="suffix" />
                </span>
            </span>
        </div>
        <div v-if="isSlot('addon-after') || addonAfter" class="dj-input-addon-after">
            <div class="dj-input-addon-after__wrapper">
                <slot name="addon-after">
                    {{ addonAfter }}
                </slot>
            </div>
        </div>
    </div>
</template>