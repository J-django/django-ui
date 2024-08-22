import type { PropType } from 'vue'
import { ref, watch, computed, useSlots, onMounted, onUnmounted } from 'vue'
import { useDom, useTime } from "@/hooks"

export interface DJDialogPropsType {
    title: string;
    width: string;
    minWidth: string;
    maxWidth: string;
    top: string;
    showHeader: boolean;
    showFooter: boolean;
    appendBody: boolean;
    escape: boolean;
    dialogExternal: boolean;
    verticalCenter: boolean;
    overspread: boolean;
    closeDestroy: boolean;
    modelValue: boolean;
}

export const DJDialogOptions = {
    name: "dj-dialog"
};

export const DJDialogProps = {
    title: {
        type: String as PropType<string>,
        default: ""
    },
    width: {
        type: String as PropType<string>,
        default: ""
    },
    minWidth: {
        type: String as PropType<string>,
        default: ""
    },
    maxWidth: {
        type: String as PropType<string>,
        default: "500px"
    },
    top: {
        type: String as PropType<string>,
        default: ""
    },
    showHeader: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    showFooter: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    appendBody: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    escape: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
    dialogExternal: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    verticalCenter: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    overspread: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    closeDestroy: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    modelValue: {
        type: Boolean as PropType<boolean>,
        default: false
    },
};

export type DJDialogEmits = {
    (e: 'update:modelValue', value: boolean): void,
    (e: 'change', value: boolean): void,
    (e: 'cancel'): void,
    (e: 'confirm'): void,
}

export const useDialog = (props: DJDialogPropsType, emits: DJDialogEmits, slots: ReturnType<typeof useSlots>) => {
    const { debounce } = useTime();
    const { ScrollbarWidth } = useDom();

    const DJDialogRef = ref();

    const isFooter = computed(() => !!slots.footer);

    watch(() => props.modelValue, (val: Boolean) => {
        if (val) {
            addBodyStyle();
        } else {
            removeBodyStyle();
        }
    })

    /**
     * 添加body样式
     */
    const addBodyStyle = () => {
        document.body.classList.add("dialog-open");
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = ScrollbarWidth() + "px";
    }

    /**
     * 移除body样式
     */
    const removeBodyStyle = debounce(() => {
        document.body.classList.remove("dialog-open");
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }, 350);

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
        emits("cancel")
    }

    const confirm = () => {
        emits("confirm")
    }

    /**
     * 切换
     */
    const toggle = () => {
        emits("update:modelValue", !props.modelValue);
    }

    /**
     * dialog键盘按下事件
     * @param event 
     */
    const DJDialog_KeydownChange = (event: KeyboardEvent) => {
        if (event.keyCode == 27) {
            closed();
        }
    }

    /**
     * dialog鼠标按下事件
     * @param event 
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

    return {
        DJDialogRef,
        isFooter,
        addBodyStyle,
        removeBodyStyle,
        open,
        closed,
        confirm,
        toggle,
        DJDialog_KeydownChange,
        DJDialog_MousedownChange,
        createEscape,
        destroyEscape
    }
}