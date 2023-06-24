

<script lang="tsx" setup>
import type { RowEventHandlers, Column } from "element-plus"
import { storeToRefs } from "pinia";
import { IPost } from "types";


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
const { width, height } = useWindowSize()

const columns = computed<Column[]>(() => [
    {
        key: 'part',
        dataKey: `part`,
        title: '분류',
        width: width.value * 0.1,
    },
    {
        key: 'title',
        dataKey: `title`,
        title: '제목',
        width: width.value * 0.4,
    },
    {
        key: 'updateDate',
        dataKey: `updateDate`,
        title: '작성일',
        width: width.value * 0.3,
        cellRender: (p: { rowData: IPost }) => {
            const d = p.rowData
            console.log("hio")
            return <span>{formatDate(loadDate(d.updateDate), "MIN")}</span>
        }
    }
])
const data = computed(() => postAll.value)
</script>

<template>
    <el-table-v2 :row-event-handlers="handler" :row-key="rowKey" :columns="columns" :data="data" class="mx-auto"
        :width="width * 0.8" :height="height" fixed>
        <template #empty>
            <div class="flex items-center justify-center h-100%">
                <el-empty />
            </div>
        </template>
    </el-table-v2>
</template>