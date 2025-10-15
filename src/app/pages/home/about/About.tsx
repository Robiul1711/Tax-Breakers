
import SectionHeader from "@/common/SectionHeader";
import Image from "next/image";
import AboutImg from "@/assets/images/About.png"
import Title from "@/common/Title";
import { FlashIcon } from "@/Components/SvgContainer/SvgContainer";


const About = () => {
    return (
        <div className="mt-[144px] mb-[120px]">
            <SectionHeader title="About Us" main_title="Empowering Your Financial Journey" />
            <div className="flex justify-between gap-[25px] mt-12">
                <div className="flex-1">
                    <Image className="w-full h-full" src={AboutImg} alt="About us" width={725} height={680} />
                </div>
                <div className="flex-1 bg-[#FBFBFB] border border-[#E5E5E5] rounded-3xl p-8">
                    <Title level="title24" children="Your Trusted Partner in Accounting & Tax Solutions"/>
                    <p className="mt-6 mb-4 text-[#515151] ">At <span className="text-[#151515] font-semibold">My Tax Braker</span>, we believe managing your finances should be simple, transparent, and stress-free. Our mission is to provide individuals and businesses with expert accounting and tax consultancy services that empower them to make confident financial decisions.</p>
                    <p>With a team of experienced professionals, we specialize in <span className="text-[#151515] font-semibold"> personal tax consultations, business accounting advice, VAT filing assistance,</span> and <span className="text-[#151515] font-semibold">tailored financial planning</span>. Whether you’re a startup, a growing business, or an individual looking for reliable tax guidance, we’re here to help.</p>
                    <Title level="title24" children="Why Choose Us" className="mt-6 mb-8"/>
                    <div className="space-y-4">
                        <div className="rounded-[14px] border border-[#E3E8EF] bg-[#FFF] backdrop-blur-[17.5px] flex items-center gap-2 p-5">
                        <div className="bg-[#BBF49C] w-9 h-9 rounded-full flex justify-center items-center ">
                            <FlashIcon/>
                        </div>
                        <h2 className="text-[#515151]"><span className="text-[#0E1109] font-semibold">Expertise You Can Trust - </span> Years of industry experience with proven results.</h2>
                    </div>
                    <div className="rounded-[14px] border border-[#E3E8EF] bg-[#FFF] backdrop-blur-[17.5px] flex items-center gap-2 p-5">
                        <div className="bg-[#BBF49C] w-9 h-9 rounded-full flex justify-center items-center ">
                            <FlashIcon/>
                        </div>
                        <h2 className="text-[#515151]"><span className="text-[#0E1109] font-semibold">Expertise You Can Trust - </span> Years of industry experience with proven results.</h2>
                    </div>
                    <div className="rounded-[14px] border border-[#E3E8EF] bg-[#FFF] backdrop-blur-[17.5px] flex items-center gap-2 p-5">
                        <div className="bg-[#BBF49C] w-9 h-9 rounded-full flex justify-center items-center ">
                            <FlashIcon/>
                        </div>
                        <h2 className="text-[#515151]"><span className="text-[#0E1109] font-semibold">Expertise You Can Trust - </span> Years of industry experience with proven results.</h2>
                    </div>
                    <div className="rounded-[14px] border border-[#E3E8EF] bg-[#FFF] backdrop-blur-[17.5px] flex items-center gap-2 p-5">
                        <div className="bg-[#BBF49C] w-9 h-9 rounded-full flex justify-center items-center ">
                            <FlashIcon/>
                        </div>
                        <h2 className="text-[#515151]"><span className="text-[#0E1109] font-semibold">Expertise You Can Trust - </span> Years of industry experience with proven results.</h2>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;