<template>
    <div id='homePage'>这是首页
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <div>{{ data }}</div>
        <Menu></Menu>
    </div>
</template>

<script setup>
const data = ref(123)
</script>

<style lang='sass' scoped>

</style>