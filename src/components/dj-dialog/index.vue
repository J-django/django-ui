<script lang="ts" setup name="dj-dialog">
// plugin
import "./index.less";
import { ref, computed, useSlots, onMounted, onUnmounted } from 'vue'

// script
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    top: {
        type: String,
        default: ""
    },
    appendBody: {
        type: Boolean,
        default: false
    },
    escape: {
        type: Boolean,
        default: true,
    },
    dialogExternal: {
        type: Boolean,
        default: true
    },
    verticalCenter: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Boolean,
        default: false
    },
})

const emits = defineEmits(["update:modelValue", "change"]);

const slots = useSlots();

const DJDialogRef = ref();

const isFooter = computed(() => slots.footer);

/**
 * 打开dialog
 */
const open = () => {
    emits("update:modelValue", true);
}

/**
 * 关闭dialog
 */
const closed = () => {
    emits("update:modelValue", false);
}

/**
 * 切换
 */
const toggle = () => {
    emits("update:modelValue", !props.modelValue);
}

/**
 * dialog键盘按下事件
 * @param event KeyboardEvent
 */
const DJDialog_KeydownChange = (event: KeyboardEvent) => {
    if (event.keyCode == 27) {
        closed();
    }
}

/**
 * dialog鼠标按下事件
 * @param event MouseEvent
 */
const DJDialog_MousedownChange = (event: MouseEvent) => {
    if (event.target == DJDialogRef.value && props.dialogExternal) {
        closed();
    }
}

/**
 * ESC创建
 */
const createEscape = () => {
    if (props.escape) {
        window.addEventListener("keydown", DJDialog_KeydownChange);
    }
}

/**
 * ESC销毁
 */
const destroyEscape = () => {
    if (props.escape) {
        window.removeEventListener("keydown", DJDialog_KeydownChange);
    }
}

onMounted(() => {
    createEscape();
})

onUnmounted(() => {
    destroyEscape();
})

defineExpose({ open, closed, toggle })
</script>

<template>
    <Teleport to="body" :disabled="!appendBody">
        <Transition name="dialog">
            <div class="dj-dialog" ref="DJDialogRef" v-show="modelValue" @mousedown="DJDialog_MousedownChange">
                <div class="dj-dialog-dialog" :style="{ '--dj-dialog-custom-top': top }"
                    :class="[verticalCenter ? 'vertical-center' : '']">
                    <div class="dj-dialog-content">
                        <header class="dj-dialog-header">
                            <slot name="header">
                                <div class="dj-dialog-header__wrapper">
                                    <span class="dj-dialog-header-title">
                                        <slot name="title">
                                            {{ title }}
                                        </slot>
                                    </span>
                                    <button class="dj-dialog-header-closed" @click="closed">
                                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </slot>
                        </header>
                        <main class="dj-dialog-body">
                            <slot></slot>
                        </main>
                        <footer class="dj-dialog-footer" v-if="isFooter">
                            <slot name="footer"></slot>
                        </footer>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>