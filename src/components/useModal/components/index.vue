<!-- Modal.vue -->
<template>
    <Transition name="dialog" @after-leave="handleAfterLeave">
        <div v-if="visible"
            class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.25)] flex items-center justify-center z-999"
            @click.self="close">
            <div class="p-4 w-85 bg-#ffffff rounded-2.5 box-border">
                <slot name="header" :title="title"></slot>
                <slot name="body" :content="content"></slot>
                <slot name="footer"></slot>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface ModalProps {
    title: string;
    content: string | object;
    visible: boolean;
}

defineProps<ModalProps>();
const emit = defineEmits<{ (e: 'update:visible', value: boolean): void; (e: 'close'): void }>();

function close() {
    emit('update:visible', false);
}

// 监听过渡动画结束后触发的回调
function handleAfterLeave() {
    emit('close');
}
</script>

<style scoped>
/* 样式保持不变 */
.dialog-enter-active,
.dialog-leave-active {
    transition: opacity 350ms;
}

.dialog-enter-from,
.dialog-leave-to {
    opacity: 0;
}
</style>