import { checkOnboarding } from "@/services/onboarding";

export default async function Page() {
  await checkOnboarding();
}
