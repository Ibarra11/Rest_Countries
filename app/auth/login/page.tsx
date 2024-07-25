"use client";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useRouter } from "next/navigation";
import { login, verifyAuth } from "../../actions/auth";
import { FormEvent, useEffect } from "react";
import { toast } from "../../components/ui/use-toast";

export default function LoginForm() {
  const router = useRouter();
  useEffect(() => {
    async function checkAuth() {
      const { isAuthenticated } = await verifyAuth();
      if (isAuthenticated) {
        router.push("/");
      }
    }
    checkAuth();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const result = await login(formData);

    if (result.success) {
      router.push("/");
    } else {
      toast({
        title: "Login Failed",
        description: result.message,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </CardFooter>
        <div className="px-6 pb-4 text-center">
          <Link className=" text-sm text-slate-500" href="/auth/signup">
            Don&#39;t have an account sign up?
          </Link>
        </div>
      </Card>
    </form>
  );
}
