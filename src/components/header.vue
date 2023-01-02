<template>
    <div id="headerPage">
        <ul>
            <li class="shopBox">
                <div class="img">
                    <Icon iconName="home" :size="28" />
                </div>
                <div class="myShop">
                    <div class="shopText">我的网店</div>
                    <div class="money">
                        <Icon class="moneyIcon" iconName="dollar-sign" :size="14" color="#FAC437" />
                        54986464
                    </div>
                </div>
                <div class="access" @click="access">存取</div>
            </li>
            <li class="like">
                <div>
                    <div class="text">信用等级</div>
                    <div class="num">10</div>
                </div>
            </li>
            <li class="like">
                <div>
                    <div class="text">粉丝数</div>
                    <div class="num">63190</div>
                </div>
            </li>
            <li class="like">
                <div>
                    <div class="last">服务星级</div>
                    <div class="rateBox">
                        <el-rate class="rate" v-model="rateValue" size="large" disabled text-color="#ff9900" />
                        <span class="rateNum">{{ rateValue }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="liveBroadcast">
            <div class="live" @click="liveShowDialog">
                <Icon class="icon" iconName="monitor" color="#FAC437" :size="16" :strokeWidth="3" />
                开启直播
            </div>
        </div>
        <el-dialog v-model="accessShow" :show-close="false" @closed="cleanNum">
            <template #header="{ close }">
                <DialogHeader titleName="存取" :close="close"></DialogHeader>
            </template>
            <div class="dialogMain">
                <div class="tabs">
                    <span :class="{ active: accessPage == 1 }" @click="whatPage(1)">提现</span>
                    <span :class="{ active: accessPage == 2 }" @click="whatPage(2)">存入</span>
                </div>
                <div class="tabsPage">
                    <div class="inPage page" v-if="accessPage == 1">
                        <div class="outMoney">
                            <Icon iconName="dollar-sign" :size="18" color="#FAC437" />提现金额
                        </div>
                        <div class="inpBox">
                            <span>$</span>
                            <input type="number" min="0" v-model="accessMoney" placeholder="0">
                        </div>
                        <div class="note">
                            <span>当前网店余额$ 5000000,</span>
                            <span class="accessBtn">全部提现</span>
                        </div>
                        <div class="dialogBtn">
                            <span class="cancel" @click="cancelAccessPage">取消</span>
                            <span class="ok" @click="accessFun">确定</span>
                        </div>
                    </div>
                    <div class="outPage page" v-if="accessPage == 2">
                        <div class="outMoney">
                            <Icon iconName="dollar-sign" :size="18" color="#FAC437" />存入金额
                        </div>
                        <div class="inpBox">
                            <span>$</span>
                            <input type="number" min="0" v-model="saveMoney" placeholder="0">
                        </div>
                        <div class="note">
                            <span>当前拥有现金$ 5000000</span>
                        </div>
                        <div class="dialogBtn">
                            <span class="cancel" @click="cancelAccessPage">取消</span>
                            <span class="ok">确定</span>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog v-model="liveBroad.liveShow" :show-close="false">
            <template #header="{ close }">
                <DialogHeader titleName="开启直播" :close="close"></DialogHeader>
            </template>
            <div class="liveMain">
                <p>*智力有利于增加订单和访客的数量</p>
                <p>*心智有利于增加粉丝数</p>
                <div class="liveTime">
                    <span>直播时间：</span>
                    <el-slider v-model="liveBroad.liveTime" :step="1" :max="14" :format-tooltip="liveTip"
                        placement="bottom" ref="liveSlider" :show-tooltip="false" />
                    <span class="note">{{ liveBroad.liveTime }}小时</span>
                </div>
                <div class="startLiveBtn">开启直播</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import DialogHeader from "@/components/dialogHeader.vue";
export default {
    components: { DialogHeader },
    data() {
        return {
            rateValue: 5,
            accessShow: false,
            accessPage: 1,
            accessMoney: "",
            saveMoney: "",
            liveBroad: {
                liveShow: false,
                liveTime: 0
            }
        };
    },
    computed: {

    },
    watch: {

    },
    methods: {
        access() {
            this.accessShow = true;
        },
        cancelAccessPage() {
            this.accessShow = false;
        },
        cleanNum() {
            this.accessMoney = "";
            this.saveMoney = "";
        },
        whatPage(num) {
            this.accessPage = num;
        },
        accessFun() {
            console.log(this.accessMoney);
        },
        liveShowDialog() {
            this.liveBroad.liveShow = true;
            this.$nextTick(() => {
                console.log(this.$refs.liveSlider, 123)
                // this.$refs.liveSlider.setPosition(70);
            })
        },
        liveTip(value) {
            return `${value}小时`
        },
    },
    created() {

    },
    mounted() {

    },
}
</script>
<style lang='scss' scoped>
:deep(.el-dialog) {
    width: 560px;
}

#headerPage {
    height: 100%;
    background: #393C47;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        height: 100%;
        align-content: center;

        li {
            position: relative;
            display: flex;
            align-items: center;

            &:before {
                content: " ";
                width: 1px;
                height: 30px;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -15px;
                background: #acacac;
            }

            &.shopBox {
                padding-right: 136px;

                .img {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    background: #dedede;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                }

                .myShop {
                    .shopText {
                        color: #FAC437;
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }

                    .money {
                        display: flex;
                        align-items: center;
                        line-height: 18px;
                        color: rgb(200, 200, 200);
                        font-weight: bold;

                        .moneyIcon {
                            margin-right: 4px;
                        }
                    }
                }

                .access {
                    position: absolute;
                    line-height: 22px;
                    padding: 0 22px;
                    background: #4B4E5B;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    right: 14px;
                    bottom: 10px;
                    cursor: pointer;
                    transition: all 200ms;
                    box-shadow: 0 2px 1px #32343c;

                    &:hover {
                        background: #464955;
                    }
                }
            }

            &.like {
                padding: 0 30px;

                .text,
                .last {
                    font-size: 12px;
                    color: #808491;
                    text-align: center;
                    font-weight: bold;
                    margin-bottom: 3px;
                }

                .num {
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                }

                .last {
                    text-align: left;
                }

                .rateBox {
                    display: flex;
                    align-items: center;

                    .rate {
                        height: auto;
                    }

                    .rateNum {
                        font-size: 16px;
                        font-weight: bold;
                        color: #fff;
                    }
                }

            }
        }

    }

    .liveBroadcast {
        .live {
            line-height: 22px;
            padding: 4px 10px;
            background: #4B4E5B;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 200ms;
            display: flex;
            align-items: center;
            border: 1px solid #27272e;

            &:hover {
                background: #464955;
            }

            .icon {
                margin-right: 6px;
            }
        }
    }
}


.dialogMain {
    width: 380px;
    margin: 0 auto;

    .tabs {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        span {
            width: 170px;
            height: 26px;
            font-size: 14px;
            font-weight: bold;
            line-height: 26px;
            border-radius: 13px;
            color: #ababab;
            background: #dedede;
            text-align: center;
            cursor: pointer;
            margin: 0 10px;
            transition: all 200ms;

            &:hover {
                background: #cecece;
            }

            &.active {
                background: #FECE44;
                color: #5d5d5d;
            }
        }
    }

    .tabsPage {
        padding: 0 10px 10px;

        .page {
            .outMoney {
                font-size: 16px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
            }

            .inpBox {
                border-bottom: 2px solid #c9c9c9;
                position: relative;
                height: 40px;
                color: rgb(79, 79, 79);
                margin-bottom: 8px;

                &::before {
                    content: " ";
                    width: 20px;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    background: #fff;
                }

                span {
                    position: absolute;
                    font-size: 30px;
                    font-weight: bold;
                    line-height: 36px;
                    left: 0;
                }

                input {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    padding-left: 30px;
                    outline: none;
                    font-size: 30px;
                    font-weight: bold;
                    color: rgb(116, 116, 116);
                }
            }

            .note {
                margin-bottom: 30px;

                span {
                    color: #666;
                    font-size: 14px;

                    &.accessBtn {
                        font-weight: bold;
                        color: rgb(67, 128, 220);
                        cursor: pointer;
                    }
                }
            }

            .dialogBtn {
                display: flex;
                justify-content: center;

                span {
                    font-size: 14px;
                    font-weight: bold;
                    width: 120px;
                    height: 32px;
                    margin: 0 20px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border-radius: 4px;
                    transition: all 200ms;

                    &.cancel {
                        border: 2px solid #a5a5a5;

                        &:hover {
                            background: #ededed;
                        }
                    }

                    &.ok {
                        background: #4A4D5B;
                        color: rgb(228, 228, 228);
                        box-shadow: 0 1px 1px #282a31;

                        &:hover {
                            background: #424551;
                        }
                    }
                }
            }
        }
    }
}

.liveMain {
    padding: 10px 70px;

    p {
        color: #999;
        font-weight: bold;
    }

    .liveTime {
        display: flex;
        align-items: center;
        margin-top: 14px;

        span {
            font-weight: bold;
            color: #999;
            width: 120px;

            &.note {
                width: 80px;
                margin-left: 14px;
            }
        }

        :deep(.el-slider__bar) {
            background: #535765;
        }

        :deep(.el-slider__button) {
            border-color: #464955;
            background: #535765;
            box-shadow: 0 0 1px #76777b;
        }

    }

    .startLiveBtn {
        font-weight: bold;
        color: rgb(219, 219, 219);
        border-radius: 4px;
        background: #41434f;
        line-height: 30px;
        text-align: center;
        width: 100px;
        margin: 40px auto 0;
        box-shadow: 0 1px 1px #32343d;

        &:hover {
            background: #484a57;
        }

        cursor: pointer;
    }
}
</style>