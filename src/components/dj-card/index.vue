<script setup lang="ts">
// plugin
import "./index.less";
import { useSlots } from 'vue'
import { DJCardOptions, DJCardProps, useCard } from './useCard'

// script
defineOptions(DJCardOptions)
const props = defineProps(DJCardProps)
const { isHeader, isFooter } = useCard(props, useSlots());
</script>

<template>
    <div class="dj-card">
        <div class="dj-card__wrapper" :class="[align]">
            <div v-if="isHeader" class="dj-card-header">
                <slot name="header">
                    {{ title }}
                </slot>
            </div>
            <div class="dj-card-body">
                <slot />
            </div>
            <div v-if="isFooter" class="dj-card-footer">
                <slot name="footer">
                    {{ footer }}
                </slot>
            </div>
        </div>
    </div>
</template>