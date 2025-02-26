import { usersApi } from "@/services";
import UserDataActionProvider from "@/providers/UserDataActionProvider";

export default async function Page() {
  const userData = await usersApi.getUser();
  return (
    <UserDataActionProvider userData={userData}>
      loading...
    </UserDataActionProvider>
  );
}
