<script setup lang="ts" name="dj-card">
// plugins
import "./index.less";
import { reactive, useSlots, onMounted } from 'vue'

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
    }
})

const slots = useSlots();

const showCheck = reactive({
    showTitle: true,
    showFooter: true
})

onMounted(() => {
    showCheck.showTitle = (props.title || slots.header) !== undefined;
    showCheck.showFooter = (props.footer || slots.footer) !== undefined;
})
</script>

<template>
    <div class="dj-card" :class="[align]">
        <div class="dj-card-header" v-if="showCheck.showTitle">
            <slot name="header">
                {{ title }}
            </slot>
        </div>
        <div class="dj-card-body">
            <slot />
        </div>
        <div class="dj-card-footer" v-if="showCheck.showFooter">
            <slot name="footer">
                {{ footer }}
            </slot>
        </div>
    </div>
</template>