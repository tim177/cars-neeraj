"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUp, Car, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalDetailsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    townCity: "",
    phone: "",
    email: "",
  });

  // State for scroll position and direction
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position and direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Show back to top button when scrolled down enough
      setShowBackToTop(currentScrollY > 300);

      // Update scroll position
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission - could redirect or show success message
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Logo
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              href="/cars"
              className="rounded-full border border-gray-200 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Cars
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-gray-200 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Sign In <span className="ml-1">→</span>
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-gray-200 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Dashboard <span className="ml-1">→</span>
            </Link>
            <Button className="rounded-full bg-emerald-600 px-6 hover:bg-emerald-700">
              Become Partner <Car className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
        <div className="h-1 w-1/3 bg-emerald-600"></div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Personal details
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Fields */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="h-12 rounded-md bg-gray-50 focus-visible:ring-emerald-600"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="h-12 rounded-md bg-gray-50 focus-visible:ring-emerald-600"
              />
            </div>
          </div>

          {/* Town/City Field */}
          <div className="space-y-2">
            <Label
              htmlFor="townCity"
              className="text-sm font-medium text-gray-700"
            >
              Town / City <span className="text-red-500">*</span>
            </Label>
            <Input
              id="townCity"
              name="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              required
              className="h-12 rounded-md bg-gray-50 focus-visible:ring-emerald-600"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="h-12 rounded-md bg-gray-50 focus-visible:ring-emerald-600"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12 rounded-md bg-gray-50 focus-visible:ring-emerald-600"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="h-14 w-full max-w-xs bg-emerald-600 text-base font-medium hover:bg-emerald-700 sm:w-auto sm:px-12"
            >
              Update Details
            </Button>
          </div>
        </form>
      </main>

      {/* Footer with scroll animation */}
      <footer className="relative mt-24 overflow-hidden">
        <div className="relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/car-background.jpg"
              alt="Luxury car background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Footer content with animation */}
          <div
            className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
            style={{
              transform: `translateY(${
                scrollDirection === "up" ? "0" : "10px"
              })`,
              opacity: scrollDirection === "up" ? 1 : 0.95,
              transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
            }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Column 1 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Logo</h3>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/cars"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Cars
                  </Link>
                  <Link
                    href="/location"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Location
                  </Link>
                  <Link
                    href="/guide"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Car Renting Guide
                  </Link>
                </nav>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">
                  Contact & legal
                </h3>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/privacy"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/cancellation"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Cancellation policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Terms and Condition
                  </Link>
                </nav>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/contact"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/reviews"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Car Reviews
                  </Link>
                  <Link
                    href="/tips"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Maintenance Tips
                  </Link>
                </nav>
              </div>

              {/* Column 4 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Contact Us</h3>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="mr-2 h-5 w-5" />
                    <span>+12505550199</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="mr-2 h-5 w-5" />
                    <span>test@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright and social links */}
            <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
              <p className="text-gray-400">
                Copyright © 2025 All Rights Reserved by
              </p>
              <div className="mt-4 flex space-x-4 md:mt-0">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button with animation */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 rounded-full bg-emerald-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 ${
            showBackToTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </footer>
    </div>
  );
}
