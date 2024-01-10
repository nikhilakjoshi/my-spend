import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import SignOutLink from "./_components/sign-out-link";

export default async function Home() {
  const session = await getServerAuthSession();
  if (!session) return redirect("/auth/sign-in");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignOutLink />
    </main>
  );
}
