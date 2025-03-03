export const routePaths = {
  root: "/",
  public: {
    login: "/login",
    signup: "/signup",
  },
  private: {
    onboarding: "/onboarding",
    onboardingCharacter: "/onboarding/character",
    onboardingNickname: "/onboarding/nickname",
    onboardingFamily: "/onboarding/family",
    onboardingFamilyCreate: "/onboarding/family/create",
    onboardingFamilyJoin: "/onboarding/family/join",
    tree: "/tree",
  },
  withQueryParams: {
    onboardingCharacterName: () =>
      routePaths.private.onboardingCharacter + "?target=name",
    onboardingCharacterColor: () =>
      routePaths.private.onboardingCharacter + "?target=color",
    treeWithId: (id: number | string) => routePaths.private.tree + `/${id}`,
  },
} as const;

export const publicroutePaths = Object.values(routePaths.public);
export const privateroutePaths = Object.values(routePaths.private);

export type PublicRoutePath = (typeof publicroutePaths)[number];
export type PrivateRoutePath = (typeof privateroutePaths)[number];
export type RoutePath =
  | (typeof routePaths)["root"]
  | PublicRoutePath
  | PrivateRoutePath;
