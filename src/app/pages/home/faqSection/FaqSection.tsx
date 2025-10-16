"use client";
import SectionHeader from "@/common/SectionHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";
import MessagePngImg from "@/assets/images/message.png"
import Image from "next/image";
import Title from "@/common/Title";
import CommonButton from "@/common/CommonButton";

const faqData = [
    {
        question: "Can I connect multiple bank accounts?",
        answer:
            "Yes! With the Pro and Premium plans, you can connect an unlimited number of accounts and manage them all from one dashboard.",
    },
    {
        question: "Is my financial data secure?",
        answer: "Yes, your financial data is protected with bank-level encryption and secure cloud infrastructure. We follow strict compliance standards to ensure your information remains confidential and safe at all times.",
    },
    {
        question: "Does Coinest support mobile access?",
        answer: "Absolutely. Coinest is fully optimized for mobile devices, allowing you to securely access your financial dashboard, track expenses, and manage your account from anywhere, anytime.",
    },
    {
        question: "What’s included in the free plan?",
        answer: "The free plan includes access to core tracking tools, basic financial reports, secure data storage, and the ability to connect a limited number of accounts. You can upgrade anytime to unlock advanced analytics and automation features.",
    }

];


const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-[145px]">
            <SectionHeader title="FAQ" main_title="Frequently Asked Questions" description="Got questions? We’ve got you covered—here are some quick answers to help you get the most out of Coinest." />

            <div className="flex gap-5 mt-12 w-full">
                <div className="space-y-5 w-[65%]">
                    {faqData?.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-[#E5E5E5] cursor-pointer  rounded-2xl transition-all duration-300 ${openIndex === index ? "bg-[#E7F9DE]" : "bg-[#FBFBFB]"}`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center cursor-pointer w-full text-left focus:outline-none mb-3 pt-7 px-6"
                            >
                                <h3 className="text-xl font-semibold text-[#1E4841]">
                                    {faq?.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="cursor-pointer"
                                >
                                    {
                                        openIndex === index ? <FiMinus size={24} className="text-gray-600" /> : <FiPlus size={24} className="text-gray-600" />
                                    }
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className=" text-[#677489] text-lg leading-relaxed pb-6 px-6">
                                            {faq?.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="w-[35%] bg-[#FBFBFB]  border border-[#E5E5E5] rounded-3xl p-8 flex flex-col items-center">
                    <Image className="mb-8" src={MessagePngImg} alt="Message icon" width={116} height={116} />
                    <Title level="title24" children="Do you have more questions?" />
                    <p className="text-[#515151] text-center mt-4">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <div className="flex justify-center items-center w-full gap-4 mt-8" >
                        <CommonButton
                            className="!px-8 !py-[22px] !w-full !border !rounded-xl !text-[18px] font-semibold"
                            variant="secondary"
                        >View More</CommonButton>
                        <CommonButton
                            variant="primary"
                            className="!px-8 !py-[22px] !w-full !rounded-2xl !text-[18px] !font-semibold"

                        >
                            Live Chat
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;