import SignInLink from "@/app/_components/sign-in-link";
import { env } from "@/env";
import { Card, CardContent, CardHeader } from "@/shad/components/ui/ui/card";
import { getProviders } from "next-auth/react";

export default async function signInPage() {
  const providers = await getProviders();
  return (
    <main className="container mx-auto max-w-[480px]">
      <Card className="rounded-md text-gray-700">
        <CardHeader className="text-center text-2xl font-bold">
          Sign in
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInLink providers={providers} nextAuthUrl={env.NEXTAUTH_URL} />
        </CardContent>
      </Card>
    </main>
  );
}
