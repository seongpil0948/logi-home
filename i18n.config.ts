export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ko",
  messages: {
    en: {
      welcome: "Welcome",
    },
    ko: {
      welcome: "어서오고",
      postPart: {
        cs: "고객센터",
        service: "서비스",
        gallery: "갤러리",
      },
    },
  },
}));
