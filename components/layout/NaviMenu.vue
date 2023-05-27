<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<template>
    <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="/"><el-image fit="contain" src="/logo.png" /></el-menu-item>
        <div class="flex-grow" />
        <!-- <el-menu-item index="/intro">회사소개</el-menu-item>
        <el-sub-menu index="/service">
            <template #title>서비스</template>
            <el-menu-item index="/service/milk-run">밀크런</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/cs">
            <template #title>고객지원</template>
            <el-menu-item index="/cs/inquiry">문의목록</el-menu-item>
            <el-menu-item index="/cs/inquiry/write">문의하기</el-menu-item>
        </el-sub-menu> -->
    </el-menu>
</template>


<style>
.flex-grow {
    flex-grow: 1;
}
</style>
