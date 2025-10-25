"use client";
import SectionHeader from "@/common/SectionHeader";
import AboutImg from "@/assets/images/About.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpLeft } from "react-icons/fi";
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
    answer:
      "We offer strategic business consulting and comprehensive accounting services to help you manage finances, optimize operations, and make informed decisions that drive growth.",
  },
  {
    question: "Business Consulting & Accounting",
    answer:
      "We offer strategic business consulting and comprehensive accounting services to help you manage finances, optimize operations, and make informed decisions that drive growth.",
  },
  {
    question: "VAT Filing & Compliance",
    answer:
      "Our VAT experts ensure accurate filing and full compliance with regulatory requirements, helping you avoid penalties while maintaining smooth financial operations.",
  },
  {
    question: "Audit & Assurance Services",
    answer:
      "We provide professional audit and assurance services to verify financial accuracy, enhance transparency, and build stakeholder confidence in your business processes.",
  },
  {
    question: "VAT Filing & Compliance",
    answer:
      "Our VAT experts ensure accurate filing and full compliance with regulatory requirements, helping you avoid penalties while maintaining smooth financial operations.",
  },
  {
    question: "Audit & Assurance Services",
    answer:
      "We provide professional audit and assurance services to verify financial accuracy, enhance transparency, and build stakeholder confidence in your business processes.",
  },
];

const WeOffer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <SectionHeader
        title="What we offer"
        main_title="Solutions Tailored for You"
      />

      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        {/* Accordion Section */}
        <div className="flex-1 space-y-5">
          {weOffersData.map((faq, index) => (
            <div
              key={index}
              className="border border-[#E5E5E5] rounded-2xl bg-[#FBFBFB] transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left px-5 sm:px-6 py-4 sm:py-5 focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#1E4841]">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <FiArrowUpLeft size={22} className="text-gray-600" />
                  ) : (
                    <FaArrowRight size={22} className="text-gray-600" />
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
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#677489] text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full">
          <Image
            src={AboutImg}
            alt="About img"
            width={725}
            height={680}
            className="object-cover w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
