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
import { FormEvent, useEffect } from "react";
import { signup } from "../../actions/auth";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { useRouter } from "next/navigation";
import { useToast } from "../../components/ui/use-toast";
import { verifyAuth } from "../../actions/auth";

export default function SignupForm() {
  const router = useRouter();
  const { toast } = useToast();

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
    const result = await signup(formData);
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
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input name="phoneNumber" id="password" type="tel" required />
          </div>
        </CardContent>
        <RadioGroup name="mfaMethod" className="px-6 mb-4" defaultValue="sms">
          <Label>MFA Method</Label>
          <div className="flex gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="sms" />
              <Label htmlFor="sms">Sms</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email">Email</Label>
            </div>
          </div>
        </RadioGroup>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </CardFooter>
        <div className="px-6 pb-4 text-center">
          <Link className=" text-sm text-slate-500" href="/auth/login">
            Already have an account log in?
          </Link>
        </div>
      </Card>
    </form>
  );
}
