const userKey = "user";
export const useAuthStore = defineStore(userKey, () => {
  const isAuthenticated = ref(true);
  const login = () => {
    isAuthenticated.value = true;
  };
  return {
    isAuthenticated,
    login,
  };
});
