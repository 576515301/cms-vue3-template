<template>
    <div class="dialogTitle">
        <div class="title">{{ titleName }}</div>
        <span class="closeBox" @click="close">
            <Icon class="closeBtn" iconName="x" color="#fff" :strokeWidth="3" :size="30" />
        </span>
    </div>
</template>

<script>

export default {
    props: ["titleName", "close"],
    components: {},
    data() {
        return {

        };
    },
    computed: {

    },
    watch: {

    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
}
</script>
<style lang='scss' scoped>
.dialogTitle {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

    .title {
        color: #FECE44;
        font-size: 18px;
        line-height: 33px;
        font-weight: bold;
    }

    .closeBtn {
        cursor: pointer;
        transition: all 200ms;

        &:hover {
            color: #dedede;
        }
    }
}
</style>