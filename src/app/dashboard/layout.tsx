"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import {
  AccountingIcon,
  ApoinmentIcon,
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
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import UserProfileDropdown from "@/Shared/UserProfileDropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import Title from "@/common/Title";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: <DashboardIcon className="size-5" /> },
  { label: "Invoices", href: "/dashboard/invoices", icon: <InvoiceIcon /> },
  { label: "Appointments", href: "/dashboard/appointments", icon: <ApoinmentIcon /> },
  // { label: "Customer", href: "/dashboard/customer", icon: <CustomerIcon /> },
  { label: "Documents", href: "/dashboard/documents", icon: <DocumentIcon /> },
  { label: "Accounting Management ", href: "/dashboard/accountingmanagement", icon: <AccountingIcon /> },
  { label: "Subscriptions & Payments", href: "/dashboard/subscriptionsandayments", icon: <SubscriptionIcon /> },
  { label: "Help & Ticketing", href: "/dashboard/helpandticketing", icon: <HelpIcon /> },
  { label: "Settings", href: "/dashboard/settings", icon: <SettingsIcon /> },


];

export type TNotification = {
  title: string,
  message: string,
  time: string,
  status: string
}

export const notificationsData: TNotification[] = [
  {
    title: "Appointment Tomorrow",
    message: "You have a meeting with [Consultant Name] tomorrow at [Time]",
    time: '2m',
    status: 'successful'
  },
  {
    title: "You've received a new invoice",
    message: "Invoice #INV-00102 for €350. Pay securely.",
    time: '30m',
    status: 'successful'
  },
  {
    title: "You've received a new invoice",
    message: "Invoice #INV-00102 for €350. Pay securely.",
    time: '30m',
    status: 'successful'
  },
  {
    title: "Appointment Tomorrow",
    message: "You have a meeting with [Consultant Name] tomorrow at [Time]",
    time: '45m',
    status: 'successful'
  },
  {
    title: "You've received a new invoice",
    message: "PInvoice #INV-00102 for €350. Pay securely.",
    time: '50m',
    status: 'successful'
  },
  {
    title: "Appointment Tomorrow",
    message: "You have a meeting with Dr. Hasan tomorrow at 10:00 AM.",
    time: "2m",
    status: "successful"
  },
  {
    title: "New Invoice Received",
    message: "Invoice #INV-00102 for €350 has been generated.",
    time: "10m",
    status: "successful"
  },
  {
    title: "Payment Successful",
    message: "You have successfully paid €350 for invoice #INV-00102.",
    time: "15m",
    status: "successful"
  },
  {
    title: "Appointment Rescheduled",
    message: "Your consultation with Dr. Karim has been moved to 4:00 PM.",
    time: "20m",
    status: "successful"
  },
  {
    title: "Subscription Renewed",
    message: "Your Premium plan has been renewed for another month.",
    time: "25m",
    status: "successful"
  },
  {
    title: "New Message",
    message: "Dr. Rafi sent you a new message about your recent report.",
    time: "30m",
    status: "successful"
  },
  {
    title: "Invoice Overdue",
    message: "Invoice #INV-00098 is 3 days overdue. Please make a payment.",
    time: "35m",
    status: "pending"
  },
  {
    title: "Security Alert",
    message: "New login detected from a different device.",
    time: "38m",
    status: "warning"
  },
  {
    title: "Password Changed",
    message: "Your account password was changed successfully.",
    time: "40m",
    status: "successful"
  },
  {
    title: "Appointment Confirmed",
    message: "Your appointment with Dr. Nabila is confirmed for 2:00 PM tomorrow.",
    time: "45m",
    status: "successful"
  },
  {
    title: "New Comment",
    message: "A consultant commented on your case report.",
    time: "50m",
    status: "successful"
  },
  {
    title: "Health Report Ready",
    message: "Your test results are ready for viewing in your dashboard.",
    time: "55m",
    status: "successful"
  },
  {
    title: "Appointment Reminder",
    message: "Reminder: Consultation with Dr. Imran at 11:00 AM today.",
    time: "1h",
    status: "successful"
  },
  {
    title: "Payment Failed",
    message: "Payment for invoice #INV-00107 could not be processed.",
    time: "1h",
    status: "failed"
  },
  {
    title: "Profile Updated",
    message: "You successfully updated your profile information.",
    time: "1h 5m",
    status: "successful"
  },
  {
    title: "System Maintenance",
    message: "Scheduled maintenance tonight from 12 AM to 2 AM.",
    time: "1h 10m",
    status: "warning"
  },
  {
    title: "New Offer",
    message: "Get 15% off on your next appointment booking.",
    time: "1h 15m",
    status: "successful"
  },
  {
    title: "Doctor Assigned",
    message: "Dr. Rahman has been assigned to your case.",
    time: "1h 20m",
    status: "successful"
  },
  {
    title: "Invoice Sent",
    message: "Invoice #INV-00115 has been emailed to you.",
    time: "1h 25m",
    status: "successful"
  },
  {
    title: "Payment Received",
    message: "We’ve received your payment for invoice #INV-00115.",
    time: "1h 30m",
    status: "successful"
  },
  {
    title: "Account Verified",
    message: "Your email has been successfully verified.",
    time: "1h 40m",
    status: "successful"
  },
  {
    title: "Appointment Completed",
    message: "Your appointment with Dr. Tania has been completed.",
    time: "1h 50m",
    status: "successful"
  },
  {
    title: "New Invoice Received",
    message: "Invoice #INV-00120 for €480 has been added to your account.",
    time: "2h",
    status: "successful"
  },
  {
    title: "Appointment Canceled",
    message: "Your appointment with Dr. Karim has been canceled.",
    time: "2h 5m",
    status: "failed"
  },
  {
    title: "New Feedback Request",
    message: "Please rate your recent consultation with Dr. Noor.",
    time: "2h 10m",
    status: "successful"
  },
  {
    title: "Payment Reminder",
    message: "Invoice #INV-00110 is due tomorrow. Pay securely.",
    time: "2h 15m",
    status: "pending"
  },
  {
    title: "Consultation Update",
    message: "Your consultation summary has been updated.",
    time: "2h 20m",
    status: "successful"
  },
  {
    title: "New Document Uploaded",
    message: "Your medical file has been successfully uploaded.",
    time: "2h 25m",
    status: "successful"
  },
  {
    title: "New Chat Message",
    message: "You have a new chat message from Dr. Saba.",
    time: "2h 30m",
    status: "successful"
  },
  {
    title: "Email Verification Needed",
    message: "Please verify your new email to continue using all features.",
    time: "2h 40m",
    status: "warning"
  },
  {
    title: "Prescription Ready",
    message: "Your new prescription from Dr. Ali is ready for download.",
    time: "2h 45m",
    status: "successful"
  },
  {
    title: "Appointment Reminder",
    message: "Reminder: Health checkup scheduled for 3:00 PM today.",
    time: "3h",
    status: "successful"
  },
  {
    title: "Payment Successful",
    message: "Invoice #INV-00125 for €210 has been successfully paid.",
    time: "3h 15m",
    status: "successful"
  },
  {
    title: "New Offer",
    message: "Get 20% off your next lab test. Offer valid till Friday.",
    time: "3h 30m",
    status: "successful"
  },
  {
    title: "Profile Incomplete",
    message: "Please update your profile to include your contact number.",
    time: "3h 45m",
    status: "warning"
  },
  {
    title: "Session Timeout",
    message: "You have been logged out due to inactivity.",
    time: "4h",
    status: "warning"
  },
  {
    title: "System Notification",
    message: "New app update is available. Please refresh your dashboard.",
    time: "4h 10m",
    status: "successful"
  },
  {
    title: "Feedback Received",
    message: "Thank you for your feedback on your last appointment.",
    time: "4h 15m",
    status: "successful"
  },
  {
    title: "New Appointment Added",
    message: "You booked an appointment with Dr. Nazrul for 5:00 PM.",
    time: "4h 30m",
    status: "successful"
  },
  {
    title: "Upcoming Maintenance",
    message: "Platform will be unavailable from 2 AM to 3 AM tonight.",
    time: "4h 45m",
    status: "warning"
  },
  {
    title: "Invoice Paid",
    message: "Invoice #INV-00132 for €500 has been paid successfully.",
    time: "5h",
    status: "successful"
  },
  {
    title: "Appointment Missed",
    message: "You missed your appointment scheduled for 11:00 AM.",
    time: "5h 10m",
    status: "failed"
  },
  {
    title: "Account Update",
    message: "Your account preferences have been successfully updated.",
    time: "5h 20m",
    status: "successful"
  },
  {
    title: "Report Downloaded",
    message: "Your blood test report was downloaded successfully.",
    time: "5h 30m",
    status: "successful"
  },
  {
    title: "Reminder: Feedback Pending",
    message: "You haven’t rated your last appointment yet.",
    time: "5h 45m",
    status: "pending"
  },
  {
    title: "Payment Declined",
    message: "Your payment for invoice #INV-00140 was declined.",
    time: "6h",
    status: "failed"
  },
  {
    title: "New Support Ticket",
    message: "A new support ticket has been created for your query.",
    time: "6h 15m",
    status: "successful"
  },
  {
    title: "Ticket Resolved",
    message: "Your support ticket #TCK-00452 has been marked as resolved.",
    time: "6h 30m",
    status: "successful"
  },
  {
    title: "Daily Tip",
    message: "Drink at least 2 liters of water daily to stay hydrated.",
    time: "7h",
    status: "successful"
  },
  {
    title: "Health Alert",
    message: "Your blood pressure reading was above normal range.",
    time: "7h 30m",
    status: "warning"
  },
  {
    title: "New Feature Added",
    message: "You can now track your prescriptions directly from your profile.",
    time: "8h",
    status: "successful"
  }

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
  const [isOpen, setIsOpen] = useState(false)
  const closeDrawer = () => setIsOpen(false);
  const handleLogout = () => {
    dispatch(logout());
    router.replace("/auth/login");
  };

  return (
    <section className="min-h-screen w-full xl:pl-8 flex bg-[#FFF] xl:gap-10 overflow-hidden ">
      <div className="sticky top-0 h-screen">
        {/* Sidebar */}
        <Link href="/" className="mb-4 xl:block hidden">
          <Image src={Logo} alt="Logo" width={140} height={72} />
        </Link>

        <aside className="w-[320px] h-[calc(100vh-6rem)] bg-[#E7F9DE] rounded-3xl xl:flex hidden flex-col justify-between overflow-hidden">
          {/* Scrollable upper section */}
          <div className="flex-1 overflow-y-auto custom-scroll p-8 space-y-5">
            <nav className="flex flex-col gap-3">
              {menuItems?.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition ${isActive
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

      {/* ============ MOBILE DRAWER ============ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#f8fdf4] shadow-lg z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
          <div className="flex justify-end items-center p-4 pt-11 border-b">
          <FiX className="text-xl cursor-pointer" onClick={closeDrawer} />
        </div>

        <div className="flex flex-col p-6 gap-6 overflow-y-auto h-[calc(100vh-120px)] custom-scroll">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#EFF0F0] rounded-full pl-10 pr-4 py-2 outline-none placeholder:text-gray-500 text-gray-700 focus:ring-2 focus:ring-[#004d3f] transition"
            />
          </div>

          {/* Menu Links */}
          {menuItems.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              onClick={closeDrawer}
              className={`flex items-center gap-3 font-medium md:text-lg ${pathname === nav.href ? "text-[#085441] font-semibold" : "text-[#595959]"
                } hover:text-[#085441] transition-all duration-300`}
            >
              {nav.icon} {nav.label}
            </Link>
          ))}

          {/* Icons */}
          <div className="flex gap-4 mt-4">
            <Link href={"/dashboard/message"} onClick={closeDrawer} className="p-2 bg-[#ECF4E9] rounded-full">
              <MessageIcon />
            </Link>

            <div className="p-2 bg-[#ECF4E9] rounded-full">
              <NotificationIcon />
            </div>
          </div>

          <UserProfileDropdown logout={handleLogout} />
        </div>
      </div>


      {/* Main Content */}
      <main className="grow flex flex-col py-4 h-screen overflow-hidden">
        {/* Sticky Top Navbar */}
        <header className="hidden xl:flex h-16 pr-8 w-full items-center justify-between sticky top-0 bg-white z-10">
          <div className="max-w-xl w-full relative ml-2">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#EFF0F0] rounded-full pl-10 pr-4 py-2 outline-none placeholder:text-gray-500 text-gray-700 focus:ring-2 focus:ring-[#004d3f] transition"
            />
          </div>

          <div className="flex items-center gap-4">
            <Link href={'/dashboard/message'} className="p-2 bg-[#ECF4E9] rounded-full">
              <MessageIcon />
            </Link>



            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <p className="p-2 bg-[#ECF4E9] rounded-full cursor-pointer">
                  <NotificationIcon />
                </p>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={6}
                className="w-[470px] p-6 animate-in slide-in-from-right-5 border-none rounded-2xl"
              >
                <Title level="title24" children='Notification' />
                <Link href={'/dashboard/notification'} className="flex justify-end items-center mt-2 mb-6 ">
                  <button className=" text-[#004D3F] font-semibold cursor-pointer hover:underline" >See more</button>
                </Link>
                <div className="flex flex-col gap-6">
                  {
                    notificationsData.slice(0, 5)?.map((notification, index) => (
                      <div key={index} className="flex justify-between gap-6 items-start">
                        <div className="flex gap-4">
                          <div className=" w-10 h-10">
                            <div className=" w-10 h-10 rounded-full bg-[#ECF4E9] flex justify-center items-center">
                              <NotificationIcon />
                            </div>
                          </div>
                          <div>
                            <h2 className="text-[#1A1C1E] font-semibold">{notification?.title}</h2>
                            <p className="text-[#6C7278] font-medium text-sm mt-1">{notification?.message}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <h2>{notification?.time}</h2>
                          {
                            notification?.status === "successful" && <p className="w-2 h-2 rounded-full bg-[#004D3F]"></p>
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
              </DropdownMenuContent>
            </DropdownMenu>



            <UserProfileDropdown logout={handleLogout} />
          </div>
        </header>
        <header className="h-16 w-full xl:hidden flex items-center justify-between sticky top-0 bg-white border-b z-10 shadow xl:p-0 lg:p-8 p-4">

          <Link href="/" className="mb-4 block">
            <Image className="lg:w-[140px] w-[100px]" src={Logo} alt="Logo" width={140} height={72} />
          </Link>

          <button
            className="block xl:hidden text-[#085441] text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        </header>

        <section className="flex-1 overflow-y-auto w-full my-4 custom-scroll xl:p-0 lg:px-8 lg:py-4 p-4">
          {children}
        </section>
      </main>
    </section >
  );
}
