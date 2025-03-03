import { redirectByUserData } from "@/services/redirect";

export default async function Page() {
  await redirectByUserData();
}
