import { redirectTreePageWithId } from "@/services/redirect";

export default async function Page() {
  await redirectTreePageWithId();
}
