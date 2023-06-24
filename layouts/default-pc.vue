<template>
  <el-container class="bg-zinc-100; w-screen; h-screen" direction="vertical">
    <layout-app-bar-top />
    <el-main>
      <slot />
    </el-main>

    <layout-footer />
    <inquiry-fab />
  </el-container>
</template>
<style>
body {
  padding: 0 !important;
  margin: 0 !important
}
</style>