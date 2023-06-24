import { useAuthStore } from "~/store";
import { Pinia } from "pinia";

export default defineNuxtPlugin({
  name: "plugin-pinia",
  // enforce: "pre", // or 'post'
  async setup({ $pinia }) {
    return {
      provide: {
        authStore: useAuthStore($pinia as Pinia | null | undefined),
      },
    };
  },
});
