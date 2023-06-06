const userKey = "user";
export const useAuthStore = defineStore(userKey, () => {
  const isAuthenticated = false;
  return {
    isAuthenticated,
  };
});
