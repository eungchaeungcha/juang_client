import { create } from "zustand";
import { GetUsersMeResponseBody } from "@/types/api";

interface UserDataStore {
  userData: GetUsersMeResponseBody | null;
  setUserData: (userData: GetUsersMeResponseBody | null) => void;
  clearUserData: VoidFunction;
}

export const useUserDataStore = create<UserDataStore>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
  clearUserData: () => set({ userData: null }),
}));
