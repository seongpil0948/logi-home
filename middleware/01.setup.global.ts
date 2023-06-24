import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  // if (process.server) return;
  // skip middleware on client side entirely
  // if (process.client) return;
  // or only skip middleware on initial client load
  const { isHydrating, payload, $authStore } = useNuxtApp();
  if (process.client && isHydrating && payload.serverRendered) return;

  const { isAuthenticated } = storeToRefs($authStore);
  if (to.path.includes("/admin") && !isAuthenticated.value) {
    console.log("not authenticated path: ", to.fullPath, isAuthenticated.value);
    return navigateTo("/login");
  }
  // console.log("running 01.setup.global middleware: ", to);
});
