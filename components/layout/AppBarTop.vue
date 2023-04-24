<template>
  <v-app-bar
    absolute
    rounded="8"
    color="transparent"
    :elevation="0"
    density="compact"
  >
    <div class="pl-3" style="width: 10%">
      <v-img src="/logo.png" />
    </div>

    <template v-slot:append>
      <v-menu v-model="menu" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-apps" />
        </template>

        <v-card min-width="300">
          <v-row no-gutters>
            <v-col
              v-for="[icon, path] in links"
              :key="icon"
              cols="12"
              xs="2"
              sm="3"
              md="4"
              lg="5"
            >
              <NuxtLink :to="path">
                <v-btn class="ma-2 pa-2" :icon="icon" color="primary"></v-btn>
              </NuxtLink>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="() => (menu = false)">
              더보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const menu = ref(false);
const links = [
  ["mdi-home", "/"],
  ["mdi-inbox-arrow-down", "/user-shop/123"],
  ["mdi-send", "/shop"],
  ["mdi-smoking-off", "/playground"],
];
</script>
