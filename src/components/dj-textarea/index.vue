<script setup lang="ts" name="dj-textarea">
// plugin
import "./index.less"
import { ref, unref, reactive } from "vue";

// script
defineProps({
    id: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: ""
    },
    rows: {
        type: Number,
        default: 3
    },
    cols: {
        type: Number,
        default: 5
    },
    modelValue: {
        type: String,
        default: ""
    },
})

const emits = defineEmits(["update:modelValue", "input", "change", "focus", "blur"])

const textareaRef = ref();
const textareaConfig = reactive({
    focus: false,
    active: false,
})

// Event
/**
 * 输入时触发
 * @param event Event
 */
const textareaConfigChange = (event: Event) => {
    emits("input", event)
}

/**
 * 值改变时触发
 * @param event Event
 */
const textareaConfigInputChange = (event: Event) => {
    emits("change", event)
    emits("update:modelValue", (event.target as any).value)
}

/**
 * 获取焦点时触发
 * @param event Event
 */
const textareaConfigFocusChange = (event: Event) => {
    textareaConfig.focus = true;
    emits("focus", event)
}

/**
 * 失去焦点时触发
 * @param event Event
 */
const textareaConfigFocusoutChange = (event: Event) => {
    textareaConfig.focus = false;
    emits("blur", event)
}

/**
 * 获取输入框焦点
 */
const focus = () => {
    unref(textareaRef).focus();
}

/**
 * 失去输入框焦点
 */
const blur = () => {
    unref(textareaRef).blur();
}

defineExpose({ focus: focus, blur: blur })
</script>
˝
<template>
    <div class="dj-textarea" :class="[disabled ? 'is-disabled' : '']">
        <div class="dj-textarea__wrapper" :class="[textareaConfig.focus ? 'is-focus' : '']" @click="focus">
            <textarea :id="id" ref="textareaRef" class="dj-textarea__inner" :rows="rows" :cols="cols"
                :placeholder="placeholder" :disabled="disabled" :value="modelValue" @input="textareaConfigInputChange"
                @change="textareaConfigChange" @focus="textareaConfigFocusChange"
                @focusout="textareaConfigFocusoutChange" />
        </div>
    </div>
</template>