<template>
  <div>
    <div>Landing page</div>
    <div>
      Counter: {{ counter }}
      <button @click="() => counter++">+</button>
      <button @click="() => counter--">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = useState<number>("counter", () =>
  Math.round(Math.random() * 1000)
);
</script>
