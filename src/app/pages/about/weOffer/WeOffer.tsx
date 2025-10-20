"use client";
import SectionHeader from "@/common/SectionHeader";
import AboutImg from "@/assets/images/About.png"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpLeft, FiArrowUpRight, FiMinus, FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const weOffersData = [
    {
        question: "Personal Tax Consultation",
        answer:
            "Simplify your tax filing and planning. Our experts guide you through every step, helping you maximize deductions, minimize liabilities, and stay fully compliant with all tax regulations. Whether it’s filing annual returns or planning for future obligations, we make taxes stress-free.",
    },
    {
        question: "Business Consulting & Accounting",
        answer: "We offer strategic business consulting and comprehensive accounting services to help you manage finances, optimize operations, and make informed decisions that drive growth.",
    },
    {
        question: "VAT Filing & Compliance",
        answer: "Our VAT experts ensure accurate filing and full compliance with regulatory requirements, helping you avoid penalties while maintaining smooth financial operations.",
    },
    {
        question: "Audit & Assurance Services",
        answer: "We provide professional audit and assurance services to verify financial accuracy, enhance transparency, and build stakeholder confidence in your business processes.",
    }


];

const WeOffer = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <SectionHeader title="What we offer" main_title="Solutions Tailored for You" />
            <div className="mt-12 flex flex-col lg:flex-row gap-6">
                <div className="space-y-5 flex-1">
                    {weOffersData?.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#E5E5E5] cursor-pointer  rounded-2xl transition-all duration-300 bg-[#FBFBFB]"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center cursor-pointer w-full text-left focus:outline-none mb-3 px-6 pb-3 pt-5"
                            >
                                <h3 className="text-xl font-semibold text-[#1E4841]">
                                    {faq?.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="cursor-pointer"
                                >
                                    {
                                        openIndex === index ? <FiArrowUpLeft size={24} className="text-gray-600" /> : <FaArrowRight size={24} className="text-gray-600" />
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
                <div className="flex-1">
                    <Image className="w-full" src={AboutImg} alt="About img" width={725} height={680}/>
                </div>
            </div>
        </div>
    );
};

export default WeOffer;