import { defineStore } from "pinia";
import { api } from "../services/api.js";

const TOKEN_KEY = "fb_token";
const USER_KEY = "fb_user";

export const useAuth = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem(TOKEN_KEY) || "",
    user: JSON.parse(localStorage.getItem(USER_KEY) || "null")
  }),
  getters: {
    isAuthenticated: (s) => !!s.token
  },
  actions: {
    async login(email, password) {
      const res = await api.post("/auth/login", { email, password });
      this.token = res.token;
      this.user = res.user;
      localStorage.setItem(TOKEN_KEY, this.token);
      localStorage.setItem(USER_KEY, JSON.stringify(this.user));
      return res.user;
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }
});
