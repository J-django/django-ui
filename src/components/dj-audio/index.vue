<script lang="ts" setup name="dj-audio">
// plugins
import "./index.less"
import { ref, unref, reactive } from 'vue'
import { formatSongsTime, formatProgress } from "@/utils/tool"

// script
const props = defineProps({
    src: {
        type: String,
        default: ""
    },
    autoplay: {
        type: Boolean,
        default: false
    },
    loop: {
        type: Boolean,
        default: false
    },
    muted: {
        type: Boolean,
        default: false
    }
})

const audioRef = ref();

const emits = defineEmits(["loadedmetadata", "play", "pause", "canplay", "playing", "progress", "timeupdate", "seeked", "waiting", "ended"])

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
const audioSwitch = () => {
    audioConfig.paused = !audioConfig.paused;
    if (!audioConfig.paused) play(); else pause();
}

// Event
/**
 * 缓冲完毕时触发
 * @param event Event
 * @returns
 */
const audioLoadedMetaDataChange = (event: Event) => {
    audioConfig.duration = formatSongsTime(unref(audioRef)?.duration)
    audioConfig.waiting = false;
    emits("loadedmetadata", event)
}

/**
 * 可以开始播放时触发
 * @param event Event
 */
const audioCanplayChange = (event: Event) => {
    audioConfig.waiting = false;
    emits("canplay", event)
}

/**
 * 调用play()方法后触发
 * @param event Event
 */
const audioPlayChange = (event: Event) => {
    audioConfig.paused = false;
    unref(audioRef).volume = audioConfig.volume = 0.5;
    emits("play", event)
}

/**
 * 播放暂停触发
 * @param event Event
 */
const audioPauseChange = (event: Event) => {
    emits("pause", event)
    audioConfig.paused = true;
}

/**
 * 开始播放后触发
 * @param event Event
 */
const audioPlayingChange = (event: Event) => {
    emits("playing", event)
}

/**
 * 进度改变时触发
 * @param event Event
 */
const audioProgressChange = (event: Event) => {
    var bufferedTime = unref(audioRef)?.buffered;
    audioConfig.buffered = parseFloat((bufferedTime.end(bufferedTime.length - 1) / unref(audioRef)?.duration * 100).toFixed(2));
    emits("progress", event)
}

/**
 * 播放中触发
 * @param event Event
 */
const audioTimeUpdateChange = (event: Event) => {
    audioConfig.currentTime = formatSongsTime(unref(audioRef)?.currentTime);
    if (!audioConfig.isDragProgress) audioConfig.progress = parseFloat(formatProgress(unref(audioRef)?.duration, unref(audioRef)?.currentTime).toFixed(2));
    emits("timeupdate", audioConfig.progress, event)
}

/**
 * 音频位置发生改变后触发
 * @param event Event
 */
const audioSeekedChange = (event: Event) => {
    emits("seeked", event)
}

/**
 * 缓冲暂停播放时触发
 * @param event Event
 */
const audioWaitingChange = (event: Event) => {
    audioConfig.waiting = true;
    emits("waiting", event)
}

/**
 * 播放结束时触发
 * @param event Event
 */
const audioEndedChange = (event: Event) => {
    audioConfig.paused = true;
    emits("ended", event)
}

/**
 * 拖拽改变音频进度
 */
const progressMouseupChange = () => {
    unref(audioRef).currentTime = (audioConfig.progress / 100) * unref(audioRef)?.duration;
    audioConfig.isDragProgress = false;
}

defineExpose({
    src: props.src,
    autoplay: props.autoplay,
    loop: props.loop,
    muted: props.muted,
    paused: () => audioConfig.paused,
    volume: () => audioConfig.volume,
    progress: () => audioConfig.progress,
    buffered: () => audioConfig.buffered,
    currentTime: () => unref(audioRef)?.currentTime,
    duration: () => unref(audioRef)?.duration,
    play: play,
    pause: pause
})
</script>

<template>
    <div class="dj-audio">
        <div class="dj-audio__wrapper" :class="[!audioConfig.paused ? 'is-play' : '']">
            <div class="dj-audio-button__wrapper">
                <button class="dj-audio-button__play" :disabled="audioConfig.waiting" @click="audioSwitch">
                    <template v-if="!audioConfig.waiting">
                        <svg v-if="audioConfig.paused" class="icon" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 512 512">
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
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                                <path stroke-dasharray="2 4" stroke-dashoffset="6"
                                    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21">
                                    <animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite"
                                        values="6;0" />
                                </path>
                                <path stroke-dasharray="30" stroke-dashoffset="30"
                                    d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s"
                                        values="30;0" />
                                </path>
                                <path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s"
                                        values="10;0" />
                                </path>
                                <path stroke-dasharray="6" stroke-dashoffset="6"
                                    d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s"
                                        values="6;0" />
                                </path>
                            </g>
                        </svg>
                    </template>
                </button>
            </div>
            <div class="dj-audio-progress__wrapper">
                <span class="dj-audio-progress__start-time">{{ audioConfig.currentTime }}</span>
                <div class="dj-audio-progress__inner">
                    <audio class="dj-audio-process__audio" ref="audioRef" preload="auto"
                        @loadedmetadata="audioLoadedMetaDataChange" @progress="audioProgressChange"
                        @canplay="audioCanplayChange" @play="audioPlayChange" @playing="audioPlayingChange"
                        @pause="audioPauseChange" @timeupdate="audioTimeUpdateChange" @seeked="audioSeekedChange"
                        @waiting="audioWaitingChange" @ended="audioEndedChange">
                        <source type="audio/ogg" :src="src">
                        <source type="audio/mpeg" :src="src">
                    </audio>
                    <div class="dj-audio-buffered__bar"
                        :style="{ '--dj-audio-buffer-value': `${audioConfig.buffered}%` }">
                    </div>
                    <input type="range" :style="{ '--dj-audio-progress-value': `${audioConfig.progress}%` }"
                        v-model="audioConfig.progress" @mousedown="audioConfig.isDragProgress = true"
                        @mouseup="progressMouseupChange">
                </div>
                <span class="dj-audio-progress__end-time">
                    {{ audioConfig.duration }}
                </span>
            </div>
        </div>
    </div>
</template>
