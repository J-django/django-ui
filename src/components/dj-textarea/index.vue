<script setup lang="ts">
// plugin
import "./index.less"
import { DJTextareaOptions, DJTextareaProps, DJTextareaEmits, useTextarea } from './useTextarea'

// script
defineOptions(DJTextareaOptions)
defineProps(DJTextareaProps)
const emits = defineEmits<DJTextareaEmits>()
const { textareaRef, textareaConfig, DJTextarea_InputChange, DJTextarea_Change, DJTextarea_FocusChange, DJTextarea_FocusoutChange, focus, blur } = useTextarea(emits);

defineExpose({ focus: focus, blur: blur })
</script>
˝
<template>
    <div class="dj-textarea" :class="[disabled ? 'is-disabled' : '']">
        <div class="dj-textarea__wrapper" :class="[textareaConfig.focus ? 'is-focus' : '']" @click="focus">
            <textarea :id="id" ref="textareaRef" class="dj-textarea__inner" :rows="rows" :cols="cols"
                :placeholder="placeholder" :disabled="disabled" :value="modelValue" @input="DJTextarea_Change"
                @change="DJTextarea_InputChange" @focus="DJTextarea_FocusChange"
                @focusout="DJTextarea_FocusoutChange" />
        </div>
    </div>
</template>