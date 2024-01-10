"use-client";

import { Button } from "@/shad/components/ui/ui/button";
import Link from "next/link";

export default function SignUpLink() {
  return (
    <Button asChild variant="link" className="px-0 text-zinc-500">
      <Link href="/auth/new-user">Create a new account</Link>
    </Button>
  );
}
