"use client";
import { Button } from "@/shad/components/ui/ui/button";
import type { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

const SignInLink: React.FC<{
  providers: Awaited<ReturnType<typeof getProviders>>;
  nextAuthUrl: string;
}> = ({ providers, nextAuthUrl }) => {
  if (!providers) return null;
  return (
    <div className="pt-4">
      <Button
        onClick={() =>
          signIn(providers.auth0.id, {
            callbackUrl: nextAuthUrl,
          })
        }
        variant="secondary"
        className="w-full"
      >
        Login with <span className="font-mono font-bold">&nbsp;Auth0</span>
      </Button>
    </div>
  );
};

export default SignInLink;
