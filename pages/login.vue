<template>
    <el-card class="h-2/4 ma-auto">
        <template #header>
            <div class="card-header">
                <span>로그인</span>
            </div>
        </template>
        <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="120px"
            class="demo-loginForm">
            <el-form-item label="ID" prop="id">
                <el-input v-model="loginForm.id" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="PASSWORD" prop="pass">
                <el-input v-model="loginForm.pass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(loginFormRef)">Submit</el-button>
                <el-button @click="resetForm(loginFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const loginFormRef = ref<FormInstance>()


const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (loginForm.pass !== '1q2w3e') {
            callback(new Error('패스워드가 틀림'))
        }
        callback()
    }
}
const validateId = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('ID를 입력해주세요.'))
    } else if (value !== 'jssh0022') {
        callback(new Error("ID가 틀렸습니다."))
    } else {
        callback()
    }
}

const loginForm = reactive({
    pass: '',
    id: '',
})

const rules = reactive<FormRules>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    id: [{ validator: validateId, trigger: 'blur' }],
})
const { $authStore, $router } = useNuxtApp()

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            $authStore.login()
            $router.push("/admin/write")
            console.log('submit!', $authStore, $router)
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
