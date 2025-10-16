"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import notFoundImage from "../assets/notFoundImage/Illustration.png";
import logo from "@/assets/logo/authLogo.png";
import CommonButton from "@/common/CommonButton";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="p-4 rounded-2xl auth-bg h-[900px] flex items-center justify-center">
        <motion.div
          className="auth-form-bg relative shadow-[3px_3px_40px_0px_rgba(0,0,0,0.06)] rounded-2xl max-w-xl w-full mx-auto px-10 py-14"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Top Section */}
          <div className="w-full text-center mb-8">
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Image src={logo} height={180} width={160} alt="auth logo" />
            </motion.div>

            <motion.h1
              className="text-3xl font-semibold mb-3 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Sorry, page not found!
            </motion.h1>

            <motion.p
              className="[color:rgba(145,153,146,1)] text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
              mistyped the URL? Be sure to check your spelling.
            </motion.p>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src={notFoundImage}
              alt="Page not found illustration"
              width={380}
              height={380}
              className="mb-8"
            />
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
          >
            <CommonButton link="/" className="!font-normal">Go to Home</CommonButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
