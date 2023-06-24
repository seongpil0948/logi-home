

<script lang="ts" setup>
import type { RowEventHandlers, Column } from "element-plus"
import { storeToRefs } from "pinia";


const rowKey = "id"
const { $router } = useNuxtApp()

const postStore = usePostStore()
const handler: RowEventHandlers = {
    onClick: (p) => {
        const d = p.rowData
        $router.push(`/post/${d.part}-${d.ctgr ?? 'default'}/${String(d[p.rowKey])}`)
    }
}
const { postAll } = storeToRefs(postStore)
const columns: Column[] = [
    {
        key: 'part',
        dataKey: `part`,
        title: '분류',
        width: 100,
    },
    {
        key: 'title',
        dataKey: `title`,
        title: '제목',
        width: 150,
    },
    {
        key: 'updateDate',
        dataKey: `updateDate`,
        title: '작성일',
        width: 100,
    }
]
const data = computed(() => postAll.value)
</script>

<template>
    <el-table-v2 :row-event-handlers="handler" :row-key="rowKey" :columns="columns" :data="data" class="mx-auto"
        :width="700" :height="400" fixed>
        <template #empty>
            <div class="flex items-center justify-center h-100%">
                <el-empty />
            </div>
        </template>
    </el-table-v2>
</template>