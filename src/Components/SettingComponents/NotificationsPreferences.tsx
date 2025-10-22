"use client";
import React, { useState } from "react";

const NotificationsPreferences = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: true,
    pushNotifications: true,
    appointmentReminders: true,
    customSmsAlerts: true,
    customPushNotifications: true,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="">


      {/* Notification Channels */}
      <div className="bg-[#FBFBFB] rounded-xl p-6 mb-6">
        <h3 className="font-semibold mb-4 text-gray-800">Notification Channels</h3>

        <div className="space-y-4">
          {[
            {
              label: "Email Alerts",
              desc: "Receive important updates, invoices, and appointment confirmations directly to your email.",
              key: "emailAlerts",
            },
            {
              label: "SMS Alerts",
              desc: "Get quick text message reminders for upcoming deadlines, payments, or scheduled appointments.",
              key: "smsAlerts",
            },
            {
              label: "Push Notifications",
              desc: "Stay updated instantly with real-time notifications on your device, even when the app is closed.",
              key: "pushNotifications",
            },
          ].map(({ label, desc, key }) => (
            <div
              key={key}
              className="flex items-start justify-between border-b border-gray-200 pb-3 last:border-0"
            >
              <div>
                <h4 className="font-medium text-gray-900 md:text-lg mb-2">{label}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>

              {/* Toggle */}
              <button
                onClick={() => handleToggle(key as keyof typeof notifications)}
                className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
                  notifications[key as keyof typeof notifications]
                    ? "bg-[#004D3F]"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notifications[key as keyof typeof notifications]
                      ? "translate-x-5"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Alerts */}
      <div className="bg-[#FBFBFB] rounded-xl p-6 mb-6">
        <h3 className="font-semibold mb-4 text-gray-800">Custom Alerts</h3>

        <div className="space-y-4">
          {[
            {
              label: "Appointment Reminders",
              desc: "Get notified before your scheduled meetings with consultants so you never miss an appointment.",
              key: "appointmentReminders",
            },
            {
              label: "SMS Alerts",
              desc: "Receive alerts about upcoming tax submission and payment deadlines to stay compliant.",
              key: "customSmsAlerts",
            },
            {
              label: "Push Notifications",
              desc: "Be reminded when invoices are approaching their due date or are overdue for payment.",
              key: "customPushNotifications",
            },
          ].map(({ label, desc, key }) => (
            <div
              key={key}
              className="flex items-start justify-between border-b border-gray-200 pb-3 last:border-0"
            >
              <div>
                <h4 className="font-medium text-gray-900 md:text-lg mb-2">{label}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>

              <button
                onClick={() => handleToggle(key as keyof typeof notifications)}
                className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
                  notifications[key as keyof typeof notifications]
                    ?  "bg-[#004D3F]"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notifications[key as keyof typeof notifications]
                      ? "translate-x-5"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Language Settings */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-semibold mb-4 text-gray-800">Language Settings</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900 md:text-lg mb-2">Language:</p>
            <p className="text-sm text-gray-500">
              Choose your preferred language for the interface, notifications, and AI support assistant.
            </p>
          </div>

          <select
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004D3F]"
            defaultValue="English"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Bangla</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPreferences;
