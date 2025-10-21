"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import {
  AccountingIcon,
  ApoinmentIcon,
  CustomerIcon,
  DashboardIcon,
  DocumentIcon,
  HelpIcon,
  InvoiceIcon,
  LockIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
  SubscriptionIcon,
} from "@/common/DashboardSvg/DashSVG";
import { FiSearch } from "react-icons/fi";
import UserProfileDropdown from "@/Shared/UserProfileDropdown";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: <DashboardIcon className="size-5" /> },
  { label: "Invoices", href: "/dashboard/invoices", icon: <InvoiceIcon /> },
  { label: "Appointments", href: "/dashboard/appointments", icon: <ApoinmentIcon /> },
  { label: "Customer", href: "/dashboard/customer", icon: <CustomerIcon /> },
  { label: "Documents", href: "/dashboard/documents", icon: <DocumentIcon /> },
  { label: "Accounting Management ", href: "/dashboard/accountingmanagement", icon: <AccountingIcon /> },
  { label: "Subscriptions & Payments", href: "/dashboard/subscriptionsandayments", icon: <SubscriptionIcon /> },
  { label: "Help & Ticketing", href: "/dashboard/helpandticketing", icon: <HelpIcon /> },
  { label: "Settings", href: "/dashboard/settings", icon: <SettingsIcon /> },
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
    <section className="min-h-screen w-full px-8 flex bg-[#FFF] gap-10 overflow-hidden">
      <div className="sticky top-0 h-screen">
        {/* Sidebar */}
        <Link href="/" className="mb-4 block">
          <Image src={Logo} alt="Logo" width={140} height={72} />
        </Link>

        <aside className="w-[320px] h-[calc(100vh-6rem)] bg-[#E7F9DE] rounded-3xl md:flex hidden flex-col justify-between overflow-hidden">
          {/* Scrollable upper section */}
          <div className="flex-1 overflow-y-auto p-8 space-y-5">
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition ${
                      isActive
                        ? "bg-[#004D3F] text-white"
                        : "hover:bg-[#A7EB94]/20 text-[#101115]"
                    }`}
                  >
                    {item.icon} {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-[#A7EB94]" />

            <div className="mb-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-red-50 hover:text-red-500 cursor-pointer w-full transition"
              >
                <LogoutIcon /> Log Out
              </button>
            </div>
          </div>

          {/* Static bottom section */}
          <div className="p-5 bg-[#1E4841] rounded-2xl m-4 flex flex-col items-center text-center">
            <p className="p-2 bg-[#ECF4E9] rounded-full mb-4">
              <LockIcon />
            </p>
            <p className="text-[#ECF4E9] text-xs leading-relaxed">
              Gain full access to your finances with detailed analytics and
              graphs
            </p>
            <button className="text-sm px-4 py-2 bg-[#BBF49C] rounded-lg w-full mt-4 hover:bg-[#A7EB94] transition">
              Get Pro
            </button>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col py-4 h-screen overflow-hidden">
        {/* Sticky Top Navbar */}
        <header className="h-16 w-full flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="max-w-xl w-full relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#EFF0F0] rounded-full pl-10 pr-4 py-2 outline-none placeholder:text-gray-500 text-gray-700 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex items-center gap-4">
            <p className="p-2 bg-[#ECF4E9] rounded-full">
              <MessageIcon />
            </p>

            <p className="p-2 bg-[#ECF4E9] rounded-full">
              <NotificationIcon />
            </p>

            <UserProfileDropdown logout={handleLogout} />
          </div>
        </header>

        <section className="flex-1 overflow-y-auto w-full container my-8 custom-scroll">
          {children}
        </section>
      </main>
    </section>
  );
}
