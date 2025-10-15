import Title from "@/common/Title";
import Image from "next/image";
import Banner1 from "@/assets/images/banner_image_1.png"
import Banner2 from "@/assets/images/banner_image_2.png"
import UserImg from "@/assets/images/user_1.png"
import { ChatGPTLogoIcon, SendIcon, StarBurst } from "@/Components/SvgContainer/SvgContainer";
import BannerPatternImg from "@/assets/images/Background Pattern.png"

const Banner = () => {
    return (
        <div className="bg-[linear-gradient(180deg,#FBFEF9_0%,#E5F7DA_100%)] m-8 rounded-[24px]">
            <div className="max-w-[1240px] mx-auto py-[80px] relative">
                {/* banner pattern */}
                <Image className="absolute top-[110px] -left-[120px]" src={BannerPatternImg} alt="Banner Pattern" width={570} height={550} />
                <Image className="absolute top-[110px] -right-[120px]" src={BannerPatternImg} alt="Banner Pattern" width={570} height={550} />

                <Title level="title72" children="Expert Accounting & Tax Solutions Anytime, Anywhere" className="max-w-[1152px] mx-auto text-center text-[#151515] mb-6" />
                <p className="text-[#677489] text-[20px] font-medium max-w-[860px] mx-auto text-center">Streamline your finances with professional tax and accounting support. Simple, transparent, and tailored to your needs.</p>
                <div className="flex justify-center items-center gap-4 mt-[32px] mb-12" >
                    <button className="cursor-pointer px-12 py-3 bg-[#065341] rounded-xl text-white text-[18px] font-semibold">Get Started Free</button>
                    <button className="cursor-pointer px-12 py-3 bg-white border border-[#065341] rounded-xl text-[#0E1109] text-[18px] font-semibold">Book An Appointment</button>
                </div>
                <div className="relative flex gap-6 w-full h-full z-50">
                    <div className="w-[850px] h-[672px]">
                        <Image className="w-full h-full" src={Banner1} alt="Main Banner" width={980} height={756} />
                    </div>
                    <div className="w-[480px] h-full">
                        <div className="flex flex-col justify-between w-full gap-6">
                            <Image className="h-[360px]" src={Banner2} alt="Sub Banner" width={480} height={300} />
                            <div className="rounded-2xl p-4 bg-white">
                                <div className="bg-[#F4F4F4] p-4 rounded-2xl">
                                    <div className="flex justify-center items-center">
                                        <h2 className=" border bg-[#FFF] border-[#095641] text-[#000] font-semibold px-2 rounded-full shadow-[0_0_4px_rgba(9,86,65,1)] ">Live Chat</h2>
                                    </div>
                                    <div className="flex justify-end items-center mt-6 gap-2">
                                        <p className="text-[#000] font-medium text-left">Lorem ipsum dolor sit amet consectetur.</p>
                                        <Image src={UserImg} alt="User Image" width={44} height={44} />
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        <div className="bg-[#065341] w-[44px] h-[44px] rounded-full flex justify-center items-center">
                                            <ChatGPTLogoIcon />
                                        </div>
                                        <div>
                                            <div className="flex gap-[10px]">
                                                <p className="w-[195px] h-[8px] bg-[#D2E4C7] rounded-md"></p>
                                                <p className="w-[98px] h-[8px] bg-[#D9D9D9] rounded-md"></p>
                                            </div>
                                            <div className="flex gap-2 mt-[10px]">
                                                <p className="w-[98px] h-[8px] bg-[#D9D9D9] rounded-md"></p>
                                                <p className="w-[98px] h-[8px] bg-[#D9D9D9] rounded-md"></p>
                                                <p className="w-[98px] h-[8px] bg-[#D9D9D9] rounded-md"></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center p-3 rounded-xl border border-[#E5E5E5] shadow-sm mt-4 bg-white"
                                    >
                                        <StarBurst className="flex-shrink-0 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Ask Anything"
                                            className="flex-grow mx-3 focus:outline-none text-base placeholder-gray-400"
                                        />

                                        {/* Send Button (Green background) */}
                                        <button
                                            className="flex-shrink-0 p-2 ml-1 bg-[#065341] rounded-md text-white transition-colors"
                                            aria-label="Send message"
                                        >
                                            <SendIcon />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;