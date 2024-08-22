import type { PropType, StyleValue } from 'vue'
import { ref, unref, reactive, computed, onMounted } from 'vue'

export interface DJScrollbarPropsType {
    width: string;
    height: string;
    maxHeight: string;
    verticalMinHeight: number;
    horizontalMinWidth: number;
}

export interface ScrollEvent {
    scrollTop: number;
    scrollLeft: number;
    target: HTMLElement
}

export const DJScrollbarOptions = {
    name: "dj-scrollbar"
};

export const DJScrollbarProps = {
    width: {
        type: String as PropType<string>,
        default: ""
    },
    height: {
        type: String as PropType<string>,
        default: ""
    },
    maxHeight: {
        type: String as PropType<string>,
        default: ""
    },
    verticalMinHeight: {
        type: Number as PropType<number>,
        default: 30
    },
    horizontalMinWidth: {
        type: Number as PropType<number>,
        default: 30,
    }
};

export type DJScrollbarEmits = {
    (e: 'scroll', value: ScrollEvent): void
}

export const useScrollbar = (props: DJScrollbarPropsType, emits: DJScrollbarEmits) => {
    const DJScrollbar_VerticalHiddenTimeoutRef = ref();
    const DJScrollbar_HorizontalHiddenTimeoutRef = ref();
    const DJScrollbar_VerticalExpandTimeoutRef = ref();
    const DJScrollbar_HorizontalExpandTimeoutRef = ref();

    const DJScrollbar_WrapperRef = ref();
    const DJScrollbar_InnerRef = ref();
    const DJScrollbar_VerticalRef = ref();
    const DJScrollbar_HorizontalRef = ref();
    const DJScrollbar_VerticalThumbRef = ref();
    const DJScrollbar_HorizontalThumbRef = ref();


    const DJScrollbar_Config = reactive({
        lastScrollTop: 0,
        lastScrollLeft: 0
    })

    const DJScrollbar_VerticalConfig = reactive({
        hidden: true,
        show: true,
        expand: false,
        drag: false,
        startY: 0,
        startTop: 0,
        height: 0,
        tranlateY: 0,
    })

    const DJScrollbar_HorizontalConfig = reactive({
        hidden: true,
        show: true,
        expand: false,
        drag: false,
        startX: 0,
        startLeft: 0,
        width: 0,
        tranlateX: 0,
    })

    const DJScrollbar_Style = computed(() => {
        return {
            width: props.width,
            height: props.height,
            maxHeight: props.maxHeight,
        } as StyleValue;
    })

    /**
     * 垂直滚动条样式
     */
    const DJScrollbar_VerticalClass = computed(() => {
        return [
            DJScrollbar_VerticalConfig.hidden ? 'is-hidden' : '',
            DJScrollbar_VerticalConfig.expand ? 'is-expand' : '',
            DJScrollbar_VerticalConfig.drag ? 'is-drag' : ''
        ]
    })

    /**
     * 横向滚动条样式
     */
    const DJScrollbar_HorizontalClass = computed(() => {
        return [
            DJScrollbar_HorizontalConfig.expand ? 'is-expand' : '',
            DJScrollbar_HorizontalConfig.hidden ? 'is-hidden' : '',
            DJScrollbar_HorizontalConfig.drag ? 'is-drag' : ''
        ]
    })

    /**
     * 垂直滚动条拇指样式
     */
    const DJScrollbar_VeticalThumbStyle = computed(() => {
        return {
            height: `${DJScrollbar_VerticalConfig.height}px`,
            transform: `translateY(${DJScrollbar_VerticalConfig.tranlateY}px)`
        } as StyleValue
    })

    /**
     * 横向滚动条拇指样式
     */
    const DJScrollbar_HorizontalThumbStyle = computed(() => {
        return {
            width: `${DJScrollbar_HorizontalConfig.width}px`,
            transform: `translateX(${DJScrollbar_HorizontalConfig.tranlateX}px)`
        } as StyleValue
    })

    /**
     * 重置垂直滚动条隐藏样式
     */
    const resetVerticalExpand = () => {
        const element = unref(DJScrollbar_VerticalExpandTimeoutRef);
        if (element) {
            clearTimeout(element)
        }
        DJScrollbar_VerticalExpandTimeoutRef.value = setTimeout(() => {
            DJScrollbar_VerticalConfig.expand = false;
        }, 1500);
    }

    /**
     * 重置横向滚动条隐藏样式
     */
    const resetHorizontalExpand = () => {
        const element = unref(DJScrollbar_HorizontalExpandTimeoutRef);
        if (element) {
            clearTimeout(element)
        }
        DJScrollbar_HorizontalExpandTimeoutRef.value = setTimeout(() => {
            DJScrollbar_HorizontalConfig.expand = false;
        }, 1500);
    }

    /**
     * 重置垂直滚动条隐藏样式
     */
    const resetVerticalHidden = () => {
        const element = unref(DJScrollbar_VerticalHiddenTimeoutRef);
        if (element) {
            clearTimeout(element)
        }
        DJScrollbar_VerticalHiddenTimeoutRef.value = setTimeout(() => {
            DJScrollbar_VerticalConfig.hidden = true;
        }, 1500);
    }

    /**
     * 重置横向滚动条隐藏样式
     */
    const resetHorizontalHidden = () => {
        const element = unref(DJScrollbar_HorizontalHiddenTimeoutRef);
        if (element) {
            clearTimeout(element)
        }
        DJScrollbar_HorizontalHiddenTimeoutRef.value = setTimeout(() => {
            DJScrollbar_HorizontalConfig.hidden = true;
        }, 1500);
    }

    /**
     * 鼠标按下垂直滚动条平滑滚动至目标位置
     * @param targetScrollTop 位置
     */
    const verticalSmoothScrollTo = (targetScrollTop: number) => {
        const wrapper = unref(DJScrollbar_WrapperRef);
        const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
        const startScrollTop = wrapper.scrollTop;
        const duration = 300;
        const startTime = performance.now();

        function scrollAnimation(currentTime: any) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easing = progress * (2 - progress);

            const newScrollTop = startScrollTop + (targetScrollTop - startScrollTop) * easing;
            wrapper.scrollTop = Math.min(Math.max(newScrollTop, 0), scrollHeight);

            DJScrollbar_VerticalThumbInit();

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        requestAnimationFrame(scrollAnimation);
    }

    /**
     * 鼠标按下横向滚动条平滑滚动至目标位置
     * @param targetScrollLeft 位置
     */
    const HorizontalSmoothScrollTo = (targetScrollLeft: number) => {
        const wrapper = unref(DJScrollbar_WrapperRef);
        const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
        const startScrollLeft = wrapper.scrollLeft;
        const duration = 300;
        const startTime = performance.now();

        function scrollAnimation(currentTime: any) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easing = progress * (2 - progress);

            const newScrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easing;
            wrapper.scrollLeft = Math.min(Math.max(newScrollLeft, 0), scrollWidth);

            DJScrollbar_HorizontalThumbInit();

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }

    /**
     * 垂直滚动条初始样式加载
     */
    const DJScrollbar_VerticalThumbInit = () => {
        const wrapper = unref(DJScrollbar_WrapperRef);
        const vertical = unref(DJScrollbar_VerticalRef);

        const verticalStyle = window.getComputedStyle(vertical);
        const contentHeight = wrapper.scrollHeight;
        const wrapperHeight = wrapper.clientHeight;

        if (contentHeight === wrapperHeight) {
            DJScrollbar_VerticalConfig.show = false;
            return;
        }
        DJScrollbar_VerticalConfig.show = true;
        setTimeout(() => {
            const paddingTop = parseFloat(verticalStyle.paddingTop);
            const paddingBottom = parseFloat(verticalStyle.paddingBottom);

            const scrollbarHeight = vertical.clientHeight - paddingTop - paddingBottom;
            const thumbHeight = Math.max((wrapperHeight / contentHeight) * scrollbarHeight, props.verticalMinHeight);
            const thumbTop = (wrapper.scrollTop / contentHeight) * scrollbarHeight;

            DJScrollbar_VerticalConfig.height = thumbHeight;
            DJScrollbar_VerticalConfig.tranlateY = thumbTop;
        }, 0);
    }

    /**
     * 横向滚动条初始样式加载
     */
    const DJScrollbar_HorizontalThumbInit = () => {
        const wrapper = unref(DJScrollbar_WrapperRef);
        const horizontal = unref(DJScrollbar_HorizontalRef);

        const horizontalStyle = window.getComputedStyle(horizontal);
        const wrapperWidth = wrapper.clientWidth;
        const contentWidth = wrapper.scrollWidth;

        if (contentWidth === wrapperWidth) {
            DJScrollbar_HorizontalConfig.show = false;
            return;
        }
        DJScrollbar_HorizontalConfig.show = true;

        setTimeout(() => {
            const paddingLeft = parseFloat(horizontalStyle.paddingLeft);
            const paddingRight = parseFloat(horizontalStyle.paddingRight);

            const scrollbarWidth = horizontal.clientWidth - paddingLeft - paddingRight;

            const thumbWidth = Math.max((wrapperWidth / contentWidth) * scrollbarWidth, props.horizontalMinWidth);
            const thumbLeft = (wrapper.scrollLeft / contentWidth) * scrollbarWidth;

            DJScrollbar_HorizontalConfig.width = thumbWidth;
            DJScrollbar_HorizontalConfig.tranlateX = thumbLeft;
        }, 0);
    }

    /**
     * 鼠标移入最外层触发
     */
    const DJScrollbar_MouseenterChange = () => {
        DJScrollbar_VerticalConfig.hidden = false;
        DJScrollbar_HorizontalConfig.hidden = false;
        clearTimeout(unref(DJScrollbar_VerticalHiddenTimeoutRef))
        clearTimeout(unref(DJScrollbar_HorizontalHiddenTimeoutRef))
    }

    /**
     * 鼠标移开最外层触发
     */
    const DJScrollbar_MouseleaveChange = () => {
        resetVerticalHidden();
        resetHorizontalHidden();
    }

    /**
     * 移入垂直滚动条触发
     */
    const DJScrollbar_VeticalMouseenterChange = () => {
        DJScrollbar_VerticalConfig.expand = true;
        clearTimeout(unref(DJScrollbar_VerticalHiddenTimeoutRef));
        clearTimeout(unref(DJScrollbar_VerticalExpandTimeoutRef));
    }

    /**
     * 移出垂直滚动条触发
     */
    const DJScrollbar_VeticalMouseleaveChange = () => {
        resetVerticalHidden();
        resetVerticalExpand();
    }

    /**
     * 按下垂直滚动条触发
     */
    const DJScrollbar_VerticalMousedownChange = (event: MouseEvent) => {
        const verticalthumb = unref(DJScrollbar_VerticalThumbRef);
        if (event.target === verticalthumb) return;

        const wrapper = unref(DJScrollbar_WrapperRef);
        const vertical = unref(DJScrollbar_VerticalRef);
        const verticalRect = vertical.getBoundingClientRect();

        const mouseY = event.clientY - verticalRect.top;
        const scrollbarCenter = verticalthumb.clientHeight / 2;
        const targetScrollbarTop = mouseY - scrollbarCenter;

        const scrollbarHeight = vertical.clientHeight - verticalthumb.clientHeight;
        const targetScrollTop = (targetScrollbarTop / scrollbarHeight) * (wrapper.scrollHeight - wrapper.clientHeight);
        verticalSmoothScrollTo(targetScrollTop);
    }

    /**
     * 鼠标按下垂直滚动条拇指触发
     */
    const DJScrollbar_VeticalThumbMousedownChange = (event: MouseEvent) => {
        DJScrollbar_VerticalConfig.drag = true;
        const wrapper = unref(DJScrollbar_WrapperRef)
        DJScrollbar_VerticalConfig.startY = event.clientY;
        DJScrollbar_VerticalConfig.startTop = wrapper.scrollTop;
        document.body.style.webkitUserSelect = "none";
        document.body.style.userSelect = "none";
        document.body.style.cursor = "default";

        document.addEventListener('mousemove', DJScrollbar_VerticalThumbMousemoveChange);
        document.addEventListener('mouseup', DJScrollbar_VerticalThumbMouseupChange);
    }

    /**
     * 鼠标移动垂直滚动条拇指触发
     */
    const DJScrollbar_VerticalThumbMousemoveChange = (event: MouseEvent) => {
        if (DJScrollbar_VerticalConfig.drag) {
            const wrapper = unref(DJScrollbar_WrapperRef)
            const vertical = unref(DJScrollbar_VerticalRef)
            const verticalThumb = unref(DJScrollbar_VerticalThumbRef)

            const deltaY = event.clientY - DJScrollbar_VerticalConfig.startY;
            const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;

            const scrollbarMaxTop = vertical.clientHeight - verticalThumb.clientHeight;
            const newScrollTop = DJScrollbar_VerticalConfig.startTop + (deltaY / scrollbarMaxTop) * scrollHeight;
            const scrollTop = Math.min(Math.max(newScrollTop, 0), scrollHeight);
            wrapper.scrollTop = scrollTop;

            DJScrollbar_VerticalThumbInit();
        }
    }

    /**
     * 鼠标抬起垂直滚动条拇指触发
     */
    const DJScrollbar_VerticalThumbMouseupChange = () => {
        DJScrollbar_VerticalConfig.drag = false;
        document.body.style.webkitUserSelect = "";
        document.body.style.userSelect = "";
        document.body.style.cursor = "";

        document.removeEventListener('mousemove', DJScrollbar_VerticalThumbMousemoveChange);
        document.removeEventListener('mouseup', DJScrollbar_VerticalThumbMouseupChange);
    }

    /**
     * 移入横向滚动条触发
     */
    const DJScrollbar_HorizontalMouseenterChange = () => {
        DJScrollbar_HorizontalConfig.expand = true;
        clearTimeout(unref(DJScrollbar_HorizontalHiddenTimeoutRef));
        clearTimeout(unref(DJScrollbar_HorizontalExpandTimeoutRef));
    }

    /**
     * 移出横向滚动条触发
     */
    const DJScrollbar_HorizontalMouseleaveChange = () => {
        resetHorizontalHidden();
        resetHorizontalExpand();
    }

    /**
     * 按下横向滚动条触发
     */
    const DJScrollbar_HorizontalMousedownChange = (event: MouseEvent) => {
        const horizontalThumb = unref(DJScrollbar_HorizontalThumbRef)
        if (event.target === horizontalThumb) return;

        const wrapper = unref(DJScrollbar_WrapperRef);
        const horizontal = unref(DJScrollbar_HorizontalRef)

        const containerRect = horizontal.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const scrollbarCenter = horizontalThumb.clientWidth / 2;
        const targetScrollbarLeft = mouseX - scrollbarCenter;

        const scrollbarWidth = horizontal.clientWidth - horizontalThumb.clientWidth;
        const targetScrollLeft = (targetScrollbarLeft / scrollbarWidth) * (wrapper.scrollWidth - wrapper.clientWidth);

        HorizontalSmoothScrollTo(targetScrollLeft);
    }

    /**
     * 鼠标按下横向滚动条拇指触发
     */
    const DJScrollbar_HorizontalThumbMousedownChange = (event: MouseEvent) => {
        DJScrollbar_HorizontalConfig.drag = true;

        const wrapper = unref(DJScrollbar_WrapperRef)
        DJScrollbar_HorizontalConfig.startX = event.clientX;
        DJScrollbar_HorizontalConfig.startLeft = wrapper.scrollLeft;

        document.body.style.webkitUserSelect = "none";
        document.body.style.userSelect = "none";
        document.body.style.cursor = "default";

        document.addEventListener("mousemove", DJScrollbar_HorizontalThumbMousemoveChange)
        document.addEventListener("mouseup", DJScrollbar_HorizontalThumbMouseupChange)
    }

    /**
     * 鼠标移动垂直滚动条拇指触发
     */
    const DJScrollbar_HorizontalThumbMousemoveChange = (event: MouseEvent) => {
        if (DJScrollbar_HorizontalConfig.drag) {
            const wrapper = unref(DJScrollbar_WrapperRef)
            const horizontal = unref(DJScrollbar_HorizontalRef)
            const horizontalThumb = unref(DJScrollbar_HorizontalThumbRef)

            const deltaX = event.clientX - DJScrollbar_HorizontalConfig.startX;
            const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;

            const scrollbarMaxLeft = horizontal.clientWidth - horizontalThumb.clientWidth;
            const newScrollLeft = DJScrollbar_HorizontalConfig.startLeft + (deltaX / scrollbarMaxLeft) * scrollWidth;
            const scrollLeft = Math.min(Math.max(newScrollLeft, 0), scrollWidth);
            wrapper.scrollLeft = scrollLeft;

            DJScrollbar_HorizontalThumbInit();
        }
    }

    /**
     * 鼠标抬起横向滚动条拇指触发
     */
    const DJScrollbar_HorizontalThumbMouseupChange = () => {
        DJScrollbar_HorizontalConfig.drag = false;

        document.body.style.webkitUserSelect = "";
        document.body.style.userSelect = "";
        document.body.style.cursor = "";

        document.removeEventListener("mousemove", DJScrollbar_HorizontalThumbMousemoveChange)
        document.removeEventListener("mouseup", DJScrollbar_HorizontalThumbMouseupChange)
    }

    /**
     * 滚动事件
     */
    const DJScrollbar_ScrollChange = () => {
        const wrapper = unref(DJScrollbar_WrapperRef)
        const currentScrollTop = wrapper.scrollTop;
        const currentScrollLeft = wrapper.scrollLeft;
        const deltaY = Math.abs(currentScrollTop - DJScrollbar_Config.lastScrollTop);
        const deltaX = Math.abs(currentScrollLeft - DJScrollbar_Config.lastScrollLeft);

        if (deltaY > deltaX) {
            DJScrollbar_VerticalThumbInit();
            DJScrollbar_VerticalConfig.hidden = false;
            resetVerticalHidden();
        } else if (deltaX > deltaY) {
            DJScrollbar_HorizontalThumbInit();
            DJScrollbar_HorizontalConfig.hidden = false;
            resetHorizontalHidden();
        }

        emits("scroll", {
            scrollTop: currentScrollTop,
            scrollLeft: currentScrollLeft,
            target: wrapper
        })

        DJScrollbar_Config.lastScrollTop = currentScrollTop;
        DJScrollbar_Config.lastScrollLeft = currentScrollLeft;
    }

    /**
     * 滚动至指定坐标
     * @param x 横向偏移量
     * @param y 垂直偏移量
     */
    const scrollTo = (x: number, y: number) => {
        HorizontalSmoothScrollTo(x);
        verticalSmoothScrollTo(y);
    }

    /**
     * 滚动框内元素发生改变触发更新滚动条
     */
    const MutationObserverLoaded = () => {
        new MutationObserver(() => {
            DJScrollbar_VerticalThumbInit();
            DJScrollbar_HorizontalThumbInit();
        }).observe(unref(DJScrollbar_InnerRef), {
            childList: true,
            subtree: true
        });
    }

    /**
     * 初次加载滚动条样式
     */
    onMounted(() => {
        DJScrollbar_VerticalThumbInit();
        DJScrollbar_HorizontalThumbInit();
        MutationObserverLoaded();
    })

    return {
        DJScrollbar_WrapperRef,
        DJScrollbar_InnerRef,
        DJScrollbar_VerticalRef,
        DJScrollbar_HorizontalRef,
        DJScrollbar_VerticalThumbRef,
        DJScrollbar_HorizontalThumbRef,
        DJScrollbar_VerticalConfig,
        DJScrollbar_HorizontalConfig,
        DJScrollbar_Style,
        DJScrollbar_VeticalThumbStyle,
        DJScrollbar_HorizontalThumbStyle,
        DJScrollbar_VerticalClass,
        DJScrollbar_HorizontalClass,
        DJScrollbar_MouseenterChange,
        DJScrollbar_MouseleaveChange,
        DJScrollbar_ScrollChange,
        DJScrollbar_VeticalMouseenterChange,
        DJScrollbar_VeticalMouseleaveChange,
        DJScrollbar_VerticalMousedownChange,
        DJScrollbar_VeticalThumbMousedownChange,
        DJScrollbar_HorizontalMouseenterChange,
        DJScrollbar_HorizontalMouseleaveChange,
        DJScrollbar_HorizontalMousedownChange,
        DJScrollbar_HorizontalThumbMousedownChange,
        scrollTo
    }
}