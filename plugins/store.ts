import { useAuthStore } from "~/store";
import { Pinia } from "pinia";

export default defineNuxtPlugin({
  name: "plugin-pinia",
  // enforce: "pre", // or 'post'
  async setup({ $pinia }) {
    console.info("setup plugin pinia store ", $pinia);
    return {
      provide: {
        authStore: useAuthStore($pinia as Pinia | null | undefined),
      },
    };
  },
});
