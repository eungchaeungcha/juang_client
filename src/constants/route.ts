export const routePathes = {
  public: ["/", " /login", "/signup"],
  private: ["/main", "/onboarding"],
} as const;

export type RoutePath = (typeof routePathes)["private" | "public"][number];
export type PublicRoutePath = (typeof routePathes)["public"][number];
export type PrivateRoutePath = (typeof routePathes)["private"][number];
