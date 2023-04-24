<template>
  <v-layout>
    <LayoutAppBarTop />
    <v-main>
      <v-container class="pa-0" fluid>
        <slot />
      </v-container>
      <LayoutFooter />
    </v-main>
  </v-layout>
</template>
