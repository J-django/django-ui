<script lang="ts" setup>
// plugin
import "./index.less"

// script
defineOptions({
    name: "dj-overlay"
})

defineProps({
    appendBody: {
        type: Boolean,
        default: false
    },
    visible: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits({
    outside: (event: MouseEvent) => event instanceof MouseEvent
})

const DJOverlay_ClickChange = (event: MouseEvent) => {
    emits("outside", event)
}
</script>

<template>
    <Teleport to="body" :disabled="!appendBody">
        <transition name="overlay">
            <div class="dj-overlay" v-if="visible" @click="DJOverlay_ClickChange">
                <div class="dj-overlay__wrapper">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </Teleport>
</template>