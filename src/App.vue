<template>
  <RouterView />
</template>

<script setup>

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
::v-deep .el-dialog {
  border-radius: 8px;
  overflow: hidden;
}

::v-deep .el-dialog__header {
  background: #535765;
  padding: 0;
  margin: 0;
}
</style>
