<template>
    <div>这是props:{{ msg }}</div>
</template>

<script setup>
const { msg } = defineProps(['msg'])
</script>

<style lang='scss' scoped>

</style>