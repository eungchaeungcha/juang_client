"use client";

import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/services";

export default function LogoutButton() {
  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
  });

  return (
    <button
      type="button"
      className="styled-btn--orange w-full"
      onClick={() => {
        logout();
      }}>
      로그아웃
    </button>
  );
}
