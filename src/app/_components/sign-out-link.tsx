"use client";
import { Button } from "@/shad/components/ui/ui/button";
import { signOut } from "next-auth/react";

const SignOutLink: React.FC = () => {
  return (
    <div className="pt-8">
      <Button onClick={() => signOut()} className="w-full">
        Sign out
      </Button>
    </div>
  );
};

export default SignOutLink;
