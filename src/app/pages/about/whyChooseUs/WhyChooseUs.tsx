import SectionHeader from "@/common/SectionHeader";
import Title from "@/common/Title";

const WhyChooseUs = () => {
    return (
        <div className="my-18 lg:my-36">
            <SectionHeader title="Why Choose Us" main_title="What Sets Us Apart" />
            <div className="mt-12">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#004D3F] flex justify-center items-center rounded-3xl p-6 xl:p-13 h-full">
                            <h2 className="text-[#FFF] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-center">24/7 Support</h2>
                        </div>
                        <div className="hidden md:flex xl:hidden bg-[#fbfbfb] border border-gray-100  justify-center items-center rounded-3xl p-6 xl:p-13">
                            <h2 className="text-[#101115] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-center">Proactive Advice</h2>
                        </div>
                    </div>
                    <div className="bg-[#fbfbfb] border border-gray-100 rounded-3xl lg:p-8 p-4">
                        <Title level="title32" children="Personalized Solutions" />
                        <p className="text-[#677489] mt-[18px] mb-8">Every client’s financial situation is unique. We provide customized strategies and plans tailored to your needs, goals, and growth objectives, ensuring you get the exact support you require.</p>
                        <Title level="title32" children="Expert Professionals" />
                        <p className="text-[#677489] mt-[18px]">Our team consists of certified accountants, tax consultants, and financial advisors with years of experience helping individuals and businesses succeed. You can rely on our knowledge to handle even the most complex financial matters with precision.</p>
                    </div>
                    <div className="md:hidden bg-[#fbfbfb] border border-gray-100 xl:flex justify-center items-center rounded-3xl  p-6 xl:p-13">
                        <h2 className="text-[#101115] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-center">Proactive Advice</h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse xl:flex-row  gap-5 mt-5">
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#fbfbfb] border border-gray-100 flex justify-center items-center rounded-3xl  p-6 xl:p-13 h-full">
                            <h2 className="text-[#101115] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-center">Trust & Integrity</h2>
                        </div>
                        <div className="hidden md:flex xl:hidden bg-[#E7F9DE] justify-center items-center rounded-3xl  p-6 xl:p-13">
                            <h2 className="text-[#004D3F] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-center">Proactive Advice</h2>
                        </div>
                    </div>
                    <div className="md:hidden bg-[#E7F9DE] xl:flex justify-center items-center rounded-3xl  p-6 xl:p-13">
                        <h2 className="text-[#004D3F] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-center">Proactive Advice</h2>
                    </div>
                    <div className="bg-[#fbfbfb] border border-gray-100 rounded-3xl lg:p-8 p-4">
                        <Title level="title32" children="Technology-Driven" />
                        <p className="text-[#677489] mt-[18px] mb-8">We leverage the latest accounting software and secure online platforms to make managing your finances easier, faster, and more reliable. Our tools simplify bookkeeping, filing, and reporting.</p>
                        <Title level="title32" children="Transparent Pricing" />
                        <p className="text-[#677489] mt-[18px]">We believe in honesty and clarity. Our pricing is straightforward, with no hidden fees or surprise charges, so you know exactly what you’re paying for.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;