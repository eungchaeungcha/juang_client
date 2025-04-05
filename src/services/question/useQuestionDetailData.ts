import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { questionsApi } from "@/api/questionsApi";
import queryKeys from "@/constants/queryKeys";
import { GetQuestionDetailResponseBody } from "@/types/api";
import { useUserData } from "../user";

interface QuestionDetailDataOptions
  extends Omit<
    UseQueryOptions<GetQuestionDetailResponseBody, Error>,
    "queryKey" | "queryFn"
  > {
  questionId: number | "today";
}

export const useQuestionDetailData = ({
  questionId,
  ...options
}: QuestionDetailDataOptions) => {
  const { userData } = useUserData();

  const familyId = userData?.familyId ?? 0;

  return useQuery({
    queryKey: queryKeys.questions.detail({ familyId, questionId }),
    queryFn: () => questionsApi.getDetail({ familyId, questionId }),
    enabled: Boolean(familyId) && Boolean(questionId),
    ...options,
  });
};
