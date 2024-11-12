<script lang="ts" setup>
// plugin
import "./index.less"
import DJOverlay from '@/components/dj-overlay';
import { DJImageViwerOptions, DJButtonProps, DJImageViwerEmits, useDJImageViwer } from './useImageViwer'

// script
defineOptions(DJImageViwerOptions)
const props = defineProps(DJButtonProps);
const emits = defineEmits<DJImageViwerEmits>();
const { overlayImageRef, overlayZoomRef, overlayCloseRef, visible, zoom, open, close, zoom_toogle } = useDJImageViwer(props, emits);
</script>

<template>
    <div class="dj-image-viwer">
        <div class="dj-image-viwer__wrapper">
            <a :href="src" @click.prevent="open">
                <img :src="src" alt="">
            </a>
        </div>
        <DJOverlay :visible="visible" :appendBody="appendBody" :transition="false" :overlay="false">
            <div class="dj-overlay-image-viwer">
                <div class="dj-overlay-image-viwer__wrapper">
                    <div class="dj-image-viwer-zoom">
                        <div class="dj-image-viwer-zoom__wrapper">
                            <img ref="overlayImageRef" style="width:100px;height: 100px;"
                                class="dj-image-viwer-zoom-img" :src="src" alt="">
                        </div>
                    </div>
                </div>
                <div class="dj-overlay-image-viwer-toolbox">
                    <button ref="overlayZoomRef" class="dj-image-viwer-toolbox-operate" @click="zoom_toogle">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path v-show="!zoom" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="1.5"
                                d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0M7.5 11h7M11 7.5v7"
                                color="currentColor" />
                            <path v-show="zoom" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="1.5"
                                d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0M7.5 11h7"
                                color="currentColor" />
                        </svg>
                    </button>
                    <button ref="overlayCloseRef" class="dj-image-viwer-toolbox-operate" @click="close">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z" />
                        </svg>
                    </button>
                </div>
            </div>
        </DJOverlay>
    </div>
</template>