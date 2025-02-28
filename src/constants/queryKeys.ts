import {
  GetCharacterIdRequestParams,
  GetCharacterResourceRequestParams,
  GetUsernameDuplicateRequestParams,
} from "@/types/api";

const auth = {
  default: ["auth"] as const,
  usernameDuplicate: (params: GetUsernameDuplicateRequestParams) =>
    [...auth.default, params] as const,
};

const users = {
  default: ["users"] as const,
  me: (userId: number) => [...users.default, userId] as const,
};

const characters = {
  default: ["characters"] as const,
  id: ({ name, color }: GetCharacterIdRequestParams) =>
    [...characters.default, name, color] as const,
  resource: ({ characterId }: GetCharacterResourceRequestParams) =>
    [...characters.default, characterId] as const,
};

const queryKeys = {
  auth,
  users,
  characters,
};

export default queryKeys;
