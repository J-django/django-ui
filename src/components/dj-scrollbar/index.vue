<script lang="ts" setup>
// plugin
import "./index.less";
import { DJScrollbarOptions, DJScrollbarProps, DJScrollbarEmits, useScrollbar } from './useScrollbar'

// script
defineOptions(DJScrollbarOptions)
const props = defineProps(DJScrollbarProps)
const emits = defineEmits<DJScrollbarEmits>()
const {
    DJScrollbar_WrapperRef,
    DJScrollbar_InnerRef,
    DJScrollbar_VerticalRef,
    DJScrollbar_HorizontalRef,
    DJScrollbar_VerticalThumbRef,
    DJScrollbar_HorizontalThumbRef,
    DJScrollbar_VerticalConfig,
    DJScrollbar_HorizontalConfig,
    DJScrollbar_Style,
    DJScrollbar_VeticalThumbStyle,
    DJScrollbar_HorizontalThumbStyle,
    DJScrollbar_VerticalClass,
    DJScrollbar_HorizontalClass,
    DJScrollbar_MouseenterChange,
    DJScrollbar_MouseleaveChange,
    DJScrollbar_ScrollChange,
    DJScrollbar_VeticalMouseenterChange,
    DJScrollbar_VeticalMouseleaveChange,
    DJScrollbar_VerticalMousedownChange,
    DJScrollbar_VeticalThumbMousedownChange,
    DJScrollbar_HorizontalMouseenterChange,
    DJScrollbar_HorizontalMouseleaveChange,
    DJScrollbar_HorizontalMousedownChange,
    DJScrollbar_HorizontalThumbMousedownChange,
    scrollTo
} = useScrollbar(props, emits);

/**
 * 暴露方法
 */
defineExpose({
    scrollTo
})
</script>

<template>
    <div class="dj-scrollbar" @mouseenter="DJScrollbar_MouseenterChange" @mouseleave="DJScrollbar_MouseleaveChange">
        <div class="dj-scrollbar__wrapper" :style="DJScrollbar_Style" ref="DJScrollbar_WrapperRef"
            @scroll="DJScrollbar_ScrollChange">
            <div class="dj-scrollbar__inner" ref="DJScrollbar_InnerRef">
                <slot></slot>
            </div>
        </div>
        <div v-show="DJScrollbar_VerticalConfig.show" class="dj-scrollbar__vertical" ref="DJScrollbar_VerticalRef"
            :class="[DJScrollbar_VerticalClass]" @mouseenter="DJScrollbar_VeticalMouseenterChange"
            @mouseleave="DJScrollbar_VeticalMouseleaveChange" @mousedown="DJScrollbar_VerticalMousedownChange">
            <div class="dj-scrollbar__vertical-thumb" ref="DJScrollbar_VerticalThumbRef"
                :style="DJScrollbar_VeticalThumbStyle" @mousedown="DJScrollbar_VeticalThumbMousedownChange">
            </div>
        </div>
        <div v-show="DJScrollbar_HorizontalConfig.show" class="dj-scrollbar__horizontal" ref="DJScrollbar_HorizontalRef"
            :class="[DJScrollbar_HorizontalClass]" @mouseenter="DJScrollbar_HorizontalMouseenterChange"
            @mouseleave="DJScrollbar_HorizontalMouseleaveChange" @mousedown="DJScrollbar_HorizontalMousedownChange">
            <div class="dj-scrollbar__horizontal-thumb" ref="DJScrollbar_HorizontalThumbRef"
                :style="DJScrollbar_HorizontalThumbStyle" @mousedown="DJScrollbar_HorizontalThumbMousedownChange">
            </div>
        </div>
    </div>
</template>