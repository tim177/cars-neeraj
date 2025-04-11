"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}
interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
}
interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Simulate logout
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 flex-col bg-white shadow-md lg:flex">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold text-emerald-600">Dashboard</h1>
        </div>
        <nav className="flex flex-1 flex-col p-4">
          <div className="space-y-1">
            <NavItem
              icon={<Home className="mr-3 h-5 w-5" />}
              label="Home"
              isActive
            />
            <NavItem
              icon={<BarChart3 className="mr-3 h-5 w-5" />}
              label="Analytics"
            />
            <NavItem
              icon={<CreditCard className="mr-3 h-5 w-5" />}
              label="Transactions"
            />
            <NavItem
              icon={<Calendar className="mr-3 h-5 w-5" />}
              label="Schedule"
            />
            <NavItem
              icon={<MessageSquare className="mr-3 h-5 w-5" />}
              label="Messages"
            />
            <NavItem
              icon={<Settings className="mr-3 h-5 w-5" />}
              label="Settings"
            />
          </div>
        </nav>
        <div className="border-t p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Menu - Fixed the Sheet/SheetTrigger issue */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-16 items-center border-b px-6">
            <h1 className="text-xl font-bold text-emerald-600">Dashboard</h1>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-1 flex-col p-4">
            <div className="space-y-1">
              <NavItem
                icon={<Home className="mr-3 h-5 w-5" />}
                label="Home"
                isActive
              />
              <NavItem
                icon={<BarChart3 className="mr-3 h-5 w-5" />}
                label="Analytics"
              />
              <NavItem
                icon={<CreditCard className="mr-3 h-5 w-5" />}
                label="Transactions"
              />
              <NavItem
                icon={<Calendar className="mr-3 h-5 w-5" />}
                label="Schedule"
              />
              <NavItem
                icon={<MessageSquare className="mr-3 h-5 w-5" />}
                label="Messages"
              />
              <NavItem
                icon={<Settings className="mr-3 h-5 w-5" />}
                label="Settings"
              />
            </div>
          </nav>
          <div className="border-t p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          {/* Fixed the SheetTrigger by properly wrapping it in Sheet */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </Sheet>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, John
            </h1>
            <p className="text-gray-600">
              Here&apos;s what&apos;s happening with your account today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Balance"
              value="$24,563.00"
              description="+2.5% from last month"
            />
            <StatsCard
              title="Pending"
              value="$4,250.00"
              description="7 pending transactions"
            />
            <StatsCard
              title="Completed"
              value="156"
              description="24 in the last 24 hours"
            />
            <StatsCard
              title="Messages"
              value="32"
              description="5 unread messages"
            />
          </div>

          {/* Recent Activity */}
          <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-800">
            Recent Activity
          </h2>
          <div className="rounded-lg border bg-white shadow">
            <div className="p-6">
              <div className="space-y-4">
                <ActivityItem
                  title="Payment Received"
                  description="Payment of $1,250.00 received from Client XYZ"
                  time="2 hours ago"
                />
                <ActivityItem
                  title="New Message"
                  description="You have a new message from Support Team"
                  time="5 hours ago"
                />
                <ActivityItem
                  title="Account Updated"
                  description="Your account details have been updated"
                  time="Yesterday"
                />
                <ActivityItem
                  title="Invoice Sent"
                  description="Invoice #12345 has been sent to Client ABC"
                  time="2 days ago"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, isActive = false }: NavItemProps) {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={`w-full justify-start ${
        isActive ? "bg-emerald-50 text-emerald-600" : ""
      }`}
    >
      {icon}
      {label}
    </Button>
  );
}

function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}

function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start space-x-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="rounded-full bg-emerald-100 p-2">
        <CreditCard className="h-4 w-4 text-emerald-600" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  );
}
