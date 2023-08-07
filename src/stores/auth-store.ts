import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface AuthState {
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
  }),
  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    async login(code: string) {
      const req = api.post(`/login?code=${code}`, { withCredentials: true });

      const res = await req;

      if (res.status !== 200) {
        return this.setAuth(false);
      }

      return this.setAuth(true);
    },
    setAuth(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
  },
});
