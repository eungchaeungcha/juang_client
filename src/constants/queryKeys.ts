import { GetUsernameDuplicateRequestParams } from "@/types/api";

const auth = {
  default: ["auth"] as const,
  usernameDuplicate: (params: GetUsernameDuplicateRequestParams) =>
    [...auth.default, params] as const,
};

const queryKeys = {
  auth,
};

export default queryKeys;
