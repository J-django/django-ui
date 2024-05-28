<script lang="ts" setup>
// plugins
import { ref } from "vue";
import AudioSrc from '@/assets/audio/Uu - 自卑感.flac'
import VideoSrc from '@/assets/video/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_1080p_12000br.mp4'

// script
const accordion = ref(false);
const content = ref();
</script>

<template>
    <div class="layout">
        <div class="line">
            <dj-button>Default</dj-button>
            <dj-button disabled>Disabled Default</dj-button>
            <dj-button color="#0d6efd">Custom Primary</dj-button>
            <dj-button color="#0d6efd" disabled>Disabled Custom Primary</dj-button>
            <dj-button color="#d63384">Custom Pink</dj-button>
            <dj-button color="#d63384" disabled>Disabled Custom Pink</dj-button>
        </div>
        <div class="line">
            <dj-card align="center">
                Content
            </dj-card>
        </div>
        <div class="line">
            <dj-card align="center">
                <template #header>
                    Header
                </template>
                Content
            </dj-card>
        </div>
        <div class="line">
            <dj-card align="center">
                Content
                <template #footer>
                    Footer
                </template>
            </dj-card>
        </div>
        <div class="line">
            <dj-card align="center">
                <template #header>
                    Header
                </template>
                Content
                <template #footer>
                    Footer
                </template>
            </dj-card>
        </div>
        <div class="line">
            <dj-divider text="New Divider" />
        </div>
        <div class="line">
            <dj-divider text="New Divider" type="dashed" />
        </div>
        <div class="line">
            <dj-divider text="New Divider" type="dotted" />
        </div>
        <div class="line">
            <dj-accordion v-model="accordion" title="发现更美好的自己，追寻内心的光芒"
                content="在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。"></dj-accordion>
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" disabled />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" clear />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content">
                <template #prefix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <mask id="circleFlagsCn0">
                            <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#circleFlagsCn0)">
                            <path fill="#d80027" d="M0 0h512v512H0z" />
                            <path fill="#ffda44"
                                d="m140.1 155.8l22.1 68h71.5l-57.8 42.1l22.1 68l-57.9-42l-57.9 42l22.2-68l-57.9-42.1H118zm163.4 240.7l-16.9-20.8l-25 9.7l14.5-22.5l-16.9-20.9l25.9 6.9l14.6-22.5l1.4 26.8l26 6.9l-25.1 9.6zm33.6-61l8-25.6l-21.9-15.5l26.8-.4l7.9-25.6l8.7 25.4l26.8-.3l-21.5 16l8.6 25.4l-21.9-15.5zm45.3-147.6L370.6 212l19.2 18.7l-26.5-3.8l-11.8 24l-4.6-26.4l-26.6-3.8l23.8-12.5l-4.6-26.5l19.2 18.7zm-78.2-73l-2 26.7l24.9 10.1l-26.1 6.4l-1.9 26.8l-14.1-22.8l-26.1 6.4l17.3-20.5l-14.2-22.7l24.9 10.1z" />
                        </g>
                    </svg>
                </template>
            </dj-input>
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content">
                <template #suffix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <mask id="circleFlagsCn0">
                            <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#circleFlagsCn0)">
                            <path fill="#d80027" d="M0 0h512v512H0z" />
                            <path fill="#ffda44"
                                d="m140.1 155.8l22.1 68h71.5l-57.8 42.1l22.1 68l-57.9-42l-57.9 42l22.2-68l-57.9-42.1H118zm163.4 240.7l-16.9-20.8l-25 9.7l14.5-22.5l-16.9-20.9l25.9 6.9l14.6-22.5l1.4 26.8l26 6.9l-25.1 9.6zm33.6-61l8-25.6l-21.9-15.5l26.8-.4l7.9-25.6l8.7 25.4l26.8-.3l-21.5 16l8.6 25.4l-21.9-15.5zm45.3-147.6L370.6 212l19.2 18.7l-26.5-3.8l-11.8 24l-4.6-26.4l-26.6-3.8l23.8-12.5l-4.6-26.5l19.2 18.7zm-78.2-73l-2 26.7l24.9 10.1l-26.1 6.4l-1.9 26.8l-14.1-22.8l-26.1 6.4l17.3-20.5l-14.2-22.7l24.9 10.1z" />
                        </g>
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