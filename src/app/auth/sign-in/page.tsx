import { Button } from "@/shad/components/ui/ui/button";
import { Card, CardContent, CardHeader } from "@/shad/components/ui/ui/card";
import { Input } from "@/shad/components/ui/ui/input";
import { Label } from "@/shad/components/ui/ui/label";

export default async function signInPage() {
  return (
    <main className="container mx-auto max-w-[480px]">
      <Card className="rounded-md text-gray-700">
        <CardHeader className="text-2xl font-bold">Sign in</CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">
              Email <span className="text-amber-800">&#42;</span>
            </Label>
            <Input id="email" type="text" />
          </div>
          <div>
            <Label htmlFor="pwd">
              Password <span className="text-amber-800">&#42;</span>
            </Label>
            <Input type="password" id="pwd" />
          </div>
          <div className="pt-8">
            <Button className="w-full">Login</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
