<template>
    <i :data-feather="iconName" :color="color" :stroke-width="strokeWidth" :width="size" :height="size"></i>
</template>

<script setup>
import feather from "feather-icons";
import { onMounted } from "vue";
const { iconName, color, strokeWidth, size } = defineProps({
    iconName: {
        type: String,
        default: "home"
    },
    color: {
        type: String,
    },
    strokeWidth: {
        type: Number,
        default: 3
    },
    size: {
        type: Number,
        default: 24
    }
})
onMounted(() => {
    feather.replace();
})

</script>
<style lang='scss' scoped>

</style>