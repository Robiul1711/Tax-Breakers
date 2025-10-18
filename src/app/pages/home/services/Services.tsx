import SectionHeader from "@/common/SectionHeader";
import Title from "@/common/Title";
import Image from "next/image";
import ServicePhoneImg from "@/assets/images/service_phone.png"
import ServiceMeetingImg from "@/assets/images/home_service_meeting.png"
import { TaxAnalyticsIcon } from "@/Components/SvgContainer/SvgContainer";
import Link from "next/link";


const Services = () => {
    return (
        <div className="mb-[120px]">
            <SectionHeader title="Services" main_title="Expert Financial Solutions Tailored to Your Needs" description="At My Tax Braker, At [Your Company Name], we offer a full range of accounting and tax consultancy services designed to simplify your financial journey. Whether you’re an individual or a business, our solutions are crafted to ensure accuracy, compliance, and peace of mind." />
            <div className="mt-12 flex gap-5 w-full">
                <div className="w-[40%] flex flex-col gap-5">
                    <Link  className="flex-1" href={'/services/personal-tax-consultation'}>
                        <div className="bg-[#FBFBFB] border border-[#E5E5E5] h-full rounded-3xl p-8 hover:border-[#004d3f] transition-all duration-300 hover:shadow-lg">
                            <Title level="title24" children='Personal Tax Consultation' />
                            <p className="text-[#515151] mt-4 mb-[21px]">Get professional guidance on your personal taxes. From income tax filing to strategic tax planning, we help you stay compliant while maximizing your savings.</p>
                            <h2 className="text-xl font-semibold text-[#000] capitalize">What’s Include</h2>
                            <div className="flex items-center gap-2 mt-4">
                                <TaxAnalyticsIcon />
                                <p className="text-[#000] font-medium">Income tax filing</p>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <TaxAnalyticsIcon />
                                <p className="text-[#000] font-medium">Tax planning strategies</p>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <TaxAnalyticsIcon />
                                <p className="text-[#000] font-medium">Compliance checks</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/services/business-accounting-advice'}>
                        <div className="bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8 hover:border-[#004d3f] transition-all duration-300 hover:shadow-lg">
                            <Image className="mb-8" src={ServicePhoneImg} alt="Service phone" width={573} height={278} />
                            <Title level="title24" children='Business Accounting Advice' />
                            <p className="text-[#515151] mt-4 mb-[21px]">Manage your business finances with confidence. Our experts provide advice on bookkeeping, payroll management.</p>
                            <h2 className="text-xl font-semibold text-[#000] capitalize">What’s Include</h2>
                            <div className="flex items-center gap-2 mt-4">
                                <TaxAnalyticsIcon />
                                <p className="text-[#000] font-medium">Bookkeeping & accounting</p>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <TaxAnalyticsIcon />
                                <p className="text-[#000] font-medium">Financial reports & analysis</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="w-[60%] flex flex-col gap-5">
                    <div>
                        <Image className="w-full h-full object-cover rounded-[25px]" src={ServiceMeetingImg} alt="Service meeting" width={823} height={456} />
                    </div>
                    <div className="flex gap-5 flex-1">
                        <Link className="flex-1" href={'/services/vAT-Filing-assistance'}>
                            <div className="bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8 hover:border-[#004d3f] transition-all duration-300 hover:shadow-lg">
                                <Title level="title24" children='VAT Filing Assistance' />
                                <p className="text-[#515151] my-4">Hassle-free VAT registration and filing to ensure timely compliance with regulations.</p>
                                <p className="text-[#515151] mb-[31px]">Stay on top of your VAT obligations with our hassle-free filing services. We ensure timely submissions, accurate calculations, and full compliance with regulations.</p>
                                <h2 className="text-xl font-semibold text-[#000] capitalize">What’s Include</h2>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">VAT registration support</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Monthly/quarterly filing</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Monthly/quarterly filing</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Compliance monitoring</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="flex-1" href={'/services/tailored-financial-planning'}>
                            <div className="bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8 hover:border-[#004d3f] transition-all duration-300 hover:shadow-lg">
                                <Title level="title24" children='Tailored Financial Planning' />
                                <p className="text-[#515151] my-4">Customized strategies for budgeting, investments, and retirement to secure your future.</p>
                                <p className="text-[#515151] mb-[31px]">Plan your future with confidence. Our experts craft personalized financial plans to help you achieve your long-term goals.</p>
                                <h2 className="text-xl font-semibold text-[#000] capitalize">What’s Include</h2>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Budgeting & savings plans</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Budgeting & savings plans</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Investment advice</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Retirement planning</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;