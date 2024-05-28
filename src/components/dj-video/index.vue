<script setup lang="ts" name="dj-video">
// plugins
import "./index.less"
import { ref, unref, reactive, onMounted, onUnmounted } from 'vue'
import { formatSongsTime, formatProgress, isMobileDevice } from "@/utils/tool"

// script
const props = defineProps({
    src: {
        type: String,
        default: ""
    },
    width: {
        type: String,
        default: "100%"
    },
    minWidth: {
        type: String,
        default: ""
    },
    height: {
        type: String,
        default: "100%"
    },
    minHeight: {
        type: String,
        default: ""
    }
})

const emits = defineEmits(["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "enterpictureinpicture", "leavepictureinpicture"])

const videoRef = ref();
const videoFullScreenElementRef = ref();
const mousemoveTimeout = ref();
const volumePromtTimeout = ref();

const videoConfig = reactive({
    error: <boolean>false,
    waiting: <boolean>true,
    paused: <boolean>true,
    isDragProgress: <boolean>false,
    mute: <boolean>false,
    volume: <number>1,
    volumeBackup: <number>1,
    volumeProgress: <number>100,
    isVolumePrompt: <boolean>false,
    progress: <number>0,
    buffered: <number>0,
    currentTime: <string>"00:00",
    duration: <string>"00:00",
    isMove: <boolean>false,
    fullscreen: <boolean>false,
    pictureInPicture: <boolean>false,
})

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
 * 音频状态切换
 */
const videoSwitch = () => {
    if (isMobileDevice()) return;
    videoConfig.paused = !videoConfig.paused;
    if (!videoConfig.paused) play(); else pause();
}

/**
 * 切换
 */
const toggleFullScreen = () => {
    try {
        const pictureInPictureElement = unref(videoRef);
        const VideoElement = unref(videoFullScreenElementRef);
        if (pictureInPictureElement === document.pictureInPictureElement) {
            document.exitPictureInPicture();
        }
        if (VideoElement !== document.fullscreenElement) {
            if (VideoElement.requestFullscreen) {
                VideoElement.requestFullscreen();
            } else if (VideoElement.mozRequestFullScreen) { /* Firefox */
                VideoElement.mozRequestFullScreen();
            } else if (VideoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                VideoElement.webkitRequestFullscreen();
            } else if (VideoElement.msRequestFullscreen) { /* IE/Edge */
                VideoElement.msRequestFullscreen();
            }
        } else {
            pictureInPictureElement.style.height = props.height;
            document.exitFullscreen();
        }
    }
    catch (error) {
        console.error(`Failed to toggle fullscreen mode: ${error}`);
    }
}

/**
 * 切换画中画模式
 */
const togglePictureInPicture = () => {
    try {
        if ('pictureInPictureEnabled' in document) {
            if (unref(videoRef) && typeof unref(videoRef).requestPictureInPicture === 'function') {
                if (unref(videoRef) !== document.pictureInPictureElement) {
                    unref(videoRef).requestPictureInPicture();
                } else {
                    document.exitPictureInPicture();
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
            videoConfig.volumeBackup = videoConfig.volume;
            videoConfig.volume = 0;
            videoConfig.volumeProgress = 0;
            element.volume = 0;
        } else {
            videoConfig.volumeProgress = videoConfig.volumeBackup * 100;
            videoConfig.volume = videoConfig.volumeBackup;
            element.volume = videoConfig.volume;
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
    }
    showMousemoveTimeout();
}

// Event
/**
 * 当音频/视频的加载已放弃时触发
 * @param event Event
 */
const videoAbortChange = (event: Event) => {
    emits("abort", event);
}

/**
 * 当浏览器可以开始播放音频/视频时触发
 * @param event Event
 */
const videoCanplayChange = (event: Event) => {
    videoConfig.waiting = false;
    emits("canplay", event);

}

/**
 * 当浏览器可在不因缓冲而停顿的情况下进行播放时触发
 * @param event Event
 */
const videoCanplaythroughChange = (event: Event) => {
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
const videoDurationchangeChange = (event: Event) => {
    emits("durationchange", event);
}

/**
 * 当目前的播放列表为空时触发
 * @param event Event
 */
const videoEmptiedChange = (event: Event) => {
    emits("emptied", event);
}

/**
 * 当目前的播放列表已结束时触发
 * @param event Event
 */
const videoEndedChange = (event: Event) => {
    videoConfig.paused = true;
    emits("ended", event);
}

/**
 * 当在音频/视频加载期间发生错误时触发
 * @param event Event
 */
const videoErrorChange = (event: Event) => {
    videoConfig.error = true;
    emits("error", event);
}

/**
 * 当浏览器已加载音频/视频的当前帧时触发
 * @param event Event
 */
const videoLoadeddataChange = (event: Event) => {
    emits("loadeddata", event);
}

/**
 * 当浏览器已加载音频/视频的元数据时触发
 * @param event Event
 */
const videoLoadedmetadataChange = (event: Event) => {
    emits("loadedmetadata", event);
}

/**
 * 当浏览器开始查找音频/视频时触发
 * @param event Event
 */
const videoLoadstartChange = (event: Event) => {
    emits("loadstart", event);
}

/**
 * 当音频/视频已暂停时触发
 * @param event Event
 */
const videoPauseChange = (event: Event) => {
    videoConfig.paused = true;
    emits("pause", event);
}

/**
 * 当音频/视频已开始或不再暂停时触发
 * @param event Event
 */
const videoPlayChange = (event: Event) => {
    videoConfig.paused = false;
    emits("play", event);
}

/**
 * 当音频/视频在因缓冲而暂停或停止后已就绪时触发
 * @param event Event
 */
const videoPlayingChange = (event: Event) => {
    emits("playing", event);
}

/**
 * 当浏览器正在下载音频/视频时触发
 * @param event Event
 */
const videoProgressChange = (event: Event) => {
    emits("progress", event);
}

/**
 * 当音频/视频的播放速度已更改时触发
 * @param event Event
 */
const videoRatechangeChange = (event: Event) => {
    emits("ratechange", event);
}

/**
 * 当用户已移动/跳跃到音频/视频中的新位置时触发
 * @param event Event
 */
const videoSeekedChange = (event: Event) => {
    emits("seeked", event);
}

/**
 * 当用户开始移动/跳跃到音频/视频中的新位置时触发
 * @param event Event
 */
const videoSeekingChange = (event: Event) => {
    emits("seeking", event);
}

/**
 * 当浏览器尝试获取媒体数据，但数据不可用时触发
 * @param event Event
 */
const videoStalledChange = (event: Event) => {
    emits("stalled", event);
}

/**
 * 当浏览器刻意不获取媒体数据时触发
 * @param event Event
 */
const videoSuspendChange = (event: Event) => {
    emits("suspend", event);
}

/**
 * 当目前的播放位置已更改时触发
 * @param event Event
 */
const videoTimeupdateChange = (event: Event) => {
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
const videoVolumechangeChange = (event: Event) => {
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
const videoWaitingChange = (event: Event) => {
    videoConfig.waiting = true;
    emits("waiting", event);
}

/**
 * 全屏/最小化切换时触发
 * @param event Event
 */
const videoFullscreenchangeChange = (event: Event) => {
    try {
        const element = unref(videoFullScreenElementRef);
        if (element === document.fullscreenElement) {
            videoConfig.fullscreen = true;
        } else {
            videoConfig.fullscreen = false;
        }
        emits("fullscreenchange", event);
    } catch { }
}

/**
 * 进入画中画时触发
 * @param event Event
 */
const videoEnterpictureinpictureChange = (event: Event) => {
    videoConfig.pictureInPicture = true;
    emits("enterpictureinpicture", event);
}

/**
 * 离开画中画时触发
 * @param event Event
 */
const videoLeavepictureinpictureChange = (event: Event) => {
    videoConfig.pictureInPicture = false;
    emits("leavepictureinpicture", event);
}

/**
 * 拖拽改变音频进度
 */
const progressMouseupChange = () => {
    try {
        unref(videoRef).currentTime = (videoConfig.progress / 100) * unref(videoRef)?.duration;
        videoConfig.isDragProgress = false;
    } catch { }
}

/**
 * 鼠标移入事件
 */
const videoFullScreenElementMouseenterChange = () => {
    videoConfig.isMove = true;
}

const videoFullScreenElementMouseleaveChange = () => {
    videoConfig.isMove = false;
}

/**
 * 鼠标移动时触发
 */
const videoFullScreenElementMousemoveChange = () => {
    resetMousemoveTimeout();
}

/**
 * 音量进度条改变时触发
 * @param event Event
 */
const volumeProgressInputChange = () => {
    try {
        const element = unref(videoRef);
        const volume = videoConfig.volumeProgress / 100;
        videoConfig.volume = volume;
        videoConfig.volumeBackup = volume;
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
const videoKeydownChange = (event: KeyboardEvent) => {
    try {
        switch (event.keyCode) {
            case 32:
                // 空格
                event.preventDefault();
                if (videoConfig.paused) {
                    unref(videoRef).play();
                } else {
                    unref(videoRef).pause();
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
const videoLoaded = () => {
    unref(videoRef).load();
    videoConfig.error = false;
}

onMounted(() => {
    document.addEventListener("keydown", videoKeydownChange)
})

onUnmounted(() => {
    document.removeEventListener("keydown", videoKeydownChange);
})
</script>

<template>
    <div class="dj-video" :style="{ width: width, minWidth: minWidth }">
        <div class="dj-video__wrapper" :class="[!videoConfig.paused ? 'is-play' : '']">
            <div class="dj-video__inner">
                <div class="dj-video-source">
                    <div class="dj-video-source__wrapper">
                        <div class="dj-video-source__inner" :style="{ height: height, minHeight: minHeight }"
                            ref="videoFullScreenElementRef" @mouseenter="videoFullScreenElementMouseenterChange"
                            @mouseleave="videoFullScreenElementMouseleaveChange"
                            @mousemove="videoFullScreenElementMousemoveChange"
                            @fullscreenchange="videoFullscreenchangeChange">
                            <div class="dj-video-source__content">
                                <video ref="videoRef" preload="auto" :controls="false" h5-playsinline
                                    x5-video-player-fullscreen="false" webkit-playsinline="false" playsinline="false"
                                    @click="videoSwitch" @abort="videoAbortChange" @canplay="videoCanplayChange"
                                    @canplaythrough="videoCanplaythroughChange"
                                    @durationchange="videoDurationchangeChange" @emptied="videoEmptiedChange"
                                    @ended="videoEndedChange" @error="videoErrorChange"
                                    @loadeddata="videoLoadeddataChange" @loadedmetadata="videoLoadedmetadataChange"
                                    @loadstart="videoLoadstartChange" @pause="videoPauseChange" @play="videoPlayChange"
                                    @playing="videoPlayingChange" @progress="videoProgressChange"
                                    @ratechange="videoRatechangeChange" @seeked="videoSeekedChange"
                                    @seeking="videoSeekingChange" @stalled="videoStalledChange"
                                    @suspend="videoSuspendChange" @timeupdate="videoTimeupdateChange"
                                    @volumechange="videoVolumechangeChange" @waiting="videoWaitingChange"
                                    @enterpictureinpicture="videoEnterpictureinpictureChange"
                                    @leavepictureinpicture="videoLeavepictureinpictureChange">
                                    <source :src="src" type="video/mp4">
                                    <source :src="src" type="video/ogg">
                                    <source :src="src" type="video/webm">
                                </video>
                            </div>
                            <div class="dj-video-progress"
                                :class="[videoConfig.paused || videoConfig.isMove ? 'is-show' : '']"
                                @mouseenter="videoFullScreenElementMouseenterChange">
                                <div class="dj-video-progress__wrapper">
                                    <div class="dj-video-button__wrapper">
                                        <button class="dj-video-button__play" :disabled="videoConfig.waiting"
                                            @click="videoSwitch">
                                            <template v-if="!videoConfig.waiting">
                                                <svg v-if="videoConfig.paused" class="icon"
                                                    xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440" />
                                                </svg>
                                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    class="icon" viewBox="0 0 32 32">
                                                    <path fill="currentColor"
                                                        d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                                                </svg>
                                            </template>
                                            <template v-else>
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32"
                                                    height="32" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round"
                                                        stroke-width="2">
                                                        <path stroke-dasharray="2 4" stroke-dashoffset="6"
                                                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21">
                                                            <animate attributeName="stroke-dashoffset" dur="0.6s"
                                                                repeatCount="indefinite" values="6;0" />
                                                        </path>
                                                        <path stroke-dasharray="30" stroke-dashoffset="30"
                                                            d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset"
                                                                begin="0.1s" dur="0.3s" values="30;0" />
                                                        </path>
                                                        <path stroke-dasharray="10" stroke-dashoffset="10"
                                                            d="M12 8v7.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset"
                                                                begin="0.5s" dur="0.2s" values="10;0" />
                                                        </path>
                                                        <path stroke-dasharray="6" stroke-dashoffset="6"
                                                            d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset"
                                                                begin="0.7s" dur="0.2s" values="6;0" />
                                                        </path>
                                                    </g>
                                                </svg>
                                            </template>
                                        </button>
                                    </div>
                                    <div class="dj-video-progress__inner">
                                        <span class="dj-video-progress__start-time">
                                            {{ videoConfig.currentTime }}
                                        </span>
                                        <div class="dj-video-progress__content">
                                            <div class="dj-video-buffered__bar"
                                                :style="{ '--buffer-value': `${videoConfig.buffered}%` }">
                                            </div>
                                            <input type="range"
                                                :style="{ '--progress-value': `${videoConfig.progress}%` }"
                                                v-model="videoConfig.progress"
                                                @mousedown="videoConfig.isDragProgress = true"
                                                @mouseup="progressMouseupChange">
                                        </div>
                                        <span class="dj-video-progress__end-time">
                                            {{ videoConfig.duration }}
                                        </span>
                                    </div>
                                    <div class="dj-video-button__wrapper">
                                        <div class="dj-video-button__group">
                                            <button class="dj-video-button__volume" @click="toggleVolume">
                                                <svg v-if="!videoConfig.mute" class="icon"
                                                    xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    viewBox="0 0 24 24">
                                                    <path fill="currentColor"
                                                        d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1m13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85" />
                                                </svg>
                                                <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32"
                                                    height="32" viewBox="0 0 24 24">
                                                    <path fill="currentColor"
                                                        d="M3.63 3.63a.996.996 0 0 0 0 1.41L7.29 8.7L7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91c-.36.15-.58.53-.58.92c0 .72.73 1.18 1.39.91c.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 1 0 1.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0M19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-3.83-2.4-7.11-5.78-8.4c-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12m-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7M16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24" />
                                                </svg>
                                            </button>
                                            <div class="dj-video-button__group-menu">
                                                <div class="dj-video-button__group-menu__wrapper">
                                                    <div class="dj-video-volume">
                                                        <div class="dj-video-volume__wrapper">
                                                            <div class="dj-video-volume__inner">
                                                                <div class="dj-video-volume-progress">
                                                                    <input type="range"
                                                                        :style="{ '--volume-progress-value': `${videoConfig.volumeProgress}%` }"
                                                                        v-model="videoConfig.volumeProgress"
                                                                        @input="volumeProgressInputChange">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="dj-video-button__picture" @click="togglePictureInPicture">
                                            <svg v-if="!videoConfig.pictureInPicture" class="icon"
                                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75zM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06" />
                                            </svg>
                                            <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32"
                                                height="32" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm8.75-4.5H13V5h5.75A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.92c.313.11.65.17 1 .17h.5v5.75c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75M15.94 16h-1.69a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06z" />
                                            </svg>
                                        </button>
                                        <button class="dj-video-button__screen" @click="toggleFullScreen">
                                            <svg v-if="!videoConfig.fullscreen" class="icon"
                                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path
                                                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                    <path fill="currentColor"
                                                        d="M9.793 12.793a1 1 0 0 1 1.497 1.32l-.083.094L6.414 19H9a1 1 0 0 1 .117 1.993L9 21H4a1 1 0 0 1-.993-.883L3 20v-5a1 1 0 0 1 1.993-.117L5 15v2.586zM20 3a1 1 0 0 1 .993.883L21 4v5a1 1 0 0 1-1.993.117L19 9V6.414l-4.793 4.793a1 1 0 0 1-1.497-1.32l.083-.094L17.586 5H15a1 1 0 0 1-.117-1.993L15 3z" />
                                                </g>
                                            </svg>
                                            <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32"
                                                height="32" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path
                                                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                    <path fill="currentColor"
                                                        d="M11 12a1 1 0 0 1 .993.883L12 13v5a1 1 0 0 1-1.993.117L10 18v-2.586l-5.293 5.293a1 1 0 0 1-1.497-1.32l.083-.094L8.586 14H6a1 1 0 0 1-.117-1.993L6 12zm8.293-8.707a1 1 0 0 1 1.497 1.32l-.083.094L15.414 10H18a1 1 0 0 1 .117 1.993L18 12h-5a1 1 0 0 1-.993-.883L12 11V6a1 1 0 0 1 1.993-.117L14 6v2.586z" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="dj-video-volumePrompt"
                                :class="[videoConfig.paused || videoConfig.isMove ? 'is-move' : '', videoConfig.isVolumePrompt ? 'is-show' : '']">
                                <div class="dj-video-volumePrompt__wrapper">
                                    {{ videoConfig.volumeProgress + '%' }}
                                </div>
                            </div>
                            <div class="dj-video-error-message" :class="[videoConfig.error ? 'is-error' : '']">
                                <div class="dj-video-error-message__wrapper">
                                    <button class="dj-video-error-restart" @click="videoLoaded">ERRROR RESTART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>