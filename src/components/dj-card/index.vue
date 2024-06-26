<script setup lang="ts" name="dj-card">
// plugin
import "./index.less";
import { computed, useSlots } from 'vue'

// script
const props = defineProps({
    align: {
        type: String,
        default: "left"
    },
    title: {
        type: String,
        default: undefined
    },
    footer: {
        type: String,
        default: undefined
    },
})

const slots = useSlots();

const isHeader = computed(() => props.title || slots.header);

const isFooter = computed(() => props.footer || slots.footer);
</script>

<template>
    <div class="dj-card">
        <div class="dj-card__wrapper" :class="[align]">
            <div v-if="isHeader" class="dj-card-header">
                <slot name="header">
                    {{ title }}
                </slot>
            </div>
            <div class="dj-card-body">
                <slot />
            </div>
            <div v-if="isFooter" class="dj-card-footer">
                <slot name="footer">
                    {{ footer }}
                </slot>
            </div>
        </div>
    </div>
</template>