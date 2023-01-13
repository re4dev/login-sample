import { create } from "zustand";

type tokenStore = {
    token?: string,
    userId?: number,
    setToken: (token?: string) => void,
    clearToken: () => void,
    setUserId: (userId: number) => void,
    clearUserId: () => void,
    isLoggedIn: () => boolean
};

export const useTokenStore = create<tokenStore>((set, get) => ({
    token: "",
    userId: null,
    setToken: (token) => set({token}),
    clearToken: () => set({token: ""}),
    setUserId: (userId) => set({userId}),
    clearUserId: () => set({userId: null}),
    isLoggedIn: () => get().token != "" ? true : false
}))