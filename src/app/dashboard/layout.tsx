"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/dashboard/projects" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/auth/login");
  };

  return (
    <section className="min-h-screen w-full flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="h-16 px-6 flex items-center text-xl font-bold border-b">
          My Dashboard
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 w-full bg-white shadow px-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold capitalize">
            {pathname.split("/").pop() || "Dashboard"}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Hello, {userData?.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50 transition"
            >
              Logout
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <section className="h-auto w-full container py-5">
          <div>{children}</div>
        </section>
      </main>
    </section>
  );
}
