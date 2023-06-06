export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  // if (process.server) return;
  // skip middleware on client side entirely
  // if (process.client) return;
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp();
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return;

  if (to.path.includes("/admin") && !nuxtApp.$authStore.isAuthenticated) {
    return navigateTo("/login");
  }
  console.log("running 01.setup.global middleware: ", to);
});
