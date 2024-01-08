import { Button } from "@/shad/components/ui/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shad/components/ui/ui/card";
import { Input } from "@/shad/components/ui/ui/input";
import { Label } from "@/shad/components/ui/ui/label";

export default async function userRegistrationPage() {
  return (
    <main className="container mx-auto max-w-[480px]">
      <Card className="rounded-md text-gray-700">
        <CardHeader className="text-2xl font-bold">Register here</CardHeader>
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
          <div>
            <Label htmlFor="cnfpwd">
              Confirm password <span className="text-amber-800">&#42;</span>
            </Label>
            <Input type="password" id="cnfpwd" />
          </div>
          <div className="pt-8">
            <Button className="w-full">Sign up</Button>
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-1 text-sm text-gray-400">
          <span>{`All fields marked `}</span>
          <span className="text-amber-800"> &#42; </span>
          <span>{` are mandatory`}</span>
        </CardFooter>
      </Card>
    </main>
  );
}
