import CommonBannerTwo from "@/common/CommonBannerTwo";
import SectionHeader from "@/common/SectionHeader";
import Title from "@/common/Title";
import { TaxAnalyticsIcon } from "@/Components/SvgContainer/SvgContainer";
import Image from "next/image";
import ServiceMeetingImg from "@/assets/images/home_service_meeting.png"
import FaqSection from "@/app/pages/home/faqSection/FaqSection";
import ExploreMoreServices from "@/app/pages/services/exploreMoreServices/ExploreMoreServices";
import Testimonial from "@/app/pages/home/testimonial/Testimonial";


const ServiceDetailsPage = async ({ params }: { params: Promise<{ title: string }> }) => {
    const { title } = await params;
    const mainTitle = title
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div>
            <CommonBannerTwo main_title={mainTitle} description="Our personal tax consultation service is designed to simplify the complexities of taxation for individuals, freelancers, and self-employed professionals. We provide clear guidance to minimize tax liabilities, ensure compliance, and maximize savings." />
            <div className="section-padding-x">
                <div className="my-36">
                    <SectionHeader title={mainTitle} main_title="What We Offer" description="At My Tax Braker, At [Your Company Name], we offer a full range of accounting and tax consultancy services designed to simplify your financial journey. Whether you’re an individual or a business, our solutions are crafted to ensure accuracy, compliance, and peace of mind." />
                    <div className="mt-12 flex lg:flex-row flex-col gap-5 w-full">
                        <div className="lg:w-[40%] flex flex-col gap-5">
                            <div className="bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8">
                                <Title level="title24" children='What We Offer' />
                                <p className="text-[#515151] mt-4 mb-[21px]">Get professional guidance on your personal taxes. From income tax filing to strategic tax planning, we help you stay compliant while maximizing your savings.</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Income tax filing and reporting</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Tax planning and strategy</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Guidance on deductions and exemptions</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Compliance checks to avoid penalties</p>
                                </div>
                            </div>
                            <div className="bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8">
                                <Title level="title24" children='Benefits' />
                                <p className="text-[#515151] mt-4 mb-[21px]">Manage your business finances with confidence. Our experts provide advice on bookkeeping, payroll management.</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Save time and reduce stress with expert support</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Save time and reduce stress with expert support</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Stay fully compliant with tax laws</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <TaxAnalyticsIcon />
                                    <p className="text-[#000] font-medium">Gain clarity on complex tax rules</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[60%] flex flex-col gap-5">
                            <div className="flex-1">
                                <Image className="w-full h-full object-cover rounded-[25px]" src={ServiceMeetingImg} alt="Service meeting" width={823} height={456} />
                            </div>
                            <div className="flex-1 gap-5">
                                <div className="bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8 h-full">
                                    <Title level="title24" children='Ideal For' />
                                    <p className="text-[#515151] my-4">Individuals, freelancers, and self-employed professionals who want stress-free and accurate tax management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FaqSection/>
                <ExploreMoreServices/>
            </div>
            <Testimonial/>
        </div>
    );
};

export default ServiceDetailsPage;