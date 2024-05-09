<script setup lang="ts" name="dj-divider">
// plugins
import "./index.less";
import { useSlots } from 'vue'

const slots = useSlots();

defineProps({
    text: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "solid",
        validator: (type: string) => {
            return ["solid", "dashed", "dotted"].includes(type);
        }
    }
})
</script>

<template>
    <div class="dj-divider">
        <div class="dj-divider-inner" :class="['dj-divider-inner--' + type]">
            <slot v-if="slots['default']" />
            <template v-else>
                {{ text }}
            </template>
        </div>
    </div>
</template>