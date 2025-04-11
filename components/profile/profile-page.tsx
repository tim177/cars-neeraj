"use client";

import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Car, FileText, Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Neeraj Bhandari",
    email: "neeraj.bhandari@example.com",
    phone: "+91 9876543210",
    route1: "Delhi - Jaipur",
    route2: "Mumbai - Pune",
    route3: "Bangalore - Chennai",
  });

  // File upload state
  const [files, setFiles] = useState({
    license: null,
    vehicleRc: null,
    panCard: null,
  });

  // Preview images (using the image from the example)
  const previewImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5EanuhbLJXjHqCDeQANx8KRCY7tu2P.png";

  // For text input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // For file input changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({ ...prev, [type]: e.target.files![0] }));
    }
  };

  // For form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData, files);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
        <div className="flex items-center">
          <Link href="/dashboard" className="text-xl font-bold text-gray-800">
            Logo
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="online-status" defaultChecked />
            <Label
              htmlFor="online-status"
              className="font-medium text-gray-700"
            >
              Online
            </Label>
          </div>
          <Link
            href="/dashboard"
            className="flex items-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Dashboard <span className="ml-1">→</span>
          </Link>
          <Button className="rounded-full bg-emerald-600 px-6 hover:bg-emerald-700">
            Neeraj Bhandari <Car className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white">
          <nav className="flex flex-col p-4">
            <NavLink
              href="/dashboard"
              icon={<Home className="mr-3 h-5 w-5" />}
              label="Dashboard"
            />
            <NavLink
              href="/profile"
              icon={<User className="mr-3 h-5 w-5" />}
              label="Profile"
              isActive
            />
            <NavLink
              href="/add-vehicles"
              icon={<Car className="mr-3 h-5 w-5" />}
              label="Add Vehicles"
            />
            <NavLink
              href="/view-vehicles"
              icon={<Car className="mr-3 h-5 w-5" />}
              label="View Vehicles"
            />
            <NavLink
              href="/upcoming-trip"
              icon={<FileText className="mr-3 h-5 w-5" />}
              label="Upcoming Trip"
            />
            <NavLink
              href="/booking-history"
              icon={<FileText className="mr-3 h-5 w-5" />}
              label="Booking History"
            />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">Profile</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-0 border-b border-gray-300 px-0 py-2 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-0 border-b border-gray-300 px-0 py-2 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-0 border-b border-gray-300 px-0 py-2 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <Separator className="my-6" />

              {/* Routes */}
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="route1" className="text-gray-700">
                    Route 1
                  </Label>
                  <Input
                    id="route1"
                    name="route1"
                    value={formData.route1}
                    onChange={handleInputChange}
                    className="border-0 border-b border-gray-300 px-0 py-2 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="route2" className="text-gray-700">
                    Route 2
                  </Label>
                  <Input
                    id="route2"
                    name="route2"
                    value={formData.route2}
                    onChange={handleInputChange}
                    className="border-0 border-b border-gray-300 px-0 py-2 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="route3" className="text-gray-700">
                    Route 3
                  </Label>
                  <Input
                    id="route3"
                    name="route3"
                    value={formData.route3}
                    onChange={handleInputChange}
                    className="border-0 border-b border-gray-300 px-0 py-2 focus-visible:border-b-2 focus-visible:border-emerald-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <Separator className="my-6" />

              {/* Document Uploads */}
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <Label htmlFor="license" className="text-gray-700">
                    Driving Licence
                  </Label>
                  <div className="flex flex-col space-y-4">
                    <Input
                      id="license"
                      type="file"
                      onChange={(e) => handleFileChange(e, "license")}
                      className="border border-gray-300"
                    />
                    <div className="relative h-40 w-full overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={previewImage || "/placeholder.svg"}
                        alt="License preview"
                        width={200}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="vehicleRc" className="text-gray-700">
                    Vehicle Rc
                  </Label>
                  <div className="flex flex-col space-y-4">
                    <Input
                      id="vehicleRc"
                      type="file"
                      onChange={(e) => handleFileChange(e, "vehicleRc")}
                      className="border border-gray-300"
                    />
                    <div className="relative h-40 w-full overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={previewImage || "/placeholder.svg"}
                        alt="Vehicle RC preview"
                        width={200}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="panCard" className="text-gray-700">
                    Pan Card
                  </Label>
                  <div className="flex flex-col space-y-4">
                    <Input
                      id="panCard"
                      type="file"
                      onChange={(e) => handleFileChange(e, "panCard")}
                      className="border border-gray-300"
                    />
                    <div className="relative h-40 w-full overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={previewImage || "/placeholder.svg"}
                        alt="PAN Card preview"
                        width={200}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  type="submit"
                  className="w-full max-w-md bg-emerald-600 py-6 text-lg hover:bg-emerald-700"
                >
                  Request for Update
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t bg-emerald-600 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div>Copyright © 2025 All Rights Reserved by</div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-emerald-600 transition-colors hover:bg-gray-100"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-emerald-600 transition-colors hover:bg-gray-100"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, icon, label, isActive = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`mb-1 flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-emerald-50 text-emerald-600"
          : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
