import LogoutButton from "@/components/LogoutButton";

// export default async function Page() {
//   const userData = await usersApi.getUser();

//   return (
//     <UserDataActionProvider userData={userData}>
//       loading...
//     </UserDataActionProvider>
//   );
// }

export default function Page() {
  return (
    <div>
      <LogoutButton />
    </div>
  );
}
