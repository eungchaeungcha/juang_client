"use client";

import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api";
import { useHandleAuth } from "@/services/auth";

export default function LogoutButton() {
  const { handleLogout } = useHandleAuth();
  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
    onSuccess: handleLogout,
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
