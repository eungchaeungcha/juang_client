import { usersApi } from "@/services";
import LogoutButton from "@/components/LogoutButton";

export default async function Page() {
  const userData = await usersApi.getUser();

  console.log(userData);

  return (
    // <UserDataActionProvider userData={userData}>
    //   loading...
    // </UserDataActionProvider>
    <div>
      임시 페이지 <LogoutButton />
    </div>
  );
}
