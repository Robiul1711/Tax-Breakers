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
  LogoutIcon,
  SettingsIcon,
  SubscriptionIcon,
} from "@/common/DashboardSvg/DashSVG";
const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { label: "Invoices", href: "/dashboard/invoices", icon: <InvoiceIcon /> },
  {
    label: "Appointments",
    href: "/dashboard/appointments",
    icon: <ApoinmentIcon />,
  },
  { label: "Customer", href: "/dashboard/customer", icon: <CustomerIcon /> },
  { label: "Documents", href: "/dashboard/documents", icon: <DocumentIcon /> },
  {
    label: "Accounting Management ",
    href: "/dashboard/accountingmanagement",
    icon: <AccountingIcon />,
  },
  {
    label: "Subscriptions & Payments",
    href: "/dashboard/subscriptionsandayments",
    icon: <SubscriptionIcon />,
  },
  {
    label: "Help & Ticketing",
    href: "/dashboard/helpandticketing",
    icon: <HelpIcon />,
  },
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
    <section className="min-h-screen w-full flex bg-[#FFF] p-10">
      <div>
        {/* Sidebar */}
        <div className=" mb-5">
          <Image src={Logo} alt="Logo" width={140} height={72} />
        </div>
        <aside className="w-[320px] hidden bg-[#E7F9DE] rounded-3xl md:block">
          <nav className="flex flex-col gap-4 p-8 ">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
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
                <div className="p-5 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full"
          >
          <LogoutIcon />  Log Out
          </button>
        </div>
        </aside>
      </div>

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
        <section className="h-auto w-full container m-8">
          <div>{children}</div>
        </section>
      </main>
    </section>
  );
}
