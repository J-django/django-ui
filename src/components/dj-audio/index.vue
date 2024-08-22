<script lang="ts" setup>
// plugin
import "./index.less"
import { unref } from 'vue'
import { DJAudioOptions, DJAudioProps, DJAudioEmits, useAudio } from './useAudio'

// script
defineOptions(DJAudioOptions)
const props = defineProps(DJAudioProps)
const emits = defineEmits<DJAudioEmits>()
const { audioRef, audioConfig, load, play, pause, toggle, DJAudio_LoadedMetaDataChange, DJAudio_CanplayChange, DJAudio_PlayChange, DJAudio_PauseChange, DJAudio_PlayingChange, DJAudio_ProgressChange, DJAudio_TimeUpdateChange, DJAudio_SeekedChange, DJAudio_WaitingChange, DJAudio_EndedChange, DJAudio_ProgressMouseupChange } = useAudio(emits);

defineExpose({
    src: props.src,
    autoplay: props.autoplay,
    loop: props.loop,
    muted: props.muted,
    load,
    play,
    pause,
    toggle,
    paused: () => audioConfig.paused,
    volume: () => audioConfig.volume,
    progress: () => audioConfig.progress,
    buffered: () => audioConfig.buffered,
    currentTime: () => unref(audioRef)?.currentTime,
    duration: () => unref(audioRef)?.duration
})
</script>

<template>
    <div class="dj-audio">
        <div class="dj-audio__wrapper"
            :class="[!audioConfig.paused ? 'is-play' : '', transition ? 'is-transition' : '']">
            <div class="dj-audio-button__wrapper">
                <button class="dj-audio-button__play" :disabled="audioConfig.waiting" @click="toggle">
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
                        @loadedmetadata="DJAudio_LoadedMetaDataChange" @progress="DJAudio_ProgressChange"
                        @canplay="DJAudio_CanplayChange" @play="DJAudio_PlayChange" @playing="DJAudio_PlayingChange"
                        @pause="DJAudio_PauseChange" @timeupdate="DJAudio_TimeUpdateChange"
                        @seeked="DJAudio_SeekedChange" @waiting="DJAudio_WaitingChange" @ended="DJAudio_EndedChange">
                        <source type="audio/ogg" :src="src">
                        <source type="audio/mpeg" :src="src">
                    </audio>
                    <div class="dj-audio-buffered__bar"
                        :style="{ '--dj-audio-buffer-value': `${audioConfig.buffered}%` }">
                    </div>
                    <input type="range" :style="{ '--dj-audio-progress-value': `${audioConfig.progress}%` }"
                        v-model="audioConfig.progress" @mousedown="audioConfig.isDragProgress = true"
                        @mouseup="DJAudio_ProgressMouseupChange">
                </div>
                <span class="dj-audio-progress__end-time">
                    {{ audioConfig.duration }}
                </span>
            </div>
        </div>
    </div>
</template>
