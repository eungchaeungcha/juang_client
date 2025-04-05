import {
  GetCharacterByIdRequestParams,
  GetCharacterByValuesRequestParams,
  GetQuestionDetailRequestParams,
  GetQuestionListRequestParams,
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
  byValues: ({ name, color }: GetCharacterByValuesRequestParams) =>
    [...characters.default, name, color] as const,
  byId: ({ characterId }: GetCharacterByIdRequestParams) =>
    [...characters.default, characterId] as const,
};

const questions = {
  default: ["questions"] as const,
  list: ({ familyId }: GetQuestionListRequestParams) =>
    [...questions.default, familyId] as const,
  detail: ({ familyId, questionId }: GetQuestionDetailRequestParams) => [
    ...questions.default,
    familyId,
    questionId,
  ],
};

const queryKeys = {
  auth,
  users,
  characters,
  questions,
};

export default queryKeys;
