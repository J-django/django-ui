<script setup lang="ts" name="dj-textarea">
// plugins
import "./index.less"
import { ref, reactive } from "vue";

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

const DjTextareaRef = ref();

const textarea__inner = reactive({
    focus: false,
    active: false,
})

// Event
/**
 * 输入时触发
 * @param event Event
 */
const textarea__innerChange = (event: Event) => {
    emits("input", event)
}

/**
 * 值改变时触发
 * @param event Event
 */
const textarea__innerInputChange = (event: Event) => {
    emits("change", event)
    emits("update:modelValue", (event.target as any).value)
}

/**
 * 获取焦点时触发
 * @param event Event
 */
const textarea__innerFocusChange = (event: Event) => {
    textarea__inner.focus = true;
    emits("focus", event)
}

/**
 * 失去焦点时触发
 * @param event Event
 */
const textarea__innerFocusoutChange = (event: Event) => {
    textarea__inner.focus = false;
    emits("blur", event)
}

/**
 * 获取输入框焦点
 */
const focus = () => {
    DjTextareaRef.value.focus();
}

/**
 * 失去输入框焦点
 */
const blur = () => {
    DjTextareaRef.value.blur();
}

defineExpose({ focus: focus, blur: blur })
</script>
˝
<template>
    <div class="dj-textarea" :class="[disabled ? 'is-disabled' : '']">
        <div class="dj-textarea__wrapper" :class="[textarea__inner.focus ? 'is-focus' : '']" @click="focus">
            <textarea :id="id" ref="DjTextareaRef" class="dj-textarea__inner" :rows="rows" :cols="cols"
                :placeholder="placeholder" :disabled="disabled" :value="modelValue" @input="textarea__innerInputChange"
                @change="textarea__innerChange" @focus="textarea__innerFocusChange"
                @focusout="textarea__innerFocusoutChange" />
        </div>
    </div>
</template>