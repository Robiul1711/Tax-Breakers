"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import logo from "@/assets/logo/authLogo.png";
import { EmailIcon, PasswordIcon } from "@/Components/SvgContainer/SvgContainer";
import CommonButton from "@/common/CommonButton";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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

    const password = watch("password");
    return (
        <div className="min-h-screen p-6">
            <div className="p-4 rounded-2xl auth-bg min-h-screen flex items-center justify-center">
                <div className="auth-form-bg shadow-[3px_3px_40px_0px_rgba(0,0,0,0.06)] rounded-2xl max-w-xl w-full mx-auto p-10">
                    {/* Top */}
                    <div className="w-full text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Image src={logo} height={180} width={160} alt="auth logo" />
                        </div>
                        <h1 className="text-3xl font-semibold mb-3 text-gray-800">Create Account</h1>
                        <p className="[color:rgba(145,153,146,1)] text-base">Sign up to get started.</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div className="text-left relative">
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
                        <div className="text-left relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <PasswordIcon className="w-5 h-5" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
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
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-12 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible className="w-5 h-5" />
                                ) : (
                                    <AiOutlineEye className="w-5 h-5" />
                                )}
                            </button>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="text-left relative">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <PasswordIcon className="w-5 h-5" />
                                </span>
                                <input
                                    type={showConfirmPassword? "text" : "password"}
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
                             <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-12 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showConfirmPassword ? (
                                    <AiOutlineEyeInvisible className="w-5 h-5" />
                                ) : (
                                    <AiOutlineEye className="w-5 h-5" />
                                )}
                            </button>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message as string}</p>
                            )}
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="rounded-2xl border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                                {...register("terms", { required: "You must accept the terms & conditions" })}
                            />
                            <label htmlFor="terms" className="text-gray-600 text-sm">
                                I agree to the{" "}
                                <Link href="/terms" className="underline">
                                    Terms & Conditions
                                </Link>
                            </label>
                        </div>
                        {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message as string}</p>}


                        {/* Sign Up */}

                        <CommonButton
                            type="submit"
                            variant="primary"
                            fullWidth
                            isLoading={false}
                        >
                            Sign Up
                        </CommonButton>



                        {/* OR Separator */}
                        <div className="flex px-24 items-center my-6">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-3 text-gray-400 text-sm">Or with Sign up</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Google Sign Up */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition hover:cursor-pointer"
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

export default SignUpForm;