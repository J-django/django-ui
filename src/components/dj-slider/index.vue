<script setup lang="ts" name="dj-slider">
// plugin
import "./index.less"
import { ref, unref, reactive, computed } from 'vue'

// script
const props = defineProps({
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    buffered: {
        type: Number,
        default: 0
    },
    disabled: {
        type: Boolean,
        default: false
    },
    showBuffer: {
        type: Boolean,
        default: false
    },
    showThumb: {
        type: Boolean,
        default: true
    },
    showExtreme: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Number,
        default: 0
    },
})

const emits = defineEmits(["update:modelValue", "input", "change", "progress"]);

const DJSliderTrackRef = ref();
const sliderConfig = reactive({
    thumbHover: false,
    thumbDrag: false
})

const progressValue = computed((): number => {
    const progress = (props.modelValue - props.min) / (props.max - props.min) * 100;
    emits("progress", progress)
    return progress;
})

const bufferedValue = computed((): number => {
    const buffer = props.buffered;
    if (buffer <= 0) {
        return 0;
    } else if (buffer >= 100) {
        return 100;
    } else {
        return buffer;
    }
})

const ComputedValue = (x: number, width: number): number => {
    const percentage = Math.max(0, Math.min(100, Math.round(x / width * 100)));
    const value = Math.round(props.min + (percentage / 100) * (props.max - props.min));
    return value;
}

// Events
const DJSlider_TouchstartChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbHover = true;
}

const DJSlider_TouchmoveChange = (event: TouchEvent) => {
    if (props.disabled) return;
    sliderConfig.thumbDrag = true;

    const track = unref(DJSliderTrackRef);
    const rect = track.getBoundingClientRect();
    let x = event.touches[0].clientX - rect.left;
    const value = ComputedValue(x, rect.width);

    emits("update:modelValue", value);
    emits("input", value);

    document.addEventListener("touchend", DJSLider_TouchendChange)
}

const DJSLider_TouchendChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbHover = false;
    sliderConfig.thumbDrag = false;

    emits("change", props.modelValue);

    document.removeEventListener("touchend", DJSLider_TouchendChange)
}

// Track Events
const DJSliderTrack_MousedownChange = (event: MouseEvent) => {
    if (event.buttons > 1 || props.disabled) return;

    const track = unref(DJSliderTrackRef);
    const rect = track.getBoundingClientRect();
    let x = event.clientX - rect.left;
    const value = ComputedValue(x, rect.width);

    emits("update:modelValue", value);
    emits("change", value);

    document.addEventListener("mousemove", DJSliderThumb_MousemoveChange);
    document.addEventListener("mouseup", DJSliderThumb_MouseupChange);
}

const DJSliderTrack_TouchstartChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbHover = true;
}

// Thumb Events
const DJSliderThumb_MouseenterChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbHover = true;
}

const DJSliderThumb_MousedownChange = (event: MouseEvent) => {
    if (event.buttons > 1 || props.disabled) return;

    sliderConfig.thumbDrag = true;

    document.addEventListener("mousemove", DJSliderThumb_MousemoveChange);
    document.addEventListener("mouseup", DJSliderThumb_MouseupChange);

}

const DJSliderThumb_MouseleaveChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbHover = false;
}

const DJSliderThumb_MousemoveChange = (event: MouseEvent) => {
    if (props.disabled) return;
    sliderConfig.thumbDrag = true;

    const track = unref(DJSliderTrackRef);
    const rect = track.getBoundingClientRect();
    let x = event.clientX - rect.left;
    const value = ComputedValue(x, rect.width);

    emits("update:modelValue", value);
    emits("input", value);
}

const DJSliderThumb_MouseupChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbDrag = false;

    document.removeEventListener("mousemove", DJSliderThumb_MousemoveChange);
    document.removeEventListener("mouseup", DJSliderThumb_MouseupChange)
}

const DJSliderThumb_TouchstartChange = () => {
    if (props.disabled) return;
    sliderConfig.thumbHover = true;
}
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
                :class="[sliderConfig.thumbHover ? 'is-hover' : '', sliderConfig.thumbDrag ? 'is-dragging' : '']"
                @mouseenter="DJSliderThumb_MouseenterChange" @mousedown="DJSliderThumb_MousedownChange"
                @mouseleave="DJSliderThumb_MouseleaveChange" @touchstart="DJSliderThumb_TouchstartChange">
                <div class="dj-slider-thumb__wrapper" :class="[
        sliderConfig.thumbHover ? 'is-hover' : '', sliderConfig.thumbDrag ? 'is-dragging' : '']">
                </div>
            </div>
        </div>
        <span v-if="showExtreme" class="dj-slider-extreme dj-slider-max">{{ props.max }}</span>
    </div>
</template>