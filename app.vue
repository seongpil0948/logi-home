<template>
  <v-app>
    <NuxtLayout :name="layout">
      <NuxtPage />
      <!-- <div>Post state: {{ resDataSuccess }}</div>
  <div>Get Data: {{ (resData as any).text }}</div>       -->
    </NuxtLayout>
  </v-app>
</template>
<script setup lang="ts">
const layout = "default-pc";
// setPageLayout("default-mobile");
</script>
