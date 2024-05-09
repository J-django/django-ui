<script setup lang="ts" name="dj-button">
// plugins
import "./index.less";
import { isDarkColor } from '@/utils/tool'

// script
defineProps({
    type: {
        type: String,
        default: "",
        validate: (type: string) => {
            return ["primary", "success", "warning", "danger"].includes(type);
        }
    },
    text: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <button class="dj-button" :class="[type]"
        :style="{ '--custom-background-color': color, '--custom-text-color': color ? isDarkColor(color) ? 'var(--white)' : 'var(--black)' : '' }">
        <span class="dj-button-inner">
            <slot>
                {{ text }}
            </slot>
        </span>
    </button>
</template>