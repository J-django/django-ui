<script lang="ts" setup name="dj-audio">
// plugins
import "./index.less"
import { ref, reactive } from 'vue'

// script
defineProps({
    src: {
        type: String,
        default: ""
    }
})

const audioRef = ref();

const emits = defineEmits([])

const audioConfig = reactive({
    loading: <boolean>true,
    state: <boolean>false,
    isDragProgress: <boolean>false,
    progress: <number>0,
    buffered: <number>0,
    currentTime: <string>"00:00",
    duration: <string>"00:00"
})

/**
 * 格式化音频时间
 * @param duration 
 */
const formatSongsTime = (duration: any) => {
    var m = Math.floor(duration % 3600 / 60);
    var s = Math.floor(duration % 3600 % 60);

    var mDisplay = m > 0 ? (m < 10 ? "0" + m : m) : "00";
    var sDisplay = s > 0 ? (s < 10 ? "0" + s : s) : "00";

    return mDisplay + ":" + sDisplay;
};

/**
 * 播放
 */
const play = () => {
    audioRef.value.play();
}

/**
 * 暂停
 */
const pause = () => {
    audioRef.value.pause();
}

/**
 * 音频状态切换
 */
const audioSwitch = () => {
    audioConfig.state = !audioConfig.state;
    if (audioConfig.state)
        play();
    else
        pause();
}

// Event
// 缓冲完毕时触发
const progressLoadedMetaDataChange = () => {
    audioConfig.duration = formatSongsTime(audioRef.value.duration)
    audioConfig.loading = false;
}

/**
 * 格式化播放进度
 * @param duration 
 * @param currentTime 
 */
const formatProgress = (duration: any, currentTime: any) => {
    const percentage: any = currentTime / duration;
    const currentProgress = percentage * 100;
    return currentProgress;
};

// 开始播放时触发
const progressPlayingChange = () => {
    audioRef.value.volume = 0.3;
}

/**
 * 进度改变时触发
 */
const progressChange = () => {
    var bufferedTime = audioRef.value.buffered;
    audioConfig.buffered = bufferedTime.end(bufferedTime.length - 1) / audioRef.value.duration * 100
}

// 播放中触发
const progressTimeUpdateChange = () => {
    audioConfig.currentTime = formatSongsTime(audioRef.value.currentTime);
    if (!audioConfig.isDragProgress) audioConfig.progress = formatProgress(audioRef.value.duration, audioRef.value.currentTime)
}

// 播放结束时触发
const progressEndedChange = () => {
    audioConfig.state = false;
}

/**
 * 拖拽改变音频进度
 */
const progressDragChange = () => {
    audioRef.value.currentTime = audioConfig.progress / 100 * audioRef.value.duration;
    console.log(audioRef.value.currentTime)
    audioConfig.isDragProgress = false;
}
</script>

<template>
    <div class="dj-audio">
        <div class="dj-audio__wrapper">
            <div class="dj-audio-button__wrapper">
                <button class="dj-audio-button__play" @click="audioSwitch">
                    <svg v-if="!audioConfig.state" class="icon" xmlns="http://www.w3.org/2000/svg" width="32"
                        height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                    </svg>
                    <!-- <svg v-if="!audioConfig.state" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-play-fill icon" viewBox="0 0 16 16">
                        <path
                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-pause-fill icon" viewBox="0 0 16 16">
                        <path
                            d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                    </svg> -->
                </button>
            </div>
            <div class="dj-audio-progress__wrapper">
                <span class="dj-audio-progress__start-time">{{ audioConfig.currentTime }}</span>
                <div class="dj-audio-progress__inner">
                    <audio class="dj-audio-process__audio" ref="audioRef" preload="auto"
                        @loadedmetadata="progressLoadedMetaDataChange" @progress="progressChange"
                        @playing="progressPlayingChange" @timeupdate="progressTimeUpdateChange"
                        @ended="progressEndedChange">
                        <source type="audio/ogg" :src="src">
                        <source type="audio/mpeg" :src="src">
                    </audio>
                    <div class="dj-audio-buffered__bar" :style="{ '--buffer-value': `${audioConfig.buffered}%` }">
                    </div>
                    <input type="range" :style="{ '--progress-value': `${audioConfig.progress}%` }"
                        v-model="audioConfig.progress" @mousedown="audioConfig.isDragProgress = true"
                        @mouseup="progressDragChange">
                </div>
                <span class="dj-audio-progress__end-time">
                    <svg v-if="audioConfig.loading" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                        <circle cx="18" cy="12" r="0" fill="currentColor">
                            <animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s"
                                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                                values="0;2;0;0" />
                        </circle>
                        <circle cx="12" cy="12" r="0" fill="currentColor">
                            <animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s"
                                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                                values="0;2;0;0" />
                        </circle>
                        <circle cx="6" cy="12" r="0" fill="currentColor">
                            <animate attributeName="r" begin="0" calcMode="spline" dur="1.5s"
                                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                                values="0;2;0;0" />
                        </circle>
                    </svg>
                    <span v-else>{{ audioConfig.duration }}</span>
                </span>
            </div>
        </div>
    </div>
</template>
