 "use client"
import CommonButton from "@/common/CommonButton";
 import { FieldValues, useForm } from "react-hook-form";
const ContactForm = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log("Contact data:", data);
        // Handle signup API call here
    };
    return (
         <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* Full Name */}
                        <div className="text-left relative">
                            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="full_name"
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.full_name ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("full_name", {
                                        required: "Full Name is required"
                                    })}
                                />
                            </div>
                            {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name.message as string}</p>}
                        </div>
                        {/* Email */}
                        <div className="text-left relative">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("email", {
                                        required: "Email is required"
                                    })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                        </div>
                        {/* Subject */}
                        <div className="text-left relative">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.subject ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("subject", {
                                        required: "Subject is required"
                                    })}
                                />
                            </div>
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message as string}</p>}
                        </div>
                        {/* Phone Number */}
                        <div className="text-left relative">
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="phone_number"
                                    placeholder="Enter your phone number"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition ${errors.phone_number ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("phone_number", {
                                        required: "Phone number is required"
                                    })}
                                />
                            </div>
                            {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number.message as string}</p>}
                        </div>
                        {/* Message */}
                        <div className="text-left relative">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <div>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    rows={4}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#004D3F] focus:border-[#004D3F] outline-none transition resize-none ${errors.message ? "border-red-500" : "border-gray-300"
                                        }`}
                                    {...register("message", {
                                        required: "Message is required"
                                    })}
                                />
                            </div>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                            )}
                        </div>

                        {/* Submit button */}

                        <CommonButton
                            type="submit"
                            variant="primary"
                            fullWidth
                            isLoading={false} 
                            className="!rounded-2xl"
                        >
                            Send Message
                        </CommonButton>
                    </form>
    );
};

export default ContactForm;