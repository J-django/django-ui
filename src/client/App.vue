<script lang="ts" setup>
// plugin
import { ref } from "vue";
import AudioSrc from '@/assets/audio/Uu - 自卑感.flac'
import VideoSrc from '@/assets/video/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_1080p_12000br.mp4'

// script
const accordion = ref(false);
const content = ref();
const accordionDisabled = ref(true);
const accordionTitle = ref("发现更美好的自己，追寻内心的光芒");
const accordionValue = ref("在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。");

const switchValue = ref("apple");
const switchArray = ref([
    "apple",
    { label: "banana", value: "banana", disabled: true },
    { label: "cherry", value: "cherry", disabled: false },
    { label: "date", value: "date", disabled: true },
    { label: "elderberry", value: "elderberry", disabled: false },
    { label: "fig", value: "fig", disabled: true },
    { label: "grape", value: "grape", disabled: true },
    "honeydew"
])

const toggleAccordion = () => {
    accordion.value = !accordion.value;
}

const toggleDisabled = () => {
    accordionDisabled.value = !accordionDisabled.value;
}
</script>

<template>
    <div class="layout">
        <div class="line">
            <dj-divider align="left" type="dashed" label="New Divider" :offset="10" />
        </div>
        <div class="line">
            <dj-segmented :data="switchArray" v-model="switchValue" />
        </div>
        <div class="line">
            <dj-button>Default</dj-button>
            <dj-button disabled>Disabled Default</dj-button>
            <dj-button color="#6610f2">Custom Pink</dj-button>
            <dj-button color="#6610f2" disabled>Disabled Custom Pink</dj-button>
        </div>
        <div class="line">
            <dj-card align="center" ghosting>
                Content
            </dj-card>
        </div>
        <div class="line">
            <dj-divider label="New Divider" />
        </div>
        <div class="line">
            <dj-button style="margin-bottom: 8px;" @click="toggleAccordion">toggle accordion</dj-button>
            <dj-button style="margin-bottom: 8px;" @click="toggleDisabled">toggle disabled</dj-button>
            <dj-accordion v-model="accordion" :disabled="accordionDisabled" :title="accordionTitle"
                :content="accordionValue" />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" clear />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content">
                <template #prefix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </template>
            </dj-input>
        </div>
        <div class="line">
            <dj-textarea placeholder="Please Input" v-model="content" />
        </div>
        <div class="line">
            <dj-audio :src="AudioSrc" />
        </div>
        <div class="line">
            <dj-video :src="VideoSrc" width="100%" min-height="400px" />
        </div>
    </div>
</template>

<style type="less">
.layout {
    display: flex;
    flex-direction: column;

    .line {
        margin-bottom: rem(8px);
        padding-bottom: rem(8px);
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
}
</style>