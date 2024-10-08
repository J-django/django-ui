<script setup lang="ts">
// plugin
import "./index.less"
import { unref } from 'vue'
import { DJVideoOptions, DJVideoProps, useVideo } from './useVideo'

// script
defineOptions(DJVideoOptions)
const props = defineProps(DJVideoProps)
const emits = defineEmits(["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "enterpictureinpicture", "leavepictureinpicture"])
const {
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
} = useVideo(props, emits);

defineExpose({
    src: props.src,
    width: props.width,
    minWidth: props.minWidth,
    height: props.height,
    minHeight: props.minHeight,
    error: () => videoConfig.error,
    waiting: () => videoConfig.waiting,
    paused: () => videoConfig.paused,
    mute: () => videoConfig.mute,
    volume: () => videoConfig.volume,
    beforeVolume: () => videoConfig.beforeVolume,
    volumeProgress: () => videoConfig.volumeProgress,
    progress: () => videoConfig.progress,
    buffered: () => unref(videoRef)?.buffered,
    currentTime: () => unref(videoRef)?.currentTime,
    duration: () => unref(videoRef)?.duration,
    fullscreen: () => videoConfig.fullscreen,
    pictureInPicture: () => videoConfig.pictureInPicture,
    load,
    play,
    pause,
    toggle,
    toggleFullScreen,
    togglePictureInPicture,
})
</script>

<template>
    <div class="dj-video" :style="{ width: width, minWidth: minWidth, maxWidth: maxWidth }">
        <div class="dj-video__wrapper"
            :class="[!videoConfig.paused ? 'is-play' : '', transition ? 'is-transition' : '']">
            <div class="dj-video__inner" ref="videoFullScreenElementRef"
                @fullscreenchange="DJVideo_FullscreenchangeChange">
                <div class="dj-video-source">
                    <div class="dj-video-source__wrapper" @click="DJVideoSourceClickChange"
                        @mouseenter="DJVideo_FullScreenElementMouseenterChange"
                        @mouseleave="DJVideo_FullScreenElementMouseleaveChange"
                        @mousemove="DJVideo_FullScreenElementMousemoveChange">
                        <div class="dj-video-source__inner">
                            <video tabindex="0" :style="{ height: height, minHeight: minHeight, maxHeight: maxHeight }"
                                ref="videoRef" :aria-fullscreen="videoConfig.fullscreen" preload="auto"
                                :controls="false" h5-playsinline x5-video-player-fullscreen="false"
                                webkit-playsinline="false" playsinline="false" :autoplay="autoplay" :loop="loop"
                                :muted="muted" @abort="DJVideo_AbortChange" @canplay="DJVideo_CanplayChange"
                                @canplaythrough="DJVideo_CanplaythroughChange"
                                @durationchange="DJVideo_DurationchangeChange" @emptied="DJVideo_EmptiedChange"
                                @ended="DJVideo_EndedChange" @error="DJVideo_ErrorChange"
                                @loadeddata="DJVideo_LoadeddataChange" @loadedmetadata="DJVideo_LoadedmetadataChange"
                                @loadstart="DJVideo_LoadstartChange" @pause="DJVideo_PauseChange"
                                @play="DJVideo_PlayChange" @playing="DJVideo_PlayingChange"
                                @progress="DJVideo_ProgressChange" @ratechange="DJVideo_RatechangeChange"
                                @seeked="DJVideo_SeekedChange" @seeking="DJVideo_SeekingChange"
                                @stalled="DJVideo_StalledChange" @suspend="DJVideo_SuspendChange"
                                @timeupdate="DJVideo_TimeupdateChange" @volumechange="DJVideo_VolumechangeChange"
                                @waiting="DJVideo_WaitingChange"
                                @enterpictureinpicture="DJVideo_EnterpictureinpictureChange"
                                @leavepictureinpicture="DJVideo_LeavepictureinpictureChange">
                                <source :src="src" type="video/mp4">
                                <source :src="src" type="video/ogg">
                                <source :src="src" type="video/webm">
                            </video>
                            <div class="dj-video-source-mask"></div>
                        </div>
                    </div>
                </div>
                <div class="dj-video-progress"
                    :class="[videoConfig.progressController || videoConfig.waiting ? 'is-show' : '']"
                    @mouseenter="DJVideo_ProgressMouseenterChange" @mouseleave="DJVideo_ProgressMouseleaveChange">
                    <div class="dj-video-progress__wrapper">
                        <div class="dj-video-button__wrapper">
                            <button class="dj-video-button__play" title="Play Or Paused" :disabled="videoConfig.waiting"
                                @click="toggle">
                                <template v-if="!videoConfig.waiting">
                                    <svg v-if="videoConfig.paused" class="icon" xmlns="http://www.w3.org/2000/svg"
                                        width="32" height="32" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440" />
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon"
                                        viewBox="0 0 32 32">
                                        <path fill="currentColor"
                                            d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                                            <path stroke-dasharray="2 4" stroke-dashoffset="6"
                                                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21">
                                                <animate attributeName="stroke-dashoffset" dur="0.6s"
                                                    repeatCount="indefinite" values="6;0" />
                                            </path>
                                            <path stroke-dasharray="30" stroke-dashoffset="30"
                                                d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s"
                                                    dur="0.3s" values="30;0" />
                                            </path>
                                            <path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s"
                                                    dur="0.2s" values="10;0" />
                                            </path>
                                            <path stroke-dasharray="6" stroke-dashoffset="6"
                                                d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s"
                                                    dur="0.2s" values="6;0" />
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
                                    :style="{ '--dj-video-buffer-value': `${videoConfig.buffered}%` }">
                                </div>
                                <input type="range" tabindex="-1"
                                    :style="{ '--dj-video-progress-value': `${videoConfig.progress}%` }"
                                    v-model="videoConfig.progress" @mousedown="videoConfig.isDragProgress = true"
                                    @touchend="DJVideo_ProgressMouseupChange" @mouseup="DJVideo_ProgressMouseupChange">
                            </div>
                            <span class="dj-video-progress__end-time">
                                {{ videoConfig.duration }}
                            </span>
                        </div>
                        <div class="dj-video-button__wrapper">
                            <div class="dj-video-button__group">
                                <button class="dj-video-button__volume" title="Volume" @click="toggleVolume">
                                    <svg v-if="!videoConfig.mute" class="icon" xmlns="http://www.w3.org/2000/svg"
                                        width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1m13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85" />
                                    </svg>
                                    <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 24 24">
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
                                                            :style="{ '--dj-video-volume-progress-value': `${videoConfig.volumeProgress}%` }"
                                                            v-model="videoConfig.volumeProgress"
                                                            @input="DJVideo_VolumeProgressInputChange">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="dj-video-button__picture" title="PictureInPicture"
                                @click="togglePictureInPicture">
                                <svg v-if="!videoConfig.pictureInPicture" class="icon"
                                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75zM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06" />
                                </svg>
                                <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm8.75-4.5H13V5h5.75A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.92c.313.11.65.17 1 .17h.5v5.75c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75M15.94 16h-1.69a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06z" />
                                </svg>
                            </button>
                            <button class="dj-video-button__screen"
                                :title="videoConfig.fullscreen ? 'Exit FullScreen' : 'FullScreen'"
                                @click="toggleFullScreen">
                                <svg v-if="!videoConfig.fullscreen" class="icon" xmlns="http://www.w3.org/2000/svg"
                                    width="32" height="32" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="currentColor"
                                            d="M9.793 12.793a1 1 0 0 1 1.497 1.32l-.083.094L6.414 19H9a1 1 0 0 1 .117 1.993L9 21H4a1 1 0 0 1-.993-.883L3 20v-5a1 1 0 0 1 1.993-.117L5 15v2.586zM20 3a1 1 0 0 1 .993.883L21 4v5a1 1 0 0 1-1.993.117L19 9V6.414l-4.793 4.793a1 1 0 0 1-1.497-1.32l.083-.094L17.586 5H15a1 1 0 0 1-.117-1.993L15 3z" />
                                    </g>
                                </svg>
                                <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 24 24">
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
                    :class="[videoConfig.progressController ? 'is-move' : '', videoConfig.isVolumePrompt ? 'is-show' : '']">
                    <div class="dj-video-volumePrompt__wrapper">
                        {{ videoConfig.volumeProgress + '%' }}
                    </div>
                </div>
                <div class="dj-video-exit-fullscreen"
                    :class="[videoConfig.progressController && videoConfig.fullscreen && !mobile ? 'is-show' : '']"
                    @mouseenter="DJVideo_ProgressMouseenterChange" @mouseleave="DJVideo_ProgressMouseleaveChange">
                    <div class="dj-video-exit-fullscreen__wrapper">
                        <button class="dj-video-button__exit" title="Exit FullScreen" @click="ExitFullscreen">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 12 12">
                                <path fill="currentColor"
                                    d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>