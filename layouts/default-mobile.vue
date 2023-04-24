<template>
  <v-layout>
    <LayoutAppBarTop />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        pc layout
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
