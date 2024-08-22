<script lang="ts" setup>
// plugin
import "./index.less";
import { useSlots } from 'vue'
import { DJDialogOptions, DJDialogProps, DJDialogEmits, useDialog } from './useDialog'

// script
defineOptions(DJDialogOptions)
const props = defineProps(DJDialogProps)
const emits = defineEmits<DJDialogEmits>();
const { DJDialogRef, open, closed, confirm, toggle, DJDialog_MousedownChange } = useDialog(props, emits, useSlots());

defineExpose({ open, closed, confirm, toggle })
</script>

<template>
    <Teleport to="body" :disabled="!appendBody">
        <Transition name="dialog">
            <template v-if="closeDestroy">
                <div class="dj-dialog" ref="DJDialogRef" v-if="modelValue" @mousedown="DJDialog_MousedownChange">
                    <div class="dj-dialog__wrapper"
                        :style="{ width: width, minWidth: minWidth, maxWidth: maxWidth, '--dj-dialog-custom-top': top }"
                        :class="[verticalCenter ? 'vertical-center' : '', overspread ? 'is-overspread' : '']">
                        <div class="dj-dialog__inner">
                            <header class="dj-dialog-header" v-if="showHeader">
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
                            <footer class="dj-dialog-footer" v-if="showFooter">
                                <slot name="footer">
                                    <div class="dj-dialog-footer__button">
                                        <dj-button class="dj-dialog-button dialog-cancel" plain @click="closed">
                                            Closed
                                        </dj-button>
                                        <dj-button class="dj-dialog-button dialog-confirm" color="#0d6efd"
                                            @click="confirm">
                                            Confirm
                                        </dj-button>
                                    </div>
                                </slot>
                            </footer>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="dj-dialog" ref="DJDialogRef" v-show="modelValue" @mousedown="DJDialog_MousedownChange">
                    <div class="dj-dialog__wrapper"
                        :style="{ width: width, minWidth: minWidth, maxWidth: maxWidth, '--dj-dialog-custom-top': top }"
                        :class="[verticalCenter ? 'vertical-center' : '', overspread ? 'is-overspread' : '']">
                        <div class="dj-dialog__inner">
                            <header class="dj-dialog-header" v-if="showHeader">
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
                            <footer class="dj-dialog-footer" v-if="showFooter">
                                <slot name="footer">
                                    <div class="dj-dialog-footer__button">
                                        <dj-button class="dj-dialog-button dialog-cancel" plain @click="closed">
                                            Closed
                                        </dj-button>
                                        <dj-button class="dj-dialog-button dialog-confirm" color="#0d6efd"
                                            @click="confirm">
                                            Confirm
                                        </dj-button>
                                    </div>
                                </slot>
                            </footer>
                        </div>
                    </div>
                </div>
            </template>
        </Transition>
    </Teleport>
</template>