<script setup lang="ts" name="dj-button">
// plugins
import "./index.less";
import { useColor } from "@/hooks"

// script
defineProps({
    text: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: ""
    },
})

const { isDarkColor } = useColor();
</script>

<template>
    <button class="dj-button"
        :style="{ '--dj-button-custom-background-color': color, '--dj-button-custom-color': color ? isDarkColor(color) ? 'var(--dj-button-white-color)' : 'var(--dj-button-black-color)' : '' }">
        <span class="dj-button-inner">
            <slot>
                {{ text }}
            </slot>
        </span>
    </button>
</template>