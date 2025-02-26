import { usersApi } from "@/services";
import UserDataActionProvider from "@/providers/UserDataActionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await usersApi.getUser();
  return (
    <UserDataActionProvider userData={userData}>
      {children}
    </UserDataActionProvider>
  );
}
