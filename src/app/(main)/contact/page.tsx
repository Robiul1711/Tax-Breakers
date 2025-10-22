import ContactForm from "@/app/pages/contact/contactForm/ContactForm";
import ContactMap from "@/app/pages/contact/contactMap/ContactMap";
import SectionHeader from "@/common/SectionHeader";
import Title from "@/common/Title";

import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";


const ContactPage = () => {

    return (
        <div className="section-padding-x my-25">
            <SectionHeader title="Contact Us" main_title="We're here for you!" description="Got a question, need some help, or just wanna chat? Hit up the Coinest team anytime!" />
            <div className="flex lg:flex-row flex-col gap-8  mt-15">
                <div className="flex-1 flex flex-col gap-8">
                    <div className="bg-[#E7F9DE] border border-[#E5E5E5] h-full rounded-[16px] p-8">
                        <Title level="title24" children='Get in Touch' />
                        <p className="text-[#515151] mt-4 mb-[21px]">Connect with our support team or visit our office</p>
                        <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col justify-between lg:items-start md:items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-15 md:gap-15 text-left mt-6">
                            <div className="flex-1 space-y-2">
                                <h2 className="text-[#1E4841] font-semibold">Email</h2>
                                <p className="text-[#1E4841]">contact@mytexbreaker.com</p>
                            </div>
                            <div className="flex-1 space-y-2">
                                <h2 className="text-[#1E4841] font-semibold">Phone</h2>
                                <p className="text-[#1E4841]">+1 (888) 234-6780</p>
                            </div>
                        </div>
                        <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col justify-between lg:items-start md:items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-15 md:gap-15 text-left mt-6">
                            <div className="flex-1 space-y-2">
                                <h2 className="text-[#1E4841] font-semibold">Office</h2>
                                <p className="text-[#1E4841]">Via Roma 45, Appartamento 3, Milano, MI 20121</p>
                            </div>
                            <div className="flex-1 space-y-2">
                                <h2 className="text-[#1E4841] font-semibold">Follow Us</h2>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#A7EB94] flex justify-center items-center text-[#1e4841] text-xl"><FaX /></div>
                                    <div className="w-10 h-10 rounded-full bg-[#A7EB94] flex justify-center items-center text-[#1e4841] text-xl"><FaFacebook /></div>
                                    <div className="w-10 h-10 rounded-full bg-[#A7EB94] flex justify-center items-center text-[#1e4841] text-xl"><FaInstagram /></div>
                                    <div className="w-10 h-10 rounded-full bg-[#A7EB94] flex justify-center items-center text-[#1e4841] text-xl"><FaLinkedin /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden xl:block">
                        <ContactMap />
                    </div>
                </div>
                <div className="flex-1 bg-[#FAFAFA] rounded-[20px] md:p-8 p-4">
                    <ContactForm />
                </div>
            </div>
              <div className="mt-8 hidden lg:block xl:hidden">
                        <ContactMap />
                    </div>
        </div>
    );
};

export default ContactPage;