"use client";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "@/common/CommonButton";
import { CreateNewFolderIcon } from "@/Components/SvgContainer/SvgContainer";

type FormData = {
    confirm: boolean;
};

const CreateNewFolderModal = () => {
    const [isOpen, setIsOpen] = useState(false);



    const {
        handleSubmit,
        reset,
        register
    } = useForm({defaultValues: {
        folder_name: ""
    }});

    // Submit handler
    const onSubmit = (data : FieldValues) => {
        console.log("Confirmed Action ✅", data);
        reset();
        setIsOpen(false);
    };

    return (
        <div>
            <CommonButton
                onClick={() => setIsOpen(true)}
                variant="primary" className="!text-[18px] !font-semibold hover:!text-[#004D3F] !border-[#004D3F] !flex !items-center gap-[10px]"><CreateNewFolderIcon /> Create New Folder
                </CommonButton>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
                    >
                        {/* Animated wrapper div instead of motion.form */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="bg-white shadow-md rounded-xl py-6 px-5 md:w-[600px] w-[370px] border border-gray-200"
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                                <h2 className="text-[#191919] text-3xl font-medium">📁 New Folder</h2>
                                <p className="text-[#7F7F7F] mt-2 mb-6">Create a folder to keep related files together.</p>

                                {/* Folder name Input */}
                                <input
                                    type="text"
                                    placeholder="Enter folder name"
                                    className="w-full bg-[#FFF] border border-[#E3E3E3] rounded-md p-2 mb-4 outline-none"
                                    {...register("folder_name", { required: true })}
                                />

                                <div className="flex items-center justify-end gap-4 w-full">
                                    <CommonButton
                                        type="button"
                                        variant="secondary"
                                        className="!font-semibold"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </CommonButton>
                                    <CommonButton
                                        type="submit"
                                        variant="primary"
                                        className="!font-semibold"   
                                    >
                                        <CreateNewFolderIcon />
                                        Create Folder
                                    </CommonButton>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CreateNewFolderModal;