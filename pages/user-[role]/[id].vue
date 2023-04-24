<template>
  <div>
    <p>user detail page</p>
    <p>role: {{ $route.params.role }}</p>
    <p>ID: {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
}
</script>
