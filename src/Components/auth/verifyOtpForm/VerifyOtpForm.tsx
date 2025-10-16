"use client";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "@/assets/logo/authLogo.png";
import CommonButton from "@/common/CommonButton";
import Link from "next/link";

const VerifyOtpForm = () => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    // Handle auto-focus next input
    const handleChange = (index: number, value: string) => {
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]!.focus();
        }
        if (value.length === 0 && index > 0) {
            inputRefs.current[index - 1]!.focus();
        }
    };

    const handleSubmit = () => {
        const otp = inputRefs.current.map((input) => input!.value).join("");
        console.log("Entered OTP:", otp);
        // Call your OTP verification API here
    };

    return (
        <div className="min-h-screen p-6">
            <div className="p-4 rounded-2xl auth-bg h-[900px] flex items-center justify-center">
                <div className="auth-form-bg shadow-[3px_3px_40px_0px_rgba(0,0,0,0.06)] rounded-2xl max-w-xl w-full mx-auto px-10 py-14">
                    {/* Top */}
                    <div className="w-full text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Link href={'/'}>
                                <Image src={logo} height={180} width={160} alt="auth logo" />
                            </Link>
                        </div>
                        <h1 className="text-3xl font-semibold mb-3 text-gray-800">
                            Verify OTP
                        </h1>
                        <p className="text-gray-500 text-base">
                            Please Verify Your Email Address
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex justify-center gap-4">
                            {[0, 1, 2, 3].map((i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => {
                                        inputRefs.current[i] = el;
                                    }}
                                    onChange={(e) => handleChange(i, e.target.value)}
                                    className="w-16 h-16 text-center text-2xl border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition"
                                />
                            ))}
                        </div>

                        <div className="mt-2 text-center">
                            <p className="text-sm">We've sent a 4 desist verification code to your email. Chock your spam, folder in case you didn't receive the code. </p>
                        </div>

                        {/* Verify Button */}
                         <CommonButton
                            type="submit"
                            variant="primary"  
                            fullWidth 
                            isLoading={false}
                        >
                            Verify OTP
                        </CommonButton>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Didn't receive the code?{" "}
                        <button className="text-green-500 font-medium underline hover:cursor-pointer">
                            Resend OTP
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtpForm;