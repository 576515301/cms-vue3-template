<template>
    <div id='homePage'>这是首页
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <div>{{ data }}</div>
        <Menu :msg="data"></Menu>
    </div>
</template>

<script setup>
import Menu from "@components/menu.vue";
import { ref, reactive } from 'vue'


const data = ref("你好啊")
const obj = reactive({ a: 1 })
</script>

<style lang='scss' scoped>

</style>