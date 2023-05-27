<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFaceAgent } from '@mdi/js'
import type { FormInstance, FormRules } from 'element-plus'
import type { ICounselForm } from '~/types';

const formRef = ref<FormInstance>()
const form = reactive<ICounselForm>({
    name: '',
    phone: '',
    email: '',
    company: '',
    content: '',
})

const submitForm = () => {
    if (!formRef.value) return
    console.info("form: ", form, formRef.value)
    formRef.value.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const rules = reactive<FormRules>({
    name: [
        { required: true, message: '이름을 입력해주세요.', trigger: 'blur' },
        { min: 3, max: 5, message: '이름은 3글자 이상 이어야합니다.', trigger: 'blur' },
    ],
    phone: [
        {
            validator: (_rule, val, cb) => {
                if (!val || !isPhone(val)) {
                    cb(new Error("010-7184-9234 와 같은 형식으로 입력 해주세요."))
                } else {
                    cb()
                }
            },
            trigger: "blur"
        },
    ],
    email: [
        {
            validator: (_rule, val, cb) => {
                if (!val || !isEmail(val)) {
                    cb(new Error("email 형식에 맞춰주세요."))
                } else {
                    cb()
                }
            },
            trigger: "blur"
        },
    ]
})
</script>
<template>
    <el-popover trigger="click" placement="left" :width="600">
        <template #reference>
            <el-button size="large" circle
                style=" width: 3rem;height: 3rem; position: fixed; bottom: 10%; right: 10%; font-size: 1.1rem;"
                type="primary">문의</el-button>
        </template>
        <el-card>
            <el-descriptions class="margin-top" title="상담/견적 문의하기" :column="2" border>
                <!-- <template #extra>
                    <el-button type="primary">Operation</el-button>
                </template> -->
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <svg-icon size="24" class="icon-btn mx-2" type="mdi" :path="mdiFaceAgent" />
                            고객센터
                        </div>
                    </template>
                    1522-0884
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            카카오ID
                        </div>
                    </template>
                    hisoka27
                </el-descriptions-item>
            </el-descriptions>

            <el-form status-icon :rules="rules" ref="formRef" :model="form" label-width="120px">
                <el-form-item label="성함" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="연락처" prop="phone">
                    <el-input v-model="form.phone" />
                </el-form-item>
                <el-form-item label="이메일" prop="email">
                    <el-input v-model="form.email" />
                </el-form-item>
                <el-form-item label="소속" prop="company">
                    <el-input v-model="form.company" />
                </el-form-item>
                <el-form-item label="내용" prop="content">
                    <el-input v-model="form.content" type="textarea" />
                </el-form-item>
            </el-form>
            <el-divider />
            <el-row justify="end">
                <el-col :span="4">
                    <el-button @click.prevent="submitForm">제출</el-button>
                </el-col>
            </el-row>
        </el-card>
    </el-popover>
</template>
<style scoped>
.cell-item {
    display: flex;
    align-items: center;
}
</style>