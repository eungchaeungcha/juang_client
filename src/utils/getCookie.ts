"use server";

import { cookies } from "next/headers";

export const getCookie = async (key: string) => {
  return (await cookies()).get(key)?.value;
};
