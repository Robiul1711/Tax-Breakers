"use client"
import Image from "next/image";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import logo from "@/assets/logo/authLogo.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Signup Data:", data);
    // Handle signup API call here
  };

  // Watch password to validate confirm password
  const password = watch("password");

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
              Create Account
            </h1>
            <p className="[color:rgba(145,153,146,1)] text-base">
              Sign up to get started.
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

            {/* Password */}
            <div className="text-left">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="text-left">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Sign Up */}
            <button
              type="submit"
              className="w-full bg-[#004D3F] text-white py-3 rounded-lg font-medium border border-[#1F825EB8]/70 shadow-lg hover:bg-[#016A55] transition hover:cursor-pointer"
            >
              Sign Up
            </button>

            {/* OR Separator */}
            <div className="flex px-24 items-center my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="px-3 text-gray-400 text-sm">Or with Sign up</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width={22}
                height={22}
              />
              <span className="text-gray-700 font-medium">Google</span>
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-green-500 font-medium underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
