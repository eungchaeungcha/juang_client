import { CHARACTER_COLORS } from "@/constants/character";
import { CharacterFormType, NicknameFormType } from "@/types/form";

export const STEP_CONFIG = [
  { id: "character", title: "감 캐릭터 고르기" },
  { id: "color", title: "감 색상 고르기" },
  { id: "nickname", title: "별명 정하기" },
  { id: "join", title: "감나무로 들어가기" },
] as const;

export const STEP_PARAMS = STEP_CONFIG.map((step) => step.id);

export const STEP_TITLE = Object.fromEntries(
  STEP_CONFIG.map((step) => [step.id, step.title])
);

export type StepParams = (typeof STEP_CONFIG)[number]["id"];

/**
 * TODO : 삭제
 * 임시값 반환하는 임시 메소드
 * 데이터에 따른 URL 분기 처리 테스트 위함
 */
export const getTemperalOnboardingData = (): Partial<
  CharacterFormType &
    NicknameFormType & {
      treeCode?: string;
    }
> => {
  return {
    character: "character1",
    color: CHARACTER_COLORS.orange,
    // nickname: "차차",
    // treeCode: "1234",
  };
};
