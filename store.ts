import { create } from "zustand";

type tokenStore = {
    token?: string,
    userId?: number,
    setToken: (token?: string) => void
};

export const useTokenStore = create<tokenStore>((set, get) => ({
    token: "Test",
    userId: 100,
    setToken: (token) => set({token})

}))