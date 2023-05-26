// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@vueuse/nuxt"],
  // elementPlus: {
  //   /** Options */
  // },
  imports: {},
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
  },
  css: ["@/assets/element.scss"],
  routeRules: {
    // TODO: 상품 상세 페이지등 SEO 노출 및 수정 될만한 페이지
    "/blog/**": { swr: true, cors: true },
    // TODO: Static page generated on-demand once(공지사항등 불변의 페이지)
    "/articles/**": { static: true, cors: true },
    // 검색엔진 노출이 필요없는 기능페이지
    "/admin/**": { ssr: false, headers: { "cache-control": "s-maxage=0" } },
    "/api/**": { cors: true },
  },
});
