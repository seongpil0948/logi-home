// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: "Logione",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Logione Description",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/i18n",
  ],
  // elementPlus: {
  //   /** Options */
  // },
  imports: {
    dirs: ["composables/**", "store"],
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {
      strict: true,
    },
  },
  build: {},
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/element.scss" as element;`,
        },
      },
    },
  },
  // generate: {
  //   exclude: ["/^/admin/"],
  // },
  // css: ["@/assets/element.scss"],
  routeRules: {
    // TODO: 상품 상세 페이지등 SEO 노출 및 수정 될만한 페이지
    "/blog/**": { swr: true, cors: true },
    // TODO: Static page generated on-demand once(공지사항등 불변의 페이지)
    "/articles/**": { static: true, cors: true },
    // 검색엔진 노출이 필요없는 기능페이지
    "/admin/**": { ssr: false, headers: { "cache-control": "s-maxage=0" } },
    // "/admin/**": { swr: true, headers: { "cache-control": "s-maxage=0" } },
    "/api/**": { cors: true },
  },
  nitro: {
    preset: "firebase",
    replace: {
      [`functions.https.onRequest`]: `functions.region('asia-northeast3').https.onRequest`,
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    // themes: ["dark"],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
