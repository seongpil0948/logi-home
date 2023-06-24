<script setup lang="ts">
import { uuidv4 } from "@firebase/util";
import { FormInstance } from "element-plus";
import { IPost, PostPart, IPostForm } from "~/types";
import { deleteObject } from "firebase/storage";
import AppEditor from "~/components/AppEditor.vue"

const { $firebase } = useNuxtApp()
const postModel = reactive<IPostForm>({
    title: '',
    content: '',
    order: 1,
    part: PostPart.CS,
    category: undefined
})
const contentRef = ref<InstanceType<typeof AppEditor> | undefined>()
function resetPost() {
    postModel.id = uuidv4()
    postModel.title = ''
    postModel.category = ''
    postModel.content = ''
    contentRef.value?.clear()
}

const formRef = ref<FormInstance>()
let isSaved = false
onMounted(() => {
    addEventListener("unload", async () => {
        console.info("on unload", isSaved, contentRef.value)
        if (!isSaved && contentRef.value) {
            await deleteAllUrls()
        }
    })
})

const deleteAllUrls = async () => {
    if (!contentRef.value) return
    const refs = contentRef.value.getStorageRefs()
    console.info("refs: ", refs)
    for (let i = 0; i < refs.length; i++) {
        const r = refs[i]
        console.info("try delete url: ", r.fullPath)
        await deleteObject(r)
        console.info("successfully deleted url: ", r.fullPath)
    }
}

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl || !contentRef)
        return
    formEl.validate(async (valid) => {
        if (valid) {
            postModel.id = uuidv4()
            postModel
            const data: IPost = {
                id: uuidv4(),
                part: postModel.part ?? PostPart.CS,
                category: postModel.category ?? '',
                title: postModel.title ?? "",
                content: contentRef.value?.getMarkdown() ?? '',
                order: postModel.order ?? -1,
                isCategory: false,
                createDate: new Date(),
                updateDate: new Date()
            }
            console.log('submit!', data)
            await setDoc(doc($firebase.store, 'posts', data.id), data)
            isSaved = true
            useNuxtApp().$router.push("/")
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
                    <span class="w-64">게시글 작성</span>
                    <el-select v-model="postModel.part" class="m-2" placeholder="Select" size="large">
                        <el-option v-for="item in [
                            {
                                value: PostPart.CS,
                                label: '고객센터 FAQ',
                            },
                            {
                                value: PostPart.SERVICE,
                                label: '서비스',
                            },
                            {
                                value: PostPart.GALLERY,
                                label: '현장갤러리',
                            },
                        ]" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-input v-model="postModel.category" placeholder="카테고리" />
                </div>
            </template>
            <el-form ref="formRef" :model="postModel" label-width="120px">
                <el-form-item label="제목 입력">
                    <el-input v-model="postModel.title" placeholder="Wifi 설치 방법" />
                </el-form-item>
                <el-form-item label="작성란">
                    <AppEditor ref="contentRef" parent-path="post" />
                </el-form-item>
                <el-form-item>
                    <el-button size="large" style="margin-left: auto;" @click="() => submitForm(formRef)">
                        제출
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button size="large" style="margin-left: auto;" @click="deleteAllUrls">
                        파일 모두 삭제
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
