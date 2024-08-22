<script lang="ts" setup>
// plugin
import "./index.less"
import DJOverlay from '../modules/dj-overlay/index.vue'

// script
defineOptions({
    name: "dj-image-viwer"
})

defineProps({
    appendBody: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(["update:modelValue"])

const DJOverlay_OutsideChange = () => {
    emits("update:modelValue", false)
}
</script>

<template>
    <DJOverlay :visible="modelValue" :appendBody="appendBody" @outside="DJOverlay_OutsideChange">
        <div class="dj-image-viwer">
            <div class="dj-image-viwer-toolbox">
                <button class="dj-image-viwer-toolbox-operate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0M7.5 11h7M11 7.5v7"
                            color="currentColor" />
                    </svg>
                </button>
                <button class="dj-image-viwer-toolbox-operate"></button>
            </div>
        </div>
    </DJOverlay>
</template>