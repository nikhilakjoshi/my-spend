"use client";
import SignInLink from "@/app/_components/sign-in-link";
import { Button } from "@/shad/components/ui/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shad/components/ui/ui/card";
import { Input } from "@/shad/components/ui/ui/input";
import { Label } from "@/shad/components/ui/ui/label";
import { useFormik } from "formik";
import * as yup from "yup";
import clsx from "clsx";

export default function RegistrationPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="container mx-auto max-w-[480px]">
      <Card className="rounded-md text-zinc-700">
        <CardHeader className="text-2xl font-bold">Register here</CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Label htmlFor="email">
                Email <span className="text-amber-800">&#42;</span>
              </Label>
              <Input
                id="email"
                type="text"
                name="email"
                onChange={formik.handleChange}
                className={clsx({
                  "border-red-500": formik.errors.email,
                })}
              />
            </div>
            <div>
              <Label htmlFor="pwd">
                Password <span className="text-amber-800">&#42;</span>
              </Label>
              <Input
                type="password"
                id="pwd"
                name="password"
                onChange={formik.handleChange}
                className={clsx({
                  "border-red-500": formik.errors.password,
                })}
              />
            </div>
            <div>
              <Label htmlFor="cnfpwd">
                Confirm password <span className="text-amber-800">&#42;</span>
              </Label>
              <Input
                type="password"
                id="cnfpwd"
                name="confirmPassword"
                onChange={formik.handleChange}
                className={clsx({
                  "border-red-500": formik.errors.confirmPassword,
                })}
              />
              <div className="mt-2 flex items-center gap-1 text-sm text-zinc-400">
                <span>{`All fields marked `}</span>
                <span className="text-amber-800"> &#42; </span>
                <span>{` are mandatory`}</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full">Sign up</Button>
              {formik.errors.confirmPassword && (
                <div className="absolute">
                  <span className="text-sm text-red-500">
                    {formik.errors.confirmPassword}
                  </span>
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="">
            <div className="mt-2">
              <SignInLink />
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
