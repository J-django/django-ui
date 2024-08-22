import type { PropType } from 'vue'
import { ref, unref, computed } from 'vue'

export interface DJSliderPropsType {
    min: number;
    max: number;
    buffered: number;
    disabled: boolean;
    showBuffer: boolean;
    showThumb: boolean;
    showExtreme: boolean;
    modelValue: number;
}

export const DJSliderOptions = {
    name: "dj-slider"
};

export const DJSliderProps = {
    min: {
        type: Number as PropType<number>,
        default: 0
    },
    max: {
        type: Number as PropType<number>,
        default: 100
    },
    buffered: {
        type: Number as PropType<number>,
        default: 0
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    showBuffer: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    showThumb: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    showExtreme: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    modelValue: {
        type: Number as PropType<number>,
        default: 0
    },
};

export type DJSliderEmits = {
    (e: 'update:modelValue', value: number): void,
    (e: 'input', value: number): void,
    (e: 'change', value: number): void,
    (e: 'progress', value: number): void,
};

export const useSlider = (props: DJSliderPropsType, emits: DJSliderEmits) => {
    const DJSliderTrackRef = ref();

    const thumbHover = ref(false)
    const thumbDrag = ref(false)

    const progressValue = computed((): number => {
        const progress = (props.modelValue - props.min) / (props.max - props.min) * 100;
        emits("progress", progress)
        return progress;
    })

    const bufferedValue = computed((): number => {
        const buffer = props.buffered;
        if (buffer <= 0) {
            return 0;
        } else if (buffer >= 100) {
            return 100;
        } else {
            return buffer;
        }
    })

    const ComputedValue = (x: number, width: number): number => {
        const percentage = Math.max(0, Math.min(100, parseFloat((x / width * 100).toFixed(2))));
        const value = parseFloat((props.min + (percentage / 100) * (props.max - props.min)).toFixed(2));
        return value;
    }

    /**
    * 手指按下触发
    */
    const DJSlider_TouchstartChange = () => {
        if (props.disabled) return;
        thumbHover.value = true;
        document.body.style.webkitUserSelect = "none";
        document.body.style.userSelect = "none";
    }

    /**
    * 
    * @param event 手指移动触发
    */
    const DJSlider_TouchmoveChange = (event: TouchEvent) => {
        if (props.disabled) return;
        thumbDrag.value = true;

        const track = unref(DJSliderTrackRef);
        const rect = track.getBoundingClientRect();
        let x = event.touches[0].clientX - rect.left;
        const value = ComputedValue(x, rect.width);

        emits("update:modelValue", value);
        emits("input", value);

        document.addEventListener("touchend", DJSLider_TouchendChange)
    }

    /**
    * 手指抬起触发
    */
    const DJSLider_TouchendChange = () => {
        if (props.disabled) return;
        thumbHover.value = false;
        thumbDrag.value = false;
        document.body.style.webkitUserSelect = "";
        document.body.style.userSelect = "";

        emits("change", props.modelValue);

        document.removeEventListener("touchend", DJSLider_TouchendChange)
    }

    /**
    * 进度条鼠标按下触发
    * @param event 
    */
    const DJSliderTrack_MousedownChange = (event: MouseEvent) => {
        if (event.buttons > 1 || props.disabled) return;

        const track = unref(DJSliderTrackRef);
        const rect = track.getBoundingClientRect();
        let x = event.clientX - rect.left;
        const value = ComputedValue(x, rect.width);

        emits("update:modelValue", value);
        emits("change", value);

        document.addEventListener("mousemove", DJSliderThumb_MousemoveChange);
        document.addEventListener("mouseup", DJSliderThumb_MouseupChange);
    }

    /**
    * 进度条手指按下触发
    */
    const DJSliderTrack_TouchstartChange = () => {
        if (props.disabled) return;
        thumbHover.value = true;
    }

    /**
    * 拇指移入触发
    */
    const DJSliderThumb_MouseenterChange = () => {
        if (props.disabled) return;
        thumbHover.value = true;
    }

    /**
    * 拇指按下触发
    * @param event 
    */
    const DJSliderThumb_MousedownChange = (event: MouseEvent) => {
        if (event.buttons > 1 || props.disabled) return;

        thumbDrag.value = true;
        document.body.style.webkitUserSelect = "none";
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";

        document.addEventListener("mousemove", DJSliderThumb_MousemoveChange);
        document.addEventListener("mouseup", DJSliderThumb_MouseupChange);
    }

    /**
    * 离开拇指触发
    */
    const DJSliderThumb_MouseleaveChange = () => {
        if (props.disabled) return;
        thumbHover.value = false;
    }

    /**
    * 鼠标移动触发
    * @param event 
    */
    const DJSliderThumb_MousemoveChange = (event: MouseEvent) => {
        if (props.disabled) return;
        thumbDrag.value = true;

        const track = unref(DJSliderTrackRef);
        const rect = track.getBoundingClientRect();
        let x = event.clientX - rect.left;
        const value = ComputedValue(x, rect.width);

        emits("update:modelValue", value);
        emits("input", value);
    }

    /**
     * 拇指抬起触发
     */
    const DJSliderThumb_MouseupChange = () => {
        if (props.disabled) return;
        thumbDrag.value = false;
        document.body.style.webkitUserSelect = "";
        document.body.style.userSelect = "";
        document.body.style.cursor = "";

        document.removeEventListener("mousemove", DJSliderThumb_MousemoveChange);
        document.removeEventListener("mouseup", DJSliderThumb_MouseupChange)
    }

    /**
    * 拇指按下触发
    */
    const DJSliderThumb_TouchstartChange = () => {
        if (props.disabled) return;
        thumbHover.value = true;
    }


    return {
        DJSliderTrackRef,
        thumbHover,
        thumbDrag,
        progressValue,
        bufferedValue,
        ComputedValue,
        DJSlider_TouchstartChange,
        DJSlider_TouchmoveChange,
        DJSliderTrack_MousedownChange,
        DJSliderTrack_TouchstartChange,
        DJSliderThumb_MouseenterChange,
        DJSliderThumb_MousedownChange,
        DJSliderThumb_MouseleaveChange,
        DJSliderThumb_MousemoveChange,
        DJSliderThumb_MouseupChange,
        DJSliderThumb_TouchstartChange
    }
}