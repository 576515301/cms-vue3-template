<template>
    <div id='loginPage'>
        <el-form ref="loginFrom" :rules="rules" :model="loginData" label-width="120px">
            <el-form-item label="账号" prop="userName">
                <el-input v-model="loginData.userName" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginData.password" />
            </el-form-item>
            <el-button type="primary" @click="submitLogin(loginFrom)">
                登录
            </el-button>
            <!-- <el-button type="danger" @click="resetRegister(ruleFormRef)">注册</el-button> -->
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useUserStore } from '@store/user.js'


const loginData = reactive({
    userName: '',
    password: ''
})
const rules = reactive({
    userName: [{ required: true, message: '请输入您的账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入您的密码', trigger: 'blur' }],
})
const loginFrom = ref();
const userStore = useUserStore();


const submitLogin = fromDom => {
    if (!fromDom) return;
    fromDom.validate(async valid => {
        if (!valid) return;
        await userStore.login(loginData);
    })
}
</script>

<style lang='scss' scoped>

</style>