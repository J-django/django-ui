<script lang="ts" setup>
// plugin
import "./index.less";

// script
defineOptions({
    name: "dj-button-group"
})
</script>

<template>
    <div class="dj-button-group">
        <div class="dj-button-group__wrapper">
            <slot></slot>
        </div>
    </div>
</template>