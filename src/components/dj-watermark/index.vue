<script setup lang="ts">
// plugin
import "./index.less"
import { DJWatermarkOptions, DJWatermarkProps, useWatermark } from './useWatermark'

// script
defineOptions(DJWatermarkOptions)
const props = defineProps(DJWatermarkProps)
const { WatermarkStyle } = useWatermark(props);
</script>

<template>
    <div class="dj-watermark">
        <div class="dj-watermark__wrapper">
            <slot></slot>
            <div class="dj-watermark__inner" :style="WatermarkStyle"></div>
        </div>
    </div>
</template>