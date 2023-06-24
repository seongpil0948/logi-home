<script lang="ts" setup>

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFaceAgent } from '@mdi/js'
import { PostPart } from '@/types';
</script>
<template>
    <el-card w-screen>
        <el-tabs type="border-card" class="demo-tabs">
            <el-tab-pane>
                <template #label>
                    <svg-icon size="24" class="my-auto custom-tabs-label" type="mdi" :path="mdiFaceAgent" />
                </template>
                <post-table />
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <div class="custom-tabs-label">고객센터</div>
                </template>
                <post-table :part="PostPart.CS" />
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <div class="custom-tabs-label">갤러리</div>
                </template>
                <post-table :part="PostPart.GALLERY" />
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <div class="custom-tabs-label">서비스</div>
                </template>
                <post-table :part="PostPart.SERVICE" />
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>


<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>
