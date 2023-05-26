<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
    <!-- <div>Post state: {{ resDataSuccess }}</div>
  <div>Get Data: {{ (resData as any).text }}</div>       -->
  </NuxtLayout>
</template>
<script setup lang="ts">
const layout = "default-pc";
// setPageLayout("default-mobile");
</script>
<style lang="scss">
@import "assets/element.scss";
</style>