"use client";

import React, { useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import CommonButton from "@/common/CommonButton";
import { DownloadBoxIcon, FileUploadIcon } from "@/Components/SvgContainer/SvgContainer";
import { FiX } from "react-icons/fi";

interface IFormInputProps {
    label: string;
    name: string;
    register: any;
    errors: any;
    type?: string;
    placeholder?: string;
}

const FormInput: React.FC<IFormInputProps> = ({
    label,
    name,
    register,
    errors,
    type = "text",
    placeholder = "",
}) => (
    <div className="flex flex-col">
        <label className="text-[#0A0A0A] text-[14px] mb-2">{label}</label>
        <input
            {...register(name, { required: `${label} is required` })}
            type={type}
            placeholder={placeholder}
            className={`p-3 border rounded-md text-[#717182] text-[14px] transition ${errors[name] ? "border-red-500" : "border-[rgba(0,0,0,0.10)]"
                }`}
        />
        {errors[name] && (
            <span className="text-red-500 text-xs mt-1">
                {errors[name]?.message as string}
            </span>
        )}
    </div>
);

interface IFormSelectProps {
    label: string;
    name: string;
    register: any;
    errors: any;
    options: { value: string; label: string }[];
}

const FormSelect: React.FC<IFormSelectProps> = ({
    label,
    name,
    register,
    errors,
    options,
}) => (
    <div className="flex flex-col">
        <label className="text-[#0A0A0A] text-[14px] mb-2">{label}</label>
        <select
            {...register(name, { required: `${label} is required` })}
            className={`p-3 border rounded-md text-[#717182] text-[14px] transition ${errors[name] ? "border-red-500" : "border-[rgba(0,0,0,0.10)]"
                }`}
        >
            <option value="">Select {label}</option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
        {errors[name] && (
            <span className="text-red-500 text-xs mt-1">
                {errors[name]?.message as string}
            </span>
        )}
    </div>
);

const AppointmentForm = () => {
    const fileInputRef = useRef<HTMLInputElement>(null!)
    const [file, setFile] = useState(null as FileList | null);

    const handleUpload = () => {
        fileInputRef.current.click();
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log("Appointment Data:", data);
        reset();
    };

    return (
        <div className="bg-[#FBFBFB] rounded-3xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                        label="Full Name"
                        name="full_name"
                        register={register}
                        errors={errors}
                        placeholder="Enter your full name"
                    />
                    <FormInput
                        label="Email"
                        name="email"
                        register={register}
                        errors={errors}
                        type="email"
                        placeholder="example@email.com"
                    />
                    <FormInput
                        label="Phone Number"
                        name="phone_number"
                        register={register}
                        errors={errors}
                        placeholder="+880..."
                    />
                    <FormInput
                        label="Location"
                        name="location"
                        register={register}
                        errors={errors}
                        placeholder="City or area"
                    />
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormSelect
                        label="Consultant Type"
                        name="consultant_type"
                        register={register}
                        errors={errors}
                        options={[
                            { value: "doctor", label: "Doctor" },
                            { value: "lawyer", label: "Lawyer" },
                            { value: "nutritionist", label: "Nutritionist" },
                            { value: "therapist", label: "Therapist" },
                        ]}
                    />
                    <FormSelect
                        label="Service Type"
                        name="service_type"
                        register={register}
                        errors={errors}
                        options={[
                            { value: "online", label: "Online Consultation" },
                            { value: "in_person", label: "In-person Visit" },
                            { value: "follow_up", label: "Follow-up Session" },
                        ]}
                    />
                </div>

                {/* Date and Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                        label="Preferred Date"
                        name="preferred_date"
                        register={register}
                        errors={errors}
                        type="date"
                    />
                    <FormSelect
                        label="Duration"
                        name="duration"
                        register={register}
                        errors={errors}
                        options={[
                            { value: "30_min", label: "30 Minutes" },
                            { value: "1_hour", label: "1 Hour" },
                            { value: "2_hours", label: "2 Hours" },
                        ]}
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="text-[#0A0A0A] text-[14px] mb-2 block">
                        Message
                    </label>
                    <textarea
                        {...register("message")}
                        placeholder="Write your message..."
                        className="w-full p-3 border rounded-md text-[#717182] text-[14px] border-[rgba(0,0,0,0.10)] min-h-[100px]"
                    />
                </div>

                {/* upload file */}

                <div onClick={handleUpload} className="cursor-pointer">
                    <h2 className="text-[#0E1109] text-[14px] mb-2">Upload Documents</h2>
                    <div className="border hover:border-black/50 duration-300 bg-[#FBFBFB] rounded-md w-full flex flex-col justify-center items-center mx-auto py-10">
                        <DownloadBoxIcon />
                        <p className="mt-3">Drag & drop or click to upload  Documents</p>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => setFile(e.target.files as any)}
                        />
                    </div>
                </div>
                <div >
                    {file &&
                        <div className="bg-[#EDEDED] inline-block px-8 py-3 rounded-lg mx-8 relative">
                            <button className="p-1 rounded-full bg-red-50 text-red-600 absolute top-1 right-1" onClick={() => setFile(null)}><FiX className="h-2 w-2"/></button>
                            <div className="flex items-center justify-center gap-2">
                                <FileUploadIcon /> {file[0].name}
                            </div>
                        </div>}
                </div>

                {/* Buttons */}
                <div className="flex justify-end">
                    <CommonButton className="px-10! rounded-2xl!" type="submit" variant="primary">
                        Submit Booking
                    </CommonButton>
                </div>
            </form>


        </div>
    );
};

export default AppointmentForm;
