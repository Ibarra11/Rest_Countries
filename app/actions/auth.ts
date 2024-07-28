"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Success = { success: true; user: { id: string; email: string } };
type Error = { success: false; message: string };

type AuthResponse = Success | Error;

export async function signup(formData: FormData): Promise<AuthResponse> {
  const email = formData.get("email");
  const password = formData.get("password");
  const phoneNumber = formData.get("phoneNumber");
  const mfaMethod = formData.get("mfaMethod");

  const req = await fetch(`${process.env.BVT_AUTH_URL}/users/signup`, {
    method: "POST",
    body: JSON.stringify({ email, password, phoneNumber, mfaMethod }),
    headers: {
      api_key: process.env.BVT_API_KEY as string,
      "Content-Type": "application/json",
    },
  });

  if (req.ok) {
    const { data } = await req.json();

    cookies().set({
      name: "countries_refresh_token",
      value: data.refreshToken,
      httpOnly: true,
      path: "/",
    });
    return { success: true, user: data.user };
  }
  const badResponse = await req.json();
  console.log(badResponse);
  return { success: false, message: badResponse.message };
}

export async function login(formData: FormData): Promise<AuthResponse> {
  const email = formData.get("email");
  const password = formData.get("password");

  const req = await fetch(`${process.env.BVT_AUTH_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      api_key: process.env.BVT_API_KEY as string,
      "Content-Type": "application/json",
    },
  });

  if (req.ok) {
    const { data } = await req.json();
    console.log(data);
    cookies().set({
      name: "countries_refresh_token",
      value: data.refreshToken,
      httpOnly: true,
      path: "/",
    });
    return { success: true, user: data.user };
  }
  const badResponse = await req.json();
  return { success: false, message: badResponse.message };
}

export async function logout() {
  cookies().delete("countries_refresh_token");
  return redirect(`/auth/login`);
}

export async function verifyAuth(): Promise<AuthResponse> {
  const refreshToken = cookies().get("countries_refresh_token");
  if (!refreshToken) {
    return { success: false, message: "refresh_token is missing" };
  }
  const req = await fetch(`${process.env.BVT_AUTH_URL}/auth/self`, {
    headers: {
      api_key: process.env.BVT_API_KEY as string,
      refresh_token: refreshToken.value,
    },
  });

  if (req.ok) {
    const { data } = await req.json();
    return { success: true, user: data.user };
  }
  const badResponse = await req.json();
  cookies().delete("countries_refresh_token");
  return { success: false, message: badResponse.message };
}
