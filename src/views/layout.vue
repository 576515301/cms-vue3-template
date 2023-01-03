<template>
    <el-container class="appPage">
        <el-aside class="aside" width="200px">
            <div class="manageName">
                <img class="logo" src="../assets/imagess/logo.png" alt="">
                <span class="name">淘货</span>
            </div>
            <Nav></Nav>
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header></Header>
            </el-header>
            <el-main>
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Nav from "@components/nav.vue";
import Header from "@components/header.vue";
import { onMounted } from "vue";
import { useUserStore } from '@store/user.js'

const userStore = useUserStore();

// onMounted(async () => {
//     await userStore.userInfo()
// })



</script>

<style lang='scss' scoped>
.appPage {
    height: 100%;

    .aside {
        background: #4B4E5B;

        .manageName {
            height: 60px;
            display: flex;
            align-items: center;
            padding-left: 40px;
            box-shadow: 0 5px 10px #393C47;

            .logo {
                width: 38px;
                height: 38px;
            }

            .name {
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                display: flex;
                align-items: center;
                padding-left: 10px;
            }
        }
    }

    .header {
        background: #393C47;
    }

    .el-main {
        padding: 0;
    }
}

// 重置dialog头部样式
:deep(.el-dialog) {
    border-radius: 8px;
    overflow: hidden;
}

:deep(.el-dialog__header) {
    background: #535765;
    padding: 0;
    margin: 0;
}
</style>