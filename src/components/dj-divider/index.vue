<script setup lang="ts">
// plugin
import "./index.less";
import { useSlots } from 'vue'
import { DJDividerOptions, DJDividerProps, useDivider } from './useDivider'

// script
defineOptions(DJDividerOptions)
const props = defineProps(DJDividerProps)
const { DJDivider_Style, DJDivider_Type, isDefault } = useDivider(props, useSlots());
</script>

<template>
    <div class="dj-divider">
        <div class="dj-divider__wrapper" :class="[DJDivider_Type, align]" :style="DJDivider_Style">
            <span v-if="label" class="dj-divider-label">
                <slot v-if="isDefault" />
                <template v-else>
                    {{ label }}
                </template>
            </span>
        </div>
    </div>
</template>