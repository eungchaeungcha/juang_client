import {
  GetCharacterByDataRequestParams,
  GetCharacterByIdRequestParams,
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
  byData: ({ name, color }: GetCharacterByDataRequestParams) =>
    [...characters.default, name, color] as const,
  byId: ({ characterId }: GetCharacterByIdRequestParams) =>
    [...characters.default, characterId] as const,
};

const queryKeys = {
  auth,
  users,
  characters,
};

export default queryKeys;
