<script setup lang="ts">
// plugin
import "./index.less"
import { DJSliderOptions, DJSliderProps, DJSliderEmits, useSlider } from './useSlider'

// script
defineOptions(DJSliderOptions)
const props = defineProps(DJSliderProps)
const emits = defineEmits<DJSliderEmits>();
const { DJSliderTrackRef, thumbHover, thumbDrag, progressValue, bufferedValue, DJSlider_TouchstartChange, DJSlider_TouchmoveChange, DJSliderTrack_MousedownChange, DJSliderTrack_TouchstartChange, DJSliderThumb_MouseenterChange, DJSliderThumb_MousedownChange, DJSliderThumb_MouseleaveChange, DJSliderThumb_TouchstartChange } = useSlider(props, emits);
</script>

<template>
    <div class="dj-slider" @touchstart="DJSlider_TouchstartChange" @touchmove="DJSlider_TouchmoveChange">
        <span v-if="showExtreme" class="dj-slider-extreme dj-slider-min">{{ props.min }}</span>
        <div class="dj-slider-track" ref="DJSliderTrackRef" :class="[disabled ? 'is-disabled' : '']"
            @mousedown="DJSliderTrack_MousedownChange" @touchstart="DJSliderTrack_TouchstartChange">
            <div class="dj-slider-progress" :style="{ '--dj-slider-progress-value': `${progressValue}%` }" />
            <div v-if="showBuffer" class="dj-slider-buffered"
                :style="{ '--dj-slider-buffered-value': `${bufferedValue}%` }" />
            <div v-if="showThumb" class="dj-slider-thumb" :style="{ '--dj-slider-thumb-value': `${progressValue}%` }"
                :class="[thumbHover ? 'is-hover' : '', thumbDrag ? 'is-dragging' : '']"
                @mouseenter="DJSliderThumb_MouseenterChange" @mousedown="DJSliderThumb_MousedownChange"
                @mouseleave="DJSliderThumb_MouseleaveChange" @touchstart="DJSliderThumb_TouchstartChange">
                <div class="dj-slider-thumb__wrapper"
                    :class="[thumbHover ? 'is-hover' : '', thumbDrag ? 'is-dragging' : '']">
                </div>
            </div>
        </div>
        <span v-if="showExtreme" class="dj-slider-extreme dj-slider-max">{{ props.max }}</span>
    </div>
</template>