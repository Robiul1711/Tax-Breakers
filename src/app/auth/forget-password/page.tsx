"use client"
import Image from "next/image";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import logo from "@/assets/logo/authLogo.png";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Email for password reset:", data);
    // Handle password reset API call here
  };

  return (
    <div className="min-h-screen p-6">
      <div className="p-4 rounded-2xl auth-bg h-[900px] flex items-center justify-center">
        <div className="auth-form-bg shadow-[3px_3px_40px_0px_rgba(0,0,0,0.06)] rounded-2xl max-w-xl w-full mx-auto p-10">
          {/* Top */}
          <div className="w-full text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image src={logo} height={180} width={160} alt="auth logo" />
            </div>
            <h1 className="text-3xl font-semibold mb-3 text-gray-800">
              Forgot Password
            </h1>
            <p className="[color:rgba(145,153,146,1)] text-base">
              Enter your email to reset your password.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#004D3F] text-white py-3 rounded-lg font-medium border border-[#1F825EB8]/70 shadow-lg hover:bg-[#016A55] transition hover:cursor-pointer"
            >
              Reset Password
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-green-500 font-medium underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
