<template>
  <v-footer class="bg-grey-lighten-4 text-center d-flex flex-column">
    <v-row class="pt-0">
      <v-col v-for="icon in icons" :key="icon">
        <v-btn :icon="icon" variant="text" />
      </v-col>
    </v-row>
    <v-select
      :items="locales"
      density="compact"
      v-model="locale"
      variant="solo"
    />
  </v-footer>
</template>

<script setup lang="ts">
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
const locales = useLocales();
const locale = useLocale();
// const date = useLocaleDate(new Date("2016-10-26") /* NUXT_BIRTHDAY */);
</script>
