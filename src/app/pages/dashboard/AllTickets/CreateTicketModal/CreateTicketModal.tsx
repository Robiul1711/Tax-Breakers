"use client";
import CommonButton from "@/common/CommonButton";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface TicketFormData {
  title: string;
  category: string;
  priority: string;
  description: string;
}

interface CreateTicketModalProps {
  onClose: () => void;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TicketFormData>({
    defaultValues: {
      title: "",
      category: "",
      priority: "",
      description: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Form submitted:", data);
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => onClose()}
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        aria-modal="true"
        role="dialog"
      >
        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Create New Ticket</h2>
          </div>

          {/* Form Content */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Title */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Write here"
                      {...register("title", {
                        required: "Title is required",
                        minLength: { value: 3, message: "Title must be at least 3 characters" },
                      })}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 outline-none ${errors.title ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title?.message}</p>}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      {...register("category", { required: "Category is required" })}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-[#1E4841] outline-none appearance-none bg-white hover:bg-[#E7F9DE] transition-colors ${errors.category ? "border-red-500" : "border-gray-300"
                        }`}
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23666\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">select here</option>
                      <option value="billing">Billing</option>
                      <option value="performance">Performance</option>
                      <option value="mobile">Mobile Support</option>
                      <option value="enhancement">Enhancement</option>
                      <option value="technical">Technical Support</option>
                      <option value="account">Account Access</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category?.message}</p>}
                  </div>
                </div>

                {/* Priority */}
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    {...register("priority", { required: "Priority is required" })}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 outline-none appearance-none bg-white hover:bg-[#E7F9DE] transition-colors ${errors.priority ? "border-red-500" : "border-gray-300"
                      }`}
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23666\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                    }}
                  >
                    <option value="">select here</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                  {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority?.message}</p>}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
                  <div className="border border-gray-300 rounded-md overflow-hidden">
                    <textarea
                      placeholder="Write here..."
                      {...register("description", {
                        required: "Description is required",
                        minLength: { value: 10, message: "Description must be at least 10 characters" },
                      })}
                      rows={6}
                      className={`w-full px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none resize-none ${errors.description ? "border-red-500" : ""
                        }`}
                    />
                  </div>
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description?.message}</p>}
                </div>
              </div>

              {/* Buttons */}
              <div className="border-t border-gray-200 mt-6 w-full"></div>
              <div className="flex justify-end gap-3 px-6 py-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-14 py-2 text-gray-700 bg-white hover:bg-gray-200 duration-300 border border-gray-300 rounded-md hover:cursor-pointer"
                >
                  Cancel
                </button>
                <CommonButton variant="primary" type="submit" className="!px-14 !py-2">
                  Submit
                </CommonButton>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateTicketModal;
