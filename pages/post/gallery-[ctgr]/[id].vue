<script setup lang="ts">
const route = useRoute()
const postStore = usePostStore()
const post = computed(() => postStore.postAll.find((x) => route.params.id === String(x.id)))
</script>
<template>
    <el-card class="px-5">
        <h2> {{ post?.title }}</h2>
        <el-empty v-if="!post" />
        <div v-else>
            <editor-view :content="post.content" />
        </div>
    </el-card>
</template>