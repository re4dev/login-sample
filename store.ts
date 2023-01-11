import { create } from "zustand";

type tokenStore = {
    token?: string,
    userId?: number,
    setToken: (token?: string) => void,
    clearToken: () => void,
    isLoggedIn: () => boolean
};

export const useTokenStore = create<tokenStore>((set, get) => ({
    token: "",
    userId: 100,
    setToken: (token) => set({token}),
    clearToken: () => set({token: ""}),
    isLoggedIn: () => get().token != "" ? true : false
}))