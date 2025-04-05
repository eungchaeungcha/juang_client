import {
  GetQuestionDetailRequestParams,
  GetQuestionDetailResponseBody,
  GetQuestionListRequestParams,
} from "@/types/api";
import { apiClient } from "./instance";

export const questionsApi = {
  getList: ({ familyId }: GetQuestionListRequestParams) =>
    apiClient.get<GetQuestionDetailResponseBody[]>(
      `families/${familyId}/questions`,
    ),

  getDetail: ({ familyId, questionId }: GetQuestionDetailRequestParams) =>
    apiClient.get<GetQuestionDetailResponseBody>(
      `families/${familyId}/questions/${questionId}`,
    ),
};
