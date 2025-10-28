"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiLock } from "react-icons/fi";

interface PasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function SecurityAuthentication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordFormValues>();

  const [twoFAEnabled, setTwoFAEnabled] = React.useState(true);
  const [smsEnabled, setSmsEnabled] = React.useState(true);

  const onSubmit: SubmitHandler<PasswordFormValues> = (data) => {
    console.log("Password Data:", data);
    reset();
  };

  return (
    <div className="space-y-10">
      {/* CHANGE PASSWORD */}
      <div className="bg-[#FAFAFA] rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-900">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Current Password */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-2">Current Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("currentPassword", { required: "Current password is required" })}
                  className="w-full border border-[#E6E8E5] shadow rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              {errors.currentPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>
              )}
            </div>

            {/* New Password */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("newPassword", { required: "New password is required" })}
                  className="w-full border border-[#E6E8E5] shadow rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col ">
              <label className="text-sm text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("confirmPassword", { required: "Please confirm your password" })}
                  className="w-full border border-[#E6E8E5] shadow rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-all"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* TWO-FACTOR AUTHENTICATION */}
      <div className="bg-[#FAFAFA] rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-900">
          Two-Factor Authentication
        </h2>

        <div className="space-y-6">
          {/* 2FA Toggle */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">
              Enable 2FA (TOTP Authenticator App)
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={twoFAEnabled}
                onChange={() => setTwoFAEnabled(!twoFAEnabled)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-emerald-700 transition-all"></div>
              <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>

          {/* SMS Code Toggle */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Enable SMS Code</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={smsEnabled}
                onChange={() => setSmsEnabled(!smsEnabled)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-emerald-700 transition-all"></div>
              <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
