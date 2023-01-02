<template>
    <div id="pageComponent">
        <div class="header">
            <div class="header-main">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>

</script>
<style lang='scss' scoped>
#pageComponent {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 70px;

    .header {
        width: 100%;
        height: 70px;
        background: #898F9C;
        padding: 10px 20px;
        position: absolute;
        top: 0;
        left: 0;

        .header-main {
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 20px;
        }
    }

    .main {
        width: 100%;
        height: 100%;
    }
}
</style>