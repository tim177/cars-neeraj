"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * LoginPage Component
 *
 * A split-screen layout with a car interior image on the left
 * and a login form on the right, matching the provided design.
 */
export default function LoginPage() {
  const router = useRouter();
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // Simulate login and redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      {/* Left side - Car interior image */}
      <div className="relative h-[40vh] w-full md:h-full md:w-1/2">
        <Image
          src="/car.png"
          alt="View from inside a car driving on a highway"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Login form */}
      <div className="flex w-full items-center justify-center bg-white p-8 md:w-1/2">
        <div className="w-full max-w-md">
          {/* Logo section */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email/Username field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email Address or Username
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address or Username"
                  className="border-0 border-b border-gray-300 px-0 py-4 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="border-0 border-b border-gray-300 px-0 py-4 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="h-4 w-4 rounded border-gray-300 text-emerald-600"
              />
              <Label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </Label>
            </div>

            {/* Login button */}
            <Button
              type="submit"
              className="w-full rounded bg-emerald-600 py-6 text-white transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              Log In
            </Button>

            {/* Links section */}
            <div className="flex justify-between text-sm">
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-emerald-600"
              >
                Forgot Your Password?
              </Link>
              <Link
                href="/register"
                className="text-gray-600 transition-colors hover:text-emerald-600"
              >
                Create an account
              </Link>
            </div>

            {/* Partner login link */}
            <div className="text-center">
              <Link
                href="#"
                className="text-sm text-gray-600 transition-colors hover:text-emerald-600"
              >
                Partner Login
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-16 text-center text-xs text-gray-500">
            Copyright © 2025 All Rights Reserved by
          </div>
        </div>
      </div>
    </div>
  );
}
