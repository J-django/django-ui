import type { PropType } from 'vue';
import { ref, unref, reactive, computed, nextTick } from 'vue'
import { useTime, useDevice, useDom } from '@/hooks'

export interface DJVideoPropsType {
    src: string;
    autoplay: boolean;
    loop: boolean;
    muted: boolean;
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    transition: boolean;
}

export const DJVideoOptions = {
    name: "dj-video"
};

export const DJVideoProps = {
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
    width: {
        type: String as PropType<string>,
        default: "100%"
    },
    minWidth: {
        type: String as PropType<string>,
        default: ""
    },
    maxWidth: {
        type: String as PropType<string>,
        default: ""
    },
    height: {
        type: String as PropType<string>,
        default: "100%"
    },
    minHeight: {
        type: String as PropType<string>,
        default: ""
    },
    maxHeight: {
        type: String as PropType<string>,
        default: ""
    },
    transition: {
        type: Boolean as PropType<boolean>,
        default: true
    }
};

export type DJVideoEmits = {
    (e: "abort", event: Event): void,
    (e: "canplay", event: Event): void,
    (e: "canplaythrough", event: Event): void,
    (e: "durationchange", event: Event): void,
    (e: "emptied", event: Event): void,
    (e: "ended", event: Event): void,
    (e: "error", event: Event): void,
    (e: "loadeddata", event: Event): void,
    (e: "loadedmetadata", event: Event): void,
    (e: "loadstart", event: Event): void,
    (e: "pause", event: Event): void,
    (e: "play", event: Event): void,
    (e: "playing", event: Event): void,
    (e: "progress", event: Event): void,
    (e: "ratechange", event: Event): void,
    (e: "seeked", event: Event): void,
    (e: "seeking", event: Event): void,
    (e: "stalled", event: Event): void,
    (e: "suspend", event: Event): void,
    (e: "timeupdate", event: Event): void,
    (e: "volumechange", event: Event): void,
    (e: "waiting", event: Event): void,
    (e: "fullscreenchange", event: Event): void,
    (e: "enterpictureinpicture", event: Event): void,
    (e: "leavepictureinpicture", event: Event): void,
}

export const useVideo = (props: DJVideoPropsType, emits: DJVideoEmits) => {
    const videoRef = ref();
    const videoFullScreenElementRef = ref();
    const mousemoveTimeout = ref();
    const volumePromtTimeout = ref();

    const videoConfig = reactive({
        error: <boolean>false, // 异常
        waiting: <boolean>true, // 等待
        paused: <boolean>true, // 播放、暂停
        isDragProgress: <boolean>false, // 是否拖动进度条
        mute: <boolean>false, // 静音
        volume: <number>1, // 音量
        beforeVolume: <number>1, // 上一次音量
        volumeProgress: <number>100, // 音量对应进度
        isVolumePrompt: <boolean>false, // 是否显示音量提示
        progress: <number>0, // 视频进度
        buffered: <number>0, // 缓冲进度
        currentTime: <string>"00:00", // 视频当前播放位置
        duration: <string>"00:00", // 视频总长度
        isMove: <boolean>false, // 鼠标是否移入可见区域
        fullscreen: <boolean>false, // 是否全屏
        pictureInPicture: <boolean>false, // 是否启用画中画
        progressController: <boolean>true
    })

    const { isMobile } = useDevice();

    const { formatSongsTime, formatProgress } = useTime();

    const { RequestFullscreen, ExitFullscreen, RequestPictureInPicture, ExitPictureInPicture, LandscapeScreen } = useDom();

    const mobile = computed(() => isMobile());

    /**
    * 播放
    */
    const play = () => {
        unref(videoRef).play();
    }

    /**
     * 暂停
     */
    const pause = () => {
        unref(videoRef).pause();
    }

    /**
     * 切换
     */
    const toggle = () => {
        videoConfig.paused = !videoConfig.paused;
        videoConfig.progressController = videoConfig.paused;
        if (!videoConfig.paused) play(); else pause();
    }

    /**
     * 切换
     */
    const toggleFullScreen = async () => {
        try {
            const pictureInPictureElement = unref(videoRef);
            const VideoElement = unref(videoFullScreenElementRef);
            if (pictureInPictureElement === document.pictureInPictureElement) {
                await ExitFullscreen();
            }
            if (VideoElement !== document.fullscreenElement) {
                await RequestFullscreen(VideoElement);
                if (unref(mobile)) {
                    await LandscapeScreen();
                }
            } else {
                pictureInPictureElement.style.height = props.height;
                await ExitFullscreen();
            }
        }
        catch (error) {
            console.error(`Failed to toggle fullscreen mode: ${error}`);
        }
    }

    /**
     * 切换画中画模式
     */
    const togglePictureInPicture = async () => {
        try {
            if ('pictureInPictureEnabled' in document) {
                if (unref(videoRef) && typeof unref(videoRef).requestPictureInPicture === 'function') {
                    if (unref(videoRef) !== document.pictureInPictureElement) {
                        await RequestPictureInPicture(unref(videoRef));
                    } else {
                        await ExitPictureInPicture();
                    }
                }
            }
        } catch (error) {
            console.error(`Failed to toggle Picture-in-Picture mode: ${error}`);
        }
    }

    /**
     * 切换音量
     */
    const toggleVolume = () => {
        try {
            videoConfig.mute = !videoConfig.mute;
            const element = unref(videoRef);
            if (videoConfig.mute) {
                nextTick(() => {
                    videoConfig.beforeVolume = videoConfig.volume;
                    videoConfig.volume = 0;
                    videoConfig.volumeProgress = 0;
                    element.volume = 0;
                })
            } else {
                nextTick(() => {
                    videoConfig.volumeProgress = videoConfig.beforeVolume * 100;
                    videoConfig.volume = videoConfig.beforeVolume;
                    element.volume = videoConfig.volume;
                })
            }
        } catch { }
    }

    /**
     * 鼠标移入显示
     */
    const showMousemoveTimeout = () => {
        const element = unref(mousemoveTimeout);
        if (element) {
            clearTimeout(element)
        }
        mousemoveTimeout.value = setTimeout(() => {
            videoConfig.isMove = false;
            if (!videoConfig.paused) {
                videoConfig.progressController = false;
            }
        }, 1500);
    }

    /**
     * 重置鼠标移入
     */
    const resetMousemoveTimeout = () => {
        const element = unref(mousemoveTimeout);
        if (element) {
            clearTimeout(element)
            videoConfig.isMove = true;
            if (!unref(mobile)) {
                videoConfig.progressController = true;
            }
        }
        showMousemoveTimeout();
    }

    /**
     * 当音频/视频的加载已放弃时触发
     * @param event Event
     */
    const DJVideo_AbortChange = (event: Event) => {
        emits("abort", event);
    }

    /**
     * 当浏览器可以开始播放音频/视频时触发
     * @param event Event
     */
    const DJVideo_CanplayChange = (event: Event) => {
        videoConfig.waiting = false;
        emits("canplay", event);

    }

    /**
     * 当浏览器可在不因缓冲而停顿的情况下进行播放时触发
     * @param event Event
     */
    const DJVideo_CanplaythroughChange = (event: Event) => {
        try {
            videoConfig.waiting = false;
            videoConfig.duration = formatSongsTime(unref(videoRef)?.duration)
            emits("canplaythrough", event);
        } catch { }
    }

    /**
     * 当音频/视频的时长已更改时触发
     * @param event Event
     */
    const DJVideo_DurationchangeChange = (event: Event) => {
        emits("durationchange", event);
    }

    /**
     * 当目前的播放列表为空时触发
     * @param event Event
     */
    const DJVideo_EmptiedChange = (event: Event) => {
        emits("emptied", event);
    }

    /**
     * 当目前的播放列表已结束时触发
     * @param event Event
     */
    const DJVideo_EndedChange = (event: Event) => {
        videoConfig.paused = true;
        emits("ended", event);
    }

    /**
     * 当在音频/视频加载期间发生错误时触发
     * @param event Event
     */
    const DJVideo_ErrorChange = (event: Event) => {
        videoConfig.error = true;
        emits("error", event);
    }

    /**
     * 当浏览器已加载音频/视频的当前帧时触发
     * @param event Event
     */
    const DJVideo_LoadeddataChange = (event: Event) => {
        emits("loadeddata", event);
    }

    /**
     * 当浏览器已加载音频/视频的元数据时触发
     * @param event Event
     */
    const DJVideo_LoadedmetadataChange = (event: Event) => {
        emits("loadedmetadata", event);
    }

    /**
     * 当浏览器开始查找音频/视频时触发
     * @param event Event
     */
    const DJVideo_LoadstartChange = (event: Event) => {
        emits("loadstart", event);
    }

    /**
     * 当音频/视频已暂停时触发
     * @param event Event
     */
    const DJVideo_PauseChange = (event: Event) => {
        videoConfig.paused = true;
        emits("pause", event);
    }

    /**
     * 当音频/视频已开始或不再暂停时触发
     * @param event Event
     */
    const DJVideo_PlayChange = (event: Event) => {
        videoConfig.paused = false;
        emits("play", event);
    }

    /**
     * 当音频/视频在因缓冲而暂停或停止后已就绪时触发
     * @param event Event
     */
    const DJVideo_PlayingChange = (event: Event) => {
        emits("playing", event);
    }

    /**
     * 当浏览器正在下载音频/视频时触发
     * @param event Event
     */
    const DJVideo_ProgressChange = (event: Event) => {
        emits("progress", event);
    }

    /**
     * 当音频/视频的播放速度已更改时触发
     * @param event Event
     */
    const DJVideo_RatechangeChange = (event: Event) => {
        emits("ratechange", event);
    }

    /**
     * 当用户已移动/跳跃到音频/视频中的新位置时触发
     * @param event Event
     */
    const DJVideo_SeekedChange = (event: Event) => {
        emits("seeked", event);
    }

    /**
     * 当用户开始移动/跳跃到音频/视频中的新位置时触发
     * @param event Event
     */
    const DJVideo_SeekingChange = (event: Event) => {
        emits("seeking", event);
    }

    /**
     * 当浏览器尝试获取媒体数据，但数据不可用时触发
     * @param event Event
     */
    const DJVideo_StalledChange = (event: Event) => {
        emits("stalled", event);
    }

    /**
     * 当浏览器刻意不获取媒体数据时触发
     * @param event Event
     */
    const DJVideo_SuspendChange = (event: Event) => {
        emits("suspend", event);
    }

    /**
     * 当目前的播放位置已更改时触发
     * @param event Event
     */
    const DJVideo_TimeupdateChange = (event: Event) => {
        try {
            videoConfig.currentTime = formatSongsTime(unref(videoRef)?.currentTime);
            if (!videoConfig.isDragProgress) videoConfig.progress = parseFloat(formatProgress(unref(videoRef)?.duration, unref(videoRef)?.currentTime).toFixed(2));
            var bufferedTime = unref(videoRef)?.buffered;
            videoConfig.buffered = parseFloat((bufferedTime.end(bufferedTime.length - 1) / unref(videoRef)?.duration * 100).toFixed(2));
            emits("timeupdate", event);
        } catch { }
    }

    /**
     * 当音量已更改时触发
     * @param event Event
     */
    const DJVideo_VolumechangeChange = (event: Event) => {
        const volume = (event.target as any).volume;
        videoConfig.volume = volume;
        videoConfig.volumeProgress = Math.floor(volume * 100);
        if (volume == 0) videoConfig.mute = true; else videoConfig.mute = false;
        emits("volumechange", event);
    }

    /**
     * 当视频由于需要缓冲下一帧而停止时触发
     * @param event Event
     */
    const DJVideo_WaitingChange = (event: Event) => {
        videoConfig.waiting = true;
        emits("waiting", event);
    }

    /**
     * 全屏/最小化切换时触发
     * @param event Event
     */
    const DJVideo_FullscreenchangeChange = (event: Event) => {
        try {
            const m = unref(mobile);
            const element = unref(videoFullScreenElementRef);
            if (element === document.fullscreenElement) {
                videoConfig.fullscreen = true;
                if (!m) {
                    document.addEventListener("keydown", DJVideo_KeydownChange);
                }
            } else {
                videoConfig.fullscreen = false;
                if (!m) {
                    document.removeEventListener("keydown", DJVideo_KeydownChange);
                }
            }
            emits("fullscreenchange", event);
        } catch { }
    }

    /**
     * 进入画中画时触发
     * @param event Event
     */
    const DJVideo_EnterpictureinpictureChange = (event: Event) => {
        videoConfig.pictureInPicture = true;
        emits("enterpictureinpicture", event);
    }

    /**
     * 离开画中画时触发
     * @param event Event
     */
    const DJVideo_LeavepictureinpictureChange = (event: Event) => {
        videoConfig.pictureInPicture = false;
        emits("leavepictureinpicture", event);
    }

    /**
     * 拖拽改变音频进度
     */
    const DJVideo_ProgressMouseupChange = () => {
        try {
            unref(videoRef).currentTime = (videoConfig.progress / 100) * unref(videoRef)?.duration;
            videoConfig.isDragProgress = false;
        } catch { }
    }

    /**
     * 视频点击时触发
     */
    const DJVideoSourceClickChange = () => {
        videoConfig.progressController = !videoConfig.progressController;
        if (!unref(mobile)) {
            videoConfig.paused = !videoConfig.paused;
            if (!videoConfig.paused) {
                play();
                videoConfig.progressController = true;
                showMousemoveTimeout();
            } else {
                pause();
                videoConfig.progressController = true;
                showMousemoveTimeout();
            }
        }
    }

    /**
     * 鼠标移入dj-video事件
     */
    const DJVideo_FullScreenElementMouseenterChange = () => {
        videoConfig.isMove = true;
        if (!unref(mobile)) {
            videoConfig.progressController = true;
        }
    }

    /**
     * 鼠标离开dj-video事件
     */
    const DJVideo_FullScreenElementMouseleaveChange = () => {
        videoConfig.isMove = false;
        if (!unref(mobile) && !videoConfig.paused) {
            videoConfig.progressController = false;
        }
    }

    /**
     * 鼠标移入控制器事件
     */
    const DJVideo_ProgressMouseenterChange = () => {
        videoConfig.isMove = true;
        if (!unref(mobile)) {
            const element = unref(mousemoveTimeout);
            clearTimeout(element)
            videoConfig.progressController = true;
        }
    }

    const DJVideo_ProgressMouseleaveChange = () => {
        videoConfig.isMove = false;
        if (!unref(mobile) && !videoConfig.paused) {
            videoConfig.progressController = false;
        }
    }

    /**
     * 鼠标移动时触发
     */
    const DJVideo_FullScreenElementMousemoveChange = () => {
        resetMousemoveTimeout();
    }

    /**
     * 音量进度条改变时触发
     * @param event Event
     */
    const DJVideo_VolumeProgressInputChange = () => {
        try {
            const element = unref(videoRef);
            const volume = videoConfig.volumeProgress / 100;
            videoConfig.volume = volume;
            videoConfig.beforeVolume = volume;
            element.volume = volume;
            if (volume == 0) {
                videoConfig.mute = true;
            } else {
                videoConfig.mute = false;
            }
        } catch { }
    }

    /**
     * 键盘按下时触发
     * @param event Event
     */
    const DJVideo_KeydownChange = (event: KeyboardEvent) => {
        try {
            switch (event.keyCode) {
                case 32:
                    // 空格
                    event.preventDefault();
                    if (videoConfig.paused) {
                        unref(videoRef).play();
                        showMousemoveTimeout();
                    } else {
                        unref(videoRef).pause();
                        videoConfig.progressController = true;
                    }
                    break;
                case 37:
                    // 左
                    event.preventDefault();
                    unref(videoRef).currentTime -= 5;
                    break;
                case 39:
                    // 右
                    event.preventDefault();
                    if (videoConfig.paused) return;
                    unref(videoRef).currentTime += 5;
                    break;
                case 38:
                    // 上
                    event.preventDefault();
                    unref(videoRef).volume = (unref(videoRef).volume + 0.05).toFixed(2);
                    volumePromtFunc();
                    break;
                case 40:
                    // 下
                    event.preventDefault();
                    unref(videoRef).volume = (unref(videoRef).volume - 0.05).toFixed(2);
                    volumePromtFunc();
                    break;
            }
        } catch { }
    }

    /**
     * 音量提示
     */
    const volumePromtFunc = () => {
        videoConfig.isVolumePrompt = true;
        if (unref(volumePromtTimeout)) {
            clearTimeout(unref(volumePromtTimeout))
        }
        volumePromtTimeout.value = setTimeout(() => {
            videoConfig.isVolumePrompt = false;
        }, 1500);
    }

    /**
     * 重新加载
     */
    const load = () => {
        unref(videoRef).load();
        videoConfig.error = false;
    }

    return {
        videoRef,
        videoFullScreenElementRef,
        videoConfig,
        mobile,
        load,
        play,
        pause,
        toggle,
        toggleVolume,
        toggleFullScreen,
        togglePictureInPicture,
        ExitFullscreen,
        DJVideo_AbortChange,
        DJVideo_CanplayChange,
        DJVideo_CanplaythroughChange,
        DJVideo_DurationchangeChange,
        DJVideo_EmptiedChange,
        DJVideo_EndedChange,
        DJVideo_ErrorChange,
        DJVideo_LoadeddataChange,
        DJVideo_LoadedmetadataChange,
        DJVideo_LoadstartChange,
        DJVideo_PauseChange,
        DJVideo_PlayChange,
        DJVideo_PlayingChange,
        DJVideo_ProgressChange,
        DJVideo_RatechangeChange,
        DJVideo_SeekedChange,
        DJVideo_SeekingChange,
        DJVideo_StalledChange,
        DJVideo_SuspendChange,
        DJVideo_TimeupdateChange,
        DJVideo_VolumechangeChange,
        DJVideo_WaitingChange,
        DJVideo_FullscreenchangeChange,
        DJVideo_EnterpictureinpictureChange,
        DJVideo_LeavepictureinpictureChange,
        DJVideo_ProgressMouseupChange,
        DJVideoSourceClickChange,
        DJVideo_FullScreenElementMouseenterChange,
        DJVideo_FullScreenElementMouseleaveChange,
        DJVideo_ProgressMouseenterChange,
        DJVideo_ProgressMouseleaveChange,
        DJVideo_FullScreenElementMousemoveChange,
        DJVideo_VolumeProgressInputChange
    }
}