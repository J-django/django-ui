<script setup lang="ts" name="dj-input">
// plugins
import "./index.less";
import { ref, unref, reactive, useSlots } from 'vue'

// script
const props = defineProps({
    id: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clear: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ""
    },
    enterkeyhint: {
        type: String,
        default: ""
    }
})

const emits = defineEmits(['update:modelValue', 'input', 'change', 'keyup.enter', 'focus', 'blur', 'clear'])

const slots = useSlots();

const inputRef = ref();
const inputConfig = reactive({
    focus: false,
    active: false,
})

// Event
/**
 * 输入时触发
 * @param event Event
 */
const inputConfigInputChange = (event: Event) => {
    emits("input", (event.target as any).value)
    emits("update:modelValue", (event.target as any).value)
}

/**
 * 值改变时触发
 * @param event Event
 */
const inputConfigChange = (event: Event) => {
    emits("change", (event.target as any).value)
}

/**
 * 获取焦点时触发
 * @param event Event
 */
const inputConfigFocusChange = (event: Event) => {
    inputConfig.focus = true;
    emits("focus", event)
}

/**
 * 失去焦点时触发
 * @param event Event
 */
const inputConfigFocusoutChange = (event: Event) => {
    inputConfig.focus = false;
    emits("blur", event)
}

/**
 * 回车时触发
 * @param event Event
 */
const inputConfigKeyupEnterChange = (event: Event) => {
    emits("keyup.enter", event);
}

/**
 * 获取输入框焦点
 */
const focus = () => {
    unref(inputRef).focus();
}

/**
 * 失去输入框焦点
 */
const blur = () => {
    unref(inputRef).blur();
}

/**
 * 清空输入框
 */
const clear = () => {
    emits("clear", undefined)
    emits("update:modelValue", "")
}

defineExpose({ focus: focus, blur: blur, clear: clear })
</script>

<template>
    <div class="dj-input" :class="[disabled ? 'is-disabled' : '']">
        <div class="dj-input__wrapper" :class="[inputConfig.focus ? 'is-focus' : '']" @click="focus">
            <span class="dj-input__prefix" v-if="slots['prefix-icon']">
                <span class="dj-input__prefix__inner">
                    <slot name="prefix-icon" />
                </span>
            </span>
            <input :id="id" ref="inputRef" class="dj-input__inner" :placeholder="placeholder"
                :enterkeyhint="enterkeyhint" :disabled="disabled" :value="modelValue" @change="inputConfigChange"
                @input="inputConfigInputChange" @focus="inputConfigFocusChange" @focusout="inputConfigFocusoutChange"
                @keyup.enter.native="inputConfigKeyupEnterChange" />
            <div class="dj-input__clear" v-if="props.clear && modelValue" @click="clear">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-x-circle-fill icon" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </div>
            <span class="dj-input__suffix" v-if="slots['suffix-icon']">
                <span class="dj-input__suffix__inner">
                    <slot name="suffix-icon" />
                </span>
            </span>
        </div>
    </div>
</template>