<script lang="ts" setup>
// plugin
import "./index.less"
import { DJOverlayOptions, DJOverlayProps, useDJOverlay } from './useOverlay'

// script
defineOptions(DJOverlayOptions)

const props = defineProps(DJOverlayProps)

const { has_transition, DJOverlay_Style } = useDJOverlay(props);
</script>

<template>
    <Teleport to="body" :disabled="!appendBody">
        <transition :name="has_transition">
            <div class="dj-overlay" v-if="visible" :style="DJOverlay_Style">
                <slot></slot>
            </div>
        </transition>
    </Teleport>
</template>