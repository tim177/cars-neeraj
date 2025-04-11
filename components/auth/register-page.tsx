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
 * RegisterPage Component
 *
 * A split-screen layout with a car interior image on the left
 * and a registration form on the right, matching the login page aesthetic.
 */
export default function RegisterPage() {
  const router = useRouter();
  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, password, confirmPassword, agreeTerms });
    // Simulate registration and redirect to dashboard
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

      {/* Right side - Registration form */}
      <div className="flex w-full items-center justify-center bg-white p-8 md:w-1/2">
        <div className="w-full max-w-md">
          {/* Logo section */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
          </div>

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="sr-only">
                Full Name
              </Label>
              <div className="relative">
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="border-0 border-b border-gray-300 px-0 py-4 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="border-0 border-b border-gray-300 px-0 py-4 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
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
                  required
                />
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="border-0 border-b border-gray-300 px-0 py-4 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center">
              <Checkbox
                id="agree-terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="h-4 w-4 rounded border-gray-300 text-emerald-600"
                required
              />
              <Label
                htmlFor="agree-terms"
                className="ml-2 text-sm text-gray-600"
              >
                I agree to the Terms and Privacy Policy
              </Label>
            </div>

            {/* Register button */}
            <Button
              type="submit"
              className="w-full rounded bg-emerald-600 py-6 text-white transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              Create Account
            </Button>

            {/* Login link */}
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-emerald-600 transition-colors hover:text-emerald-700"
              >
                Log in
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
