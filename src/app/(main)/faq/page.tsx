"use client";
import CommonBannerThree from "@/common/CommonBannerThree";
import featureImage from "@/assets/images/Featured Image 2.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { getAllFaq } from "@/services/faq/faq";
import { TFaqData } from "@/Types";

const FaqPage = () => {
    const [faqData, setFaqData] = useState<TFaqData>({
        navigation: [],
        categories: []
    });

    const [activeCategorySlug, setActiveCategorySlug] = useState<string>("");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllFaq();
            if (!(result instanceof Error)) {
                setFaqData(result);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (faqData.categories.length > 0) {
            setActiveCategorySlug(faqData.categories[0].slug);
        }
    }, [faqData]);

    const currentCategory =
        faqData.categories.find((category) => category.slug === activeCategorySlug) ||
        faqData.categories[0] ||
        null;

    const faqsToDisplay = currentCategory?.faqs || [];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const switchCategory = (slug: string) => {
        setActiveCategorySlug(slug);
        setOpenIndex(null);
    };

    return (
        <div className="overflow-x-hidden">
            <div className="relative">
                <CommonBannerThree
                    title="FAQ"
                    main_title="Tax Breaks: FAQs  Key Tax Breaks."
                    description="Understanding tax breaks is crucial for savings. This section highlights strategies that can impact your financial planning."
                />
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/3 w-full">
                    <Image src={featureImage} height={1024} width={1320} alt="feature image" />
                </div>
            </div>

            <div className="section-padding-x mt-120 mb-36">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-[35%]">
                        <ul className="bg-[#FBFBFB] rounded-[16px] py-6 px-12">
                            {faqData.navigation.map((navItem) => (
                                <li key={navItem.slug}>
                                    <button
                                        onClick={() => switchCategory(navItem.slug)}
                                        className={`w-full text-left transition-all cursor-pointer duration-300 ${
                                            navItem?.title === "Chat & Support"
                                                ? ""
                                                : "border-b border-[#E5E5E5]"
                                        } py-6 text-[26px] ${
                                            activeCategorySlug === navItem.slug
                                                ? "text-[#004D3F] font-semibold"
                                                : "text-[#677489] hover:text-[#004D3F]"
                                        }`}
                                    >
                                        {navItem?.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQ Accordion Content */}
                    <div className="space-y-5 w-full lg:w-[65%]">
                        {currentCategory && (
                            <h1 className="text-3xl font-bold text-[#1E4841] mb-6">
                                {currentCategory.categoryTitle}
                            </h1>
                        )}

                        {faqsToDisplay.length > 0 ? (
                            faqsToDisplay.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`border border-[#E5E5E5] cursor-pointer rounded-2xl transition-all duration-300 ${
                                        openIndex === index ? "bg-[#E7F9DE]" : "bg-[#FBFBFB]"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="flex justify-between items-center w-full text-left focus:outline-none px-6 py-5"
                                    >
                                        <h3 className="text-xl font-semibold text-[#1E4841]">
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 ml-4"
                                        >
                                            {openIndex === index ? (
                                                <FiMinus size={24} className="text-gray-600" />
                                            ) : (
                                                <FiPlus size={24} className="text-gray-600" />
                                            )}
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
                                                <div className="text-[#677489] text-lg leading-relaxed pb-6 px-6">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No FAQs available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;