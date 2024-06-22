<script setup lang="ts" name="dj-button">
// plugin
import "./index.less";
import { useColor } from "@/hooks"
import { computed, StyleValue } from "vue"

// script
const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: ""
    },
    plain: {
        type: Boolean,
        default: false
    }
})

const { isDarkColor, hexToRgba } = useColor();

const DJButtonStyle = computed(() => {
    const color = props.color;
    const style = {} as StyleValue & any;
    if (color) {
        const dc = isDarkColor(color);
        style["--dj-button-custom-background-color"] = color;
        style["--dj-button-custom-color"] = dc ? "var(--dj-button-white-color)" : "var(--dj-button-black-color)";
    }
    if (props.plain && color) {
        const dc = isDarkColor(color);
        style["--dj-button-custom-background-color"] = null;
        style["--dj-button-custom-color"] = null;
        style["--dj-button-plain-background-color"] = hexToRgba(color, .1);
        style["--dj-button-plain-border-color"] = hexToRgba(color, .75);
        style["--dj-button-plain-color"] = color;
        style["--dj-button-plain-hover-color"] = dc ? "var(--dj-button-white-color)" : "var(--dj-button-black-color)";
        style["--dj-button-plain-hover-background-color"] = color;
    }
    return style;
})
</script>

<template>
    <button class="dj-button" :class="[plain ? 'is-plain' : '']" :style="DJButtonStyle">
        <span class="jy-button__inner">
            <slot>
                {{ label }}
            </slot>
        </span>
    </button>
</template>