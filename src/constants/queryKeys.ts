import { GetUsernameDuplicateRequestParams } from "@/types/api";

const auth = {
  default: ["auth"] as const,
  usernameDuplicate: (params: GetUsernameDuplicateRequestParams) =>
    [...auth.default, params] as const,
};

const users = {
  default: ["users"] as const,
  me: (userId: number) => [...users.default, userId] as const,
};

const queryKeys = {
  auth,
  users,
};

export default queryKeys;
