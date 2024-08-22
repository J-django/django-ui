<script lang="ts" setup>
// plugin
import "./index.less";
import { SegmentedDataType, DJSegmentedOptions, DJSegmentedProps, useSegmented } from './useSegmented'

// script
defineOptions(DJSegmentedOptions)
const props = defineProps(DJSegmentedProps)
const emits = defineEmits(['update:modelValue', 'change'])
const { segmentedInnerRef, segmentedConfig, isObject, isDisabled, segmentedToggle } = useSegmented(props, emits);
</script>

<template>
    <div class="dj-segmented">
        <div class="dj-segmented__wrapper" :class="[disabled ? 'is-disabled' : '']">
            <div class="dj-segmented__inner" ref="segmentedInnerRef" :aria-disabled="disabled">
                <div class="dj-segmented-indicator" :style="{
            '--dj-segmented-indicator-width': segmentedConfig.indicatorWidth,
            '--dj-segmented-indicator-height': segmentedConfig.indicatorHeight,
            'transform': `translate(${segmentedConfig.indicatorTranslateX},${segmentedConfig.indicatorTranslateY})`
        }"></div>
                <div class="dj-segmented__option" v-for="(item, index) of data" :key="index"
                    :data-active="isObject(item) ? modelValue == (item as SegmentedDataType).value : modelValue == item"
                    :class="[(isObject(item) && isDisabled(item as SegmentedDataType)) ? 'is-disabled' : '']"
                    @click=" segmentedToggle(item)">
                    <span class="dj-segmented__option-label">
                        {{ isObject(item) ? (item as SegmentedDataType)?.label : item }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>