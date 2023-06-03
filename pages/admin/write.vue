<script setup lang="ts">
import { doc, setDoc } from "@firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { FormInstance } from "element-plus";
import AppEditor from "~/components/AppEditor.vue"
const { $firebase } = useNuxtApp()
export interface IPost {
    id: string;
    title: string;
    content: string;
    order: number;
    parentId?: string;
    isCategory: boolean;
    createDate: Date;
    updateDate: Date;
}

const postModel = reactive<IPost>({
    id: uuidv4(),
    title: '',
    content: '',
    order: 1,
    isCategory: false,
    createDate: new Date(),
    updateDate: new Date()
})
const contentRef = ref<InstanceType<typeof AppEditor> | undefined>()
function resetPost() {
    postModel.id = uuidv4()
    postModel.title = ''
    postModel.content = ''
    contentRef.value?.clear()
}
const formRef = ref<FormInstance>()
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl || !contentRef)
        return
    formEl.validate(async (valid) => {
        postModel.content = contentRef.value?.getMarkdown() ?? ''
        if (valid) {
            console.log('submit!', postModel)
            setDoc(doc($firebase.store, 'posts'), postModel)
            resetPost()
        }
        else {
            console.log('error submit!')
            return false
        }
    })
}
</script>
<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>가이드 작성 양식</span>
                </div>
            </template>
            <el-form ref="formRef" :model="postModel" label-width="120px">
                <el-form-item label="제목 입력">
                    <el-input v-model="postModel.title" placeholder="Wifi 설치 방법" />
                </el-form-item>
                <el-form-item label="작성란">
                    <!-- <el-input
            v-model="postModel.content"
            :rows="4"
            type="textarea"
            placeholder="1번 LAN을 연결 합니다"
          /> -->
                    <AppEditor ref="contentRef" />
                </el-form-item>
                <el-form-item>
                    <el-button size="large" style="margin-left: auto;" @click="submitForm(formRef)">
                        제출
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
