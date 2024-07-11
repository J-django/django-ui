<script lang="ts" setup>
// plugin
import { ref } from "vue";
// import AudioSrc from '@/assets/audio/Uu - 自卑感.flac'
// import VideoSrc from '@/assets/video/1579780393-1-192.mp4'

// script
const accordion = ref(false);
const content = ref();
const accordionDisabled = ref(true);
const accordionTitle = ref("发现更美好的自己，追寻内心的光芒");
const accordionValue = ref("在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。");

const segmentedValue = ref("apple");
const segmentedArray = ref([
    "apple",
    { label: "banana", value: "banana", disabled: true },
    { label: "cherry", value: "cherry", disabled: false },
    { label: "date", value: "date", disabled: true },
    { label: "elderberry", value: "elderberry", disabled: false },
    { label: "fig", value: "fig", disabled: true },
    { label: "grape", value: "grape", disabled: true },
    "honeydew"
])

const switchValue = ref(false);

const modalValue = ref(false);

const modalToggle = () => {
    modalValue.value = !modalValue.value;
}

const toggleAccordion = () => {
    accordion.value = !accordion.value;
}

const toggleDisabled = () => {
    accordionDisabled.value = !accordionDisabled.value;
}

const switchChange = () => { }
</script>

<template>
    <div class="layout">
        <div class="line">
            <dj-button @click="modalToggle">modal toggle</dj-button>
            <dj-dialog v-model="modalValue" title="Title">
                This is Dialog!
                <!-- <template #footer>
                    <dj-button plain @click="modalValue = false" style="height: 28px;">Closed</dj-button>
                    <dj-button color="#0d6efd" @click="modalValue = false" style="height: 28px;">Confirm</dj-button>
                </template> -->
            </dj-dialog>
        </div>
        <div class="line">
            <dj-switch v-model="switchValue" @change="switchChange" checked-label="checked label"
                unChecked-label="Unchecked label">
                <template #checked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.61 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93s-1.93-.86-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36s-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96c1.05-1.12 3.67-1.69 5.14-1.69c.53 0 1.2.08 1.9.22c-1.64.87-1.9 2.02-1.9 2.68M12 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13c1.07 0 2.92.39 3.84 1.15C18.28 17.88 15.39 20 12 20" />
                    </svg>
                </template>
                <template #unChecked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 4c-4.42 0-8 3.58-8 8c0 1.95.7 3.73 1.86 5.12a9.947 9.947 0 0 1 12.28 0A7.957 7.957 0 0 0 20 12c0-4.42-3.58-8-8-8m0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13"
                            opacity=".3" />
                        <path fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5m6.14-2.88a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12" />
                        <path fill="currentColor"
                            d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5" />
                    </svg>
                </template>
            </dj-switch>
        </div>
        <div class="line">
            <dj-divider align="left" type="dashed" label="New Divider" :offset="10" />
        </div>
        <div class="line">
            <dj-segmented :data="segmentedArray" v-model="segmentedValue" />
        </div>
        <div class="line">
            <dj-button>Default</dj-button>
            <dj-button disabled>Disabled Default</dj-button>
            <dj-button color="#6610f2">Custom Pink</dj-button>
            <dj-button color="#6610f2" disabled>Disabled Custom Pink</dj-button>
            <dj-button plain>Plain</dj-button>
            <dj-button plain disabled>Disabled Plain</dj-button>
            <dj-button color="#3c3c43" plain>Custom Plain</dj-button>
            <dj-button color="#3c3c43" plain disabled>Disabled Custom Plain</dj-button>
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
                <template #suffix>
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
        <!-- <div class="line">
            <dj-audio :src="AudioSrc" />
        </div>
        <div class="line">
            <dj-video :src="VideoSrc" width="100%" min-height="400px" />
        </div> -->
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