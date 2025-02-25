"use client";

import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/services";

export default function LogoutButton() {
  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
  });

  return (
    <div
      onClick={() => {
        logout();
      }}
      className="styled-btn--orange w-full">
      로그아웃
    </div>
  );
}
