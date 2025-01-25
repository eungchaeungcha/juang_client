export const STEP_CONFIG = [
  { id: "character", title: "감 캐릭터 고르기" },
  { id: "color", title: "감 색상 고르기" },
  { id: "nickname", title: "별명 정하기" },
  { id: "group", title: "감나무로 들어가기" },
] as const;

export const STEP_PARAMS = STEP_CONFIG.map((step) => step.id);

export const STEP_TITLE = Object.fromEntries(
  STEP_CONFIG.map((step) => [step.id, step.title])
);

export type StepParams = (typeof STEP_CONFIG)[number]["id"];
