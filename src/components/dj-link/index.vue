<script setup lang="ts">
// plugin
import "./index.less";
import { DJLinkOptions, DJLinkProps, DJLinkEmits, useLink } from './useLink'

// script
defineOptions(DJLinkOptions)
const props = defineProps(DJLinkProps);
const emits = defineEmits<DJLinkEmits>();

const { DJLink_Class, DJLink_Style, DJLink_ClickChange } = useLink(props, emits);
</script>

<template>
    <a :href="href" :target="target" class="dj-link" :class="DJLink_Class" :style="DJLink_Style"
        @click="DJLink_ClickChange">
        <span class="dj-link__wrapper">
            <slot name="default">
                {{ label }}
            </slot>
        </span>
    </a>
</template>