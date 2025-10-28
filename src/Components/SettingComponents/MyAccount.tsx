"use client";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { PDFIcon } from "@/common/DashboardSvg/DashSVG";
import Image from "next/image";

export default function MyAccount() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#FBFBFB] rounded-xl shadow-sm p-4 sm:p-6">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
          <div className="flex items-center xl:justify-between gap-4 sm:gap-6 xl:w-auto lg:w-full">
            <div className="w-1/3 lg:flex items-center xl:justify-start justify-center">
              <Image
                className="xl:w-[180px] xl:h-[116px] w-full h-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                alt="Profile"
                width={126}
                height={126}
              />
            </div>

            <div className="w-2/3 text-left">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                Ralph Franecki
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                Dose Advocate, Writer
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                5708 Common Lane
              </p>
            </div>
          </div>

          <button className="self-end md:self-start flex items-center md:gap-2 gap-1 md:px-3 px-1 py-1 md:py-1.5 text-[#004D3F] border border-[#004D3F] rounded-md hover:bg-teal-50 transition-colors text-xs md:text-sm">
            <span>Edit</span>
            <FiEdit2 className="md:w-4 w-3 md:h-4 h-3" />
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="bg-[#FBFBFB] rounded-xl shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-md lg:text-xl font-semibold text-gray-900">
            Personal Information
          </h2>
          <button className="flex items-center md:gap-2 gap-1 md:px-3 px-1 py-1 md:py-1.5 text-[#004D3F] border border-[#004D3F] rounded-md hover:bg-teal-50 transition-colors text-xs md:text-sm">
            <span>Edit</span>
            <FiEdit2 className="md:w-4 w-3 md:h-4 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Name</p>
            <p className="text-gray-900 font-medium text-sm sm:text-base">
              Ralph Franecki
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Email</p>
            <p className="text-gray-900 font-medium text-sm sm:text-base break-all">
              Patricia.Rodriguez38@Gmail.Com
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              Phone Number
            </p>
            <p className="text-gray-900 font-medium text-sm sm:text-base">
              (425) 871-9753
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Address</p>
            <p className="text-gray-900 font-medium text-sm sm:text-base">
              191 Stokes Cliffs, Albertoworth 16444-5273
            </p>
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="bg-[#FBFBFB] rounded-xl shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-md lg:text-xl font-semibold text-gray-900">
            Business Information
          </h2>
          <button className="flex items-center md:gap-2 gap-1 md:px-3 px-1 py-1 md:py-1.5 text-[#004D3F] border border-[#004D3F] rounded-md hover:bg-teal-50 transition-colors text-xs md:text-sm">
            <span>Edit</span>
            <FiEdit2 className="md:w-4 w-3 md:h-4 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              Company Name
            </p>
            <p className="text-gray-900 font-medium text-sm sm:text-base">
              JD Consulting Srl
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">VAT ID</p>
            <p className="text-gray-900 font-medium text-sm sm:text-base break-all">
              Patricia.Rodriguez38@Gmail.Com
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">
            PEC (Certified Email)
          </p>
          <p className="text-gray-900 font-medium text-sm sm:text-base break-all">
            John.Doe@Pec.It
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm text-gray-500 mb-3">
            Upload ID/Compliance Docs
          </p>
          <div className="flex flex-col lg:flex-row gap-3">
            <button className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <PDFIcon />
              <span className="text-gray-700 text-sm sm:text-base">
                Income Statement.pdf
              </span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <PDFIcon />
              <span className="text-gray-700 text-sm sm:text-base">
                Balance Sheet.pdf
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}