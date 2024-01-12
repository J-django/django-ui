<script setup lang="ts" name="dj-button">
// plugins
import "./index.less";

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
    <button class="dj-button" :class="[type]" :style="{ '--custom-background-color': color }">
        <span class="dj-button-inner">
            <slot>
                {{ text }}
            </slot>
        </span>
    </button>
</template>