import { create } from "zustand";
import { GetUserResponseBody } from "@/types/api";

interface UserDataStore {
  userData: GetUserResponseBody | null;
  setUserData: (userData: GetUserResponseBody | null) => void;
  clearUserData: VoidFunction;
}

export const useUserDataStore = create<UserDataStore>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
  clearUserData: () => set({ userData: null }),
}));
