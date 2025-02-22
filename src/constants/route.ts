export const routePathes = {
  public: {
    root: "/",
    login: "/login",
    signup: "/signup",
  },
  private: {
    main: "/main",
    onboarding: "/onboarding",
  },
} as const;

export const publicRoutePathes = Object.values(routePathes.public);
export const privateRoutePathes = Object.values(routePathes.private);

export type PublicRoutePath = (typeof publicRoutePathes)[number];
export type PrivateRoutePath = (typeof privateRoutePathes)[number];
export type RoutePath = PublicRoutePath | PrivateRoutePath;
