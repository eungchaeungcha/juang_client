import { usersApi } from "@/services";
import LogoutButton from "./LogoutButton";

export default async function Page() {
  const userData = await usersApi.getUser();
  return (
    <div>
      hello {userData.username} <LogoutButton />
    </div>
  );
}
