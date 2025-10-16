"use client";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/authLogo.png";
import { EmailIcon, PasswordIcon } from "@/Components/SvgContainer/SvgContainer";
import CommonButton from "@/common/CommonButton";

const ResetPasswordForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log("Reset Password Data:", data);
        // Call reset password API here
    };

    const password = watch("password");

    return (
        <div className="min-h-screen p-6">
            <div className="p-4 rounded-2xl auth-bg h-[900px] flex items-center justify-center">
                <div className="auth-form-bg shadow-[3px_3px_40px_0px_rgba(0,0,0,0.06)] rounded-2xl max-w-xl w-full mx-auto px-10 py-14">
                    {/* Top */}
                    <div className="w-full text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Image src={logo} height={180} width={160} alt="auth logo" />
                        </div>
                        <h1 className="text-3xl font-semibold mb-3 text-gray-800">
                            Reset Password
                        </h1>
                        <p className="text-gray-500 text-base">
                            Enter your email and new password to reset your account.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div className="text-left">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <EmailIcon className="w-5 h-5" />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                                    })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                        </div>

                        {/* Password */}
                        <div className="text-left">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <PasswordIcon className="w-5 h-5" />
                                </span>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.password ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    })}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="text-left">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <PasswordIcon className="w-5 h-5" />
                                </span>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: (value) => value === password || "Passwords do not match",
                                    })}
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message as string}</p>}
                        </div>

                        {/* Submit Button */}
                        <CommonButton
                            type="submit"
                            variant="primary"  
                            fullWidth 
                            isLoading={false}
                        >
                            Reset Password
                        </CommonButton>
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

export default ResetPasswordForm;