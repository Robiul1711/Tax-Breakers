"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LuDownload } from "react-icons/lu";

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface BusinessInfo {
  companyName: string;
  email: string;
  pec: string;
  address: string;
}

interface FormValues {
  personal: PersonalInfo;
  business: BusinessInfo;
  documents: FileList | null;
}

export default function AccountSetting() {
  const [profileImage, setProfileImage] = useState<string>(
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      personal: {
        name: "Ralph Franecki",
        email: "Patricia.Rodriguez38@gmail.com",
        phone: "01700000000",
        address: "123 Main Street",
      },
      business: {
        companyName: "JD Consulting Srl",
        email: "Patricia.Rodriguez38@gmail.com",
        pec: "john.doe@pec.it",
        address: "456 Business Ave",
      },
      documents: null,
    },
  });

  // 📸 Handle Profile Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // 🧾 Form Submit
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Submitted Data:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-white ">
      <div className="">
        {/* Profile Photo Section */}
        <div className="mb-6 bg-[#FBFBFB] p-6 rounded-2xl">
          <div className="flex items-center gap-6 w-full xl:w-fit">
            <div className="w-1/3 lg:flex items-center xl:justify-start justify-center">
              <Image
                className="xl:w-[156px] xl:h-[116px] w-full h-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                alt="Profile"
                width={126}
                height={126}
              />
            </div>
            <div className="w-2/3">
              <label
                htmlFor="photo-upload"
                className="inline-block md:px-4 px-2 py-1 md:py-2 border border-[#004D3F] shadow rounded-md text-xs md:text-sm font-medium text-[#004D3F] bg-white hover:bg-gray-50 cursor-pointer transition-colors"
              >
                Upload New Photo
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="text-[10px] md:text-xs text-gray-500 mt-2">At Least 800x800 Px Recommended.</p>
              <p className="text-[10px] md:text-xs text-gray-500">JPG Or PNG Is Allowed</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-6 bg-[#FBFBFB] lg:p-6 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-md lg:text-xl font-semibold text-gray-900">Personal Information</h2>
            <button
              type="submit"
              className="md:px-6 px-2 py-2 md:py-2 bg-[#004D3F] text-white rounded-md hover:bg-teal-800 transition-colors md:text-sm text-xs font-medium"
            >
              Save Changes
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Name</label>
              <input
                {...register("personal.name", { required: "Name is required" })}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.personal?.name && (
                <p className="text-red-500 text-sm mt-1">{errors.personal.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                {...register("personal.email", { required: "Email is required" })}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.personal?.email && (
                <p className="text-red-500 text-sm mt-1">{errors.personal.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <input
                {...register("personal.phone")}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Address</label>
              <input
                {...register("personal.address")}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className=" bg-[#FBFBFB] lg:p-6 p-4  rounded-2xl">
          <div className="flex items-center justify-between mb-6 ">
            <h2 className="text-md lg:text-xl font-semibold text-gray-900">Business Information</h2>
            <button
              type="submit"
              className="md:px-6 px-2 py-2 md:py-2 bg-[#004D3F] text-white rounded-md hover:bg-teal-800 transition-colors md:text-sm text-xs font-medium"
            >
              Save Changes
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Company Name</label>
              <input
                {...register("business.companyName")}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                {...register("business.email")}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">PEC (Certified Email)</label>
              <input
                {...register("business.pec")}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Address</label>
              <input
                {...register("business.address")}
                className="w-full px-4 py-2.5 border border-[#E6E8E5] shadow rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Upload Documents */}
          <div>
            <label className="block text-sm text-gray-600 mb-4">Upload ID/Compliance Docs</label>
            <div className="border-2 border-dashed border-[#E6E8E5] shadow rounded-lg p-4 md:p-12 text-center bg-gray-50">
              <div className="flex flex-col items-center">
                <LuDownload className="w-8 h-8 text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 mb-1">
                  Drag & drop or click to upload Documents
                </p>
                <p className="text-sm text-gray-500 mb-4">Or</p>
                <label
                  htmlFor="file-upload"
                  className="px-6 py-2 bg-[#004D3F] text-white rounded-md hover:bg-teal-800 transition-colors text-sm font-medium cursor-pointer"
                >
                  Browse File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  {...register("documents")}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
