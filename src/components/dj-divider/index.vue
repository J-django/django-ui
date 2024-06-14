<script setup lang="ts" name="dj-divider">
// plugin
import "./index.less";
import { useSlots, PropType } from 'vue'

// script
const slots = useSlots();

type DividerType = "solid" | "dashed" | "dotted";
type DividerAlign = "left" | "center" | "right";

defineProps({
    text: {
        type: String,
        default: ""
    },
    type: {
        type: String as PropType<DividerType>,
        default: "solid",
        validator: (type: string): boolean => {
            return ["solid", "dashed", "dotted"].includes(type as DividerType);
        }
    },
    align: {
        type: String as PropType<DividerAlign>,
        default: "center"
    },
    margin: {
        type: [Number, String],
        default: 10
    },
    offset: {
        type: [Number, String],
        default: 10
    }
})
</script>

<template>
    <div class="dj-divider">
        <div class="dj-divider__wrapper" :class="['dj-divider-type--' + type, align]" :style="{
            '--dj-divider-margin': typeof offset === 'string' ? `${margin}` : `${margin}px`,
            '--dj-divider-offset': typeof offset === 'string' ? `${offset}` : `${offset}px`
        }">
            <span class="dj-divider__inner">
                <slot v-if="slots['default']" />
                <template v-else>
                    {{ text }}
                </template>
            </span>
        </div>
    </div>
</template>