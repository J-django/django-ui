import type { PropType } from 'vue'
import { ref, unref, reactive } from 'vue'
import { useTime } from '@/hooks'

export interface DJAudioPropsType {
    src: string;
    autoplay: boolean;
    loop: boolean;
    muted: boolean;
    transition: boolean;
}

export const DJAudioOptions = {
    name: "dj-audio"
};

export const DJAudioProps = {
    src: {
        type: String as PropType<string>,
        default: ""
    },
    autoplay: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    loop: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    muted: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    transition: {
        type: Boolean as PropType<boolean>,
        default: true
    }
};

export type DJAudioEmits = {
    (e: "loadedmetadata", event: Event): void,
    (e: "play", event: Event): void,
    (e: "pause", event: Event): void,
    (e: "canplay", event: Event): void,
    (e: "playing", event: Event): void,
    (e: "progress", event: Event): void,
    (e: "timeupdate", value: number, event: Event): void,
    (e: "seeked", event: Event): void,
    (e: "waiting", event: Event): void,
    (e: "ended", event: Event): void,
}

export const useAudio = (emits: DJAudioEmits) => {
    const { formatSongsTime, formatProgress } = useTime();

    const audioRef = ref();

    const audioConfig = reactive({
        waiting: <boolean>true,
        paused: <boolean>true,
        isDragProgress: <boolean>false,
        volume: <number>1,
        progress: <number>0,
        buffered: <number>0,
        currentTime: <string>"00:00",
        duration: <string>"00:00"
    })

    /**
    * 加载音频资源 
     */
    const load = () => {
        unref(audioRef).load();
    }

    /**
     * 播放
     */
    const play = () => {
        unref(audioRef).play();
    }

    /**
     * 暂停
     */
    const pause = () => {
        unref(audioRef).pause();
    }

    /**
    * 音频状态切换
    */
    const toggle = () => {
        audioConfig.paused = !audioConfig.paused;
        if (!audioConfig.paused) play(); else pause();
    }

    /**
    * 缓冲完毕时触发
     * @param event Event
    * @returns
     */
    const DJAudio_LoadedMetaDataChange = (event: Event) => {
        audioConfig.duration = formatSongsTime(unref(audioRef)?.duration)
        audioConfig.waiting = false;
        emits("loadedmetadata", event)
    }

    /**
    * 可以开始播放时触发
    * @param event Event
    */
    const DJAudio_CanplayChange = (event: Event) => {
        audioConfig.waiting = false;
        emits("canplay", event)
    }

    /**
     * 调用play()方法后触发
    * @param event Event
    */
    const DJAudio_PlayChange = (event: Event) => {
        audioConfig.paused = false;
        unref(audioRef).volume = audioConfig.volume = 0.5;
        emits("play", event)
    }

    /**
     * 播放暂停触发
     * @param event Event
     */
    const DJAudio_PauseChange = (event: Event) => {
        emits("pause", event)
        audioConfig.paused = true;
    }

    /**
     * 开始播放后触发
     * @param event Event
     */
    const DJAudio_PlayingChange = (event: Event) => {
        emits("playing", event)
    }

    /**
     * 进度改变时触发
     * @param event Event
     */
    const DJAudio_ProgressChange = (event: Event) => {
        var bufferedTime = unref(audioRef)?.buffered;
        audioConfig.buffered = parseFloat((bufferedTime.end(bufferedTime.length - 1) / unref(audioRef)?.duration * 100).toFixed(2));
        emits("progress", event)
    }

    /**
     * 播放中触发
     * @param event Event
     */
    const DJAudio_TimeUpdateChange = (event: Event) => {
        audioConfig.currentTime = formatSongsTime(unref(audioRef)?.currentTime);
        if (!audioConfig.isDragProgress) audioConfig.progress = parseFloat(formatProgress(unref(audioRef)?.duration, unref(audioRef)?.currentTime).toFixed(2));
        emits("timeupdate", audioConfig.progress, event)
    }

    /**
     * 音频位置发生改变后触发
     * @param event Event
     */
    const DJAudio_SeekedChange = (event: Event) => {
        emits("seeked", event)
    }

    /**
     * 缓冲暂停播放时触发
     * @param event Event
     */
    const DJAudio_WaitingChange = (event: Event) => {
        audioConfig.waiting = true;
        emits("waiting", event)
    }

    /**
     * 播放结束时触发
     * @param event Event
     */
    const DJAudio_EndedChange = (event: Event) => {
        audioConfig.paused = true;
        emits("ended", event)
    }

    /**
     * 拖拽改变音频进度
     */
    const DJAudio_ProgressMouseupChange = () => {
        unref(audioRef).currentTime = (audioConfig.progress / 100) * unref(audioRef)?.duration;
        audioConfig.isDragProgress = false;
    }


    return {
        audioRef,
        audioConfig,
        load,
        play,
        pause,
        toggle,
        DJAudio_LoadedMetaDataChange,
        DJAudio_CanplayChange,
        DJAudio_PlayChange,
        DJAudio_PauseChange,
        DJAudio_PlayingChange,
        DJAudio_ProgressChange,
        DJAudio_TimeUpdateChange,
        DJAudio_SeekedChange,
        DJAudio_WaitingChange,
        DJAudio_EndedChange,
        DJAudio_ProgressMouseupChange
    }
}