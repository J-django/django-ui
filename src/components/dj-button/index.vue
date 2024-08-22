<script lang="ts" setup>
// plugin
import "./index.less";
import { DJButtonOptions, DJButtonProps, useDJButton } from './useButton'

// script
defineOptions(DJButtonOptions)

const props = defineProps(DJButtonProps)

const { DJButton_Style } = useDJButton(props);
</script>

<template>
    <button class="dj-button" :class="[plain ? 'is-plain' : '']" :style="DJButton_Style">
        <span class="jy-button__inner">
            <slot>
                {{ label }}
            </slot>
        </span>
    </button>
</template>