"use client";
import Title from "@/common/Title";
import NotificationsPreferences from "@/Components/SettingComponents/NotificationsPreferences";
import Securityuthentication from "@/Components/SettingComponents/Securityuthentication";
import SubscriptionBilling from "@/Components/SettingComponents/SubscriptionBilling";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AccountSetting from "@/Components/SettingComponents/AccountSetting";
import MyAccount from "@/Components/SettingComponents/MyAccount";

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  const tabs = [
    {
      id: 1,
      name: "My Account",
      // icon:<FaRegUser /> ,
      type: "content",
      content: <MyAccount />,
    },

    {
      id: 2,
      name: "Account Settings",
      // icon: <FaLock />,
      type: "content",
      content: <AccountSetting />,
    },
    {
      id: 3,
      name: "Security & Authentication",
      // icon: <FaLock />,
      type: "content",
      content: <Securityuthentication />,
    },
    {
      id: 4,
      name: "Subscription & Billing",
      // icon: <FaLock />,
      type: "content",
      content: <SubscriptionBilling />,
    },
    {
      id: 5,
      name: "Notifications & Preferences",
      // icon: <FaLock />,
      type: "content",
      content: <NotificationsPreferences />,
    },
  ];
  return (
    <div className="xl:mr-8">
      <div className="lg:p-8 p-4 bg-[#FBFBFB] rounded-3xl flex flex-col gap-4 pb-8">
        <Title level="title32">Settings</Title>
        <p className="text-[#677489] lg:text-[18px] md:text-base text-sm">
          Manage your account preferences, update your details, and customize
          your experience—all in one place.
        </p>
      </div>
      <div className="w-full mt-8 bg-[#FBFBFB] xl:pr-2 xl:pl-1 p-4 rounded-3xl">
        <div className="grid md:grid-cols-[14rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr] 2xl:grid-cols-[19rem_1fr] gap-4 md:gap-6 rounded-xl">
          {/* Sidebar Tabs */}
          <div className="md:sticky top-6 self-start space-y-4 lg:w-76 p-1 h-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center lg:px-4 lg:py-3 2xl:text-xl w-full cursor-pointer transition-all shrink-0 sm:flex-shrink-none
            ${
              activeTab === tab.id
                ? "text-black font-bold"
                : "text-[#677489]"
            }
          `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabBackground"
                    className="absolute inset-0   rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <div className="flex gap-2 sm:gap-3 z-10">
                  {/* <span className="text-base sm:text-xl">{tab.icon}</span> */}
                  <span>
                    {tab.name}
                  </span>
                </div>

                {activeTab === tab.id ? (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute right-3 w-2 h-2 rounded-full "
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                ) : (
                  <div className="absolute right-3 w-2 h-2 rounded-full bg-gray-400/0 group-hover:bg-gray-400/30 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className=" relative bg-white rounded-2xl backdrop-filter md:mt-0 mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 md:p-6 "
              >
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-900">
                  {/* <span>{tabs.find((t) => t.id === activeTab)?.icon}</span> */}
                  <span>{tabs.find((t) => t.id === activeTab)?.name}</span>
                </h3>
                <div className="prose">
                  {tabs.find((tab) => tab.id === activeTab)?.content ||
                    tabs[0].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
