// useModal.ts
import { createApp, h, ref, App, VNode } from 'vue';
import Modal from "./components/index.vue";

interface ModalOptions {
    title?: string;
    content?: string | object;
    onClose?: () => void;
    slots?: {
        header?: () => VNode;
        body?: () => VNode;
        footer?: () => VNode;
    };
}

interface UseModalReturn {
    openModal: (options: ModalOptions) => Promise<void>;
    closeModal: () => Promise<void>;
}

export function useModal(): UseModalReturn {
    const modalVisible = ref(false);
    let modalApp: App<Element> | null = null;
    let isClosing = false; // 添加关闭锁标记

    async function openModal(options: ModalOptions = {}) {
        // 如果正在关闭，则等待关闭完成后再打开
        if (isClosing) await closeModal();

        modalVisible.value = true;

        if (!modalApp) {
            modalApp = createApp({
                render() {
                    return h(
                        Modal,
                        {
                            title: options.title || 'Default Title',
                            content: options.content || 'Default Content',
                            visible: modalVisible.value,
                            'onUpdate:visible': (value: boolean) => {
                                modalVisible.value = value;
                            },
                            onClose: () => {
                                options.onClose?.();
                                closeModal(); // 关闭动画完成后卸载
                            },
                        },
                        {
                            header: options.slots?.header,
                            body: options.slots?.body,
                            footer: options.slots?.footer,
                        }
                    );
                },
            });

            const container = document.createElement('div');
            document.body.appendChild(container);
            modalApp.mount(container);
        }
    }

    async function closeModal() {
        if (!modalApp || isClosing) return;
        isClosing = true; // 标记为正在关闭

        modalVisible.value = false; // 触发关闭动画

        return new Promise<void>((resolve) => {
            const modalContainer = modalApp?._container as HTMLElement;
            modalContainer.addEventListener(
                'transitionend',
                () => {
                    modalApp?.unmount();
                    modalApp = null;
                    isClosing = false; // 动画结束后重置标记
                    resolve();
                },
                { once: true }
            );
        });
    }

    return {
        openModal,
        closeModal,
    };
}