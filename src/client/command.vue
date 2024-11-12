<script setup lang="ts">
import { useModal } from '@/components/useModal'
import { h, ref } from 'vue';

const username = ref("");
const { openModal, closeModal } = useModal();

function open() {
    openModal({
        title: 'Custom Title',
        content: username.value,
        slots: {
            header: () => h('h2', username.value),
            footer: () => h('button', { onClick: closeModal }, 'Close'),
        },
    });
}
</script>

<template>
    <div class="space-y-3 pb-3 w-full border-b border-b-solid border-b-#eeeeee">
        <dj-button @click="open">测试</dj-button>
        <dj-input v-model="username" />
    </div>
</template>