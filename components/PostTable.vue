

<script lang="tsx" setup>
import type { RowEventHandlers, Column } from "element-plus"
import { ElTag } from "element-plus"
import { storeToRefs } from "pinia";
import { IPost, PostPart } from "types";

const props = defineProps<{
    part?: PostPart
    category?: string
}>()
const { part, category } = toRefs(props)

const rowKey = "id"
const { $router } = useNuxtApp()
const postStore = usePostStore()
const { postAll } = storeToRefs(postStore)

const { width, height } = useWindowSize({ initialHeight: 500, initialWidth: 500 })
const handler: RowEventHandlers = {
    onClick: (p) => {
        const d: IPost = p.rowData
        $router.push(`/post/${d.part}-${d.category ?? 'default'}/${String(d.id)}`)
    }
}
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
        cellRenderer: (p: { cellData: IPost }) => {
            const d = p.cellData
            return <ElTag>{formatDate(loadDate(d.updateDate), "MIN")}</ElTag>
        },
    }
])
const data = computed(() => part?.value
    ? postStore.filteredPosts(part.value, category?.value)
    : postAll.value)
</script>

<template>
    <el-card>
        <el-table-v2 :row-event-handlers="handler" :row-key="rowKey" :columns="columns" :data="data" class="mx-auto"
            :width="width * 0.8" :height="height" fixed>
            <template #empty>
                <div class="flex items-center justify-center h-100%">
                    <el-empty />
                </div>
            </template>
        </el-table-v2>
    </el-card>
</template>