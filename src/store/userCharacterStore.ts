import { create } from "zustand";
import { GetCharacterResponseBody } from "@/types/api";

interface UserCharacterStore {
  userCharacter: GetCharacterResponseBody | null;
  setUserCharacter: (character: GetCharacterResponseBody | null) => void;
  clearCharacter: VoidFunction;
}

export const useUserCharacterStore = create<UserCharacterStore>((set) => ({
  userCharacter: null,
  setUserCharacter: (userCharacter) => set({ userCharacter }),
  clearCharacter: () => set({ userCharacter: null }),
}));
