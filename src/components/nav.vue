<template>
    <div id="navPage">
        <ul class="navList">
            <li class="navItem" v-for="v in navList" :key="v.id">
                <div class="itemBox" :class="{ 'active': active == v.id }" @click="activeItem(v)">
                    <Icon class=" icon" :iconName="v.icon" :size="26" />
                    {{ v.name }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'

const navList = reactive([
    { name: "首页", id: 1, icon: "home", path: "/home" },
    { name: "商品", id: 2, icon: "shopping-bag", path: "/productList" },
    { name: "订单", id: 3, icon: "table", path: "" },
    { name: "售后", id: 4, icon: "headphones", path: "" },
    { name: "员工", id: 5, icon: "users", path: "" },
    { name: "评价", id: 6, icon: "thumbs-up", path: "" }
]);
const active = ref(1);
const router = useRouter();
watch(
    () => router.currentRoute.value.path,
    newPath => {
        if (!navList.length) return;
        let nowPath = navList.find(v => newPath == v.path);
        active.value = nowPath ? nowPath.id : "";
    },
    {
        immediate: true,
    }
)

const activeItem = (item) => {
    active.value = item.id
    router.push(item.path)
}

</script>
<style lang='scss' scoped>
.navList {
    padding-top: 30px;

    .navItem {
        padding-left: 20px;
        margin-bottom: 30px;
        height: 40px;

        .itemBox {
            border-radius: 20px 0 0 20px;
            cursor: pointer;
            height: 100%;
            font-size: 18px;
            font-weight: bold;
            color: #808491;
            position: relative;
            text-align: center;
            line-height: 40px;

            &:hover {
                background: #535765;
            }

            &.active {
                background: #FAC437;
                color: #fff;

                &::before {
                    content: "";
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: #FAC437;
                    position: absolute;
                    left: 0;
                    top: -10px;
                }
            }

            .icon {
                position: absolute;
                left: 16px;
                top: 50%;
                margin-top: -14px;
            }

        }
    }
}
</style>