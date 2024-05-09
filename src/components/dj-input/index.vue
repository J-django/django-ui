<script setup lang="ts" name="dj-input">
// plugins
import "./index.less";
import { ref, reactive, useSlots } from 'vue'
import { nanoid } from 'nanoid';

defineProps({
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

const emits = defineEmits(['update:modelValue', 'keyup.enter', 'change', 'input', 'focus', 'blur', 'clear'])

const slots = useSlots();

const dj_input_id = ref(nanoid());

const input__inner = reactive({
    focus: false,
    active: false,
})

const getFocus = () => {
    const dom = document.getElementById(dj_input_id.value);
    dom?.focus();
}

const getBlur = (id: string) => {
    const dom = document.getElementById(id);
    dom?.blur();
}

const input__innerChange = (e: Event) => {
    emits("change", (e.target as any).value)
}

const input__innerInputChange = (e: Event) => {
    emits("input", (e.target as any).value)
    emits("update:modelValue", (e.target as any).value)
}

const input__innerFocusChange = () => {
    input__inner.focus = true;
    emits("focus")
}

const input__innerFocusoutChange = () => {
    input__inner.focus = false;
    emits("blur")
}

const clearInput = () => {
    emits("clear", undefined)
    emits("update:modelValue", undefined)
}

const input__innerKeyupEnterChange = () => {
    emits("keyup.enter");
}

defineExpose({ focus: getFocus, blur: getBlur, clear: clearInput })
</script>

<template>
    <div class="dj-input" :class="[disabled ? 'is-disabled' : '']">
        <div :id="dj_input_id" class="dj-input__wrapper" :class="[input__inner.focus ? 'is-focus' : '']"
            @click="getFocus">
            <span class="dj-input__prefix" v-if="slots['prefix-icon']">
                <span class="dj-input__prefix__inner">
                    <slot name="prefix-icon" />
                </span>
            </span>
            <input :id="id" class="dj-input__inner" :placeholder="placeholder" :enterkeyhint="enterkeyhint"
                :disabled="disabled" :value="modelValue" @change="input__innerChange" @input="input__innerInputChange"
                @focus="input__innerFocusChange" @focusout="input__innerFocusoutChange"
                @keyup.enter.native="input__innerKeyupEnterChange" />
            <div class="dj-input__clear" v-if="clear && modelValue" @click="clearInput">
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