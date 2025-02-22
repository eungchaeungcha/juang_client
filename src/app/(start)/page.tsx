"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, usersApi } from "@/services";
import { HeaderLayout, customToast } from "@/components";
import { useHandleAuth } from "@/hooks/useHandleAuth";
import queryKeys from "@/constants/queryKeys";
import { useUserDataStore } from "@/store/userDataStore";

export default function Page() {
  const notify = () => customToast.success("토스트!");
  const { handleLogout } = useHandleAuth();
  const { userData, setUserData } = useUserDataStore();

  const { mutate } = useMutation({
    mutationFn: authApi.postLogout,
    onSuccess: handleLogout,
  });

  const { data } = useQuery({
    queryFn: usersApi.getUser,
    queryKey: queryKeys.users.me(userData?.id ?? 0),
  });

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data, setUserData, userData]);

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Title title="홈 화면" />
      <HeaderLayout.Content className="flex-col-center p-4 gap-4">
        <Link
          className="styled-btn--orange w-full"
          href="/login">
          로그인
        </Link>
        <Link
          className="styled-btn--orange w-full"
          href="/signup">
          회원가입
        </Link>
        <Link
          className="styled-btn--orange w-full"
          href="/onboarding">
          시작하기
        </Link>
        <button
          className="styled-btn--orange w-full"
          onClick={notify}>
          토스트 띄우기
        </button>
        <button
          className="styled-btn--orange w-full"
          onClick={() => {
            mutate();
          }}>
          로그아웃하기 {userData?.id}
        </button>
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
