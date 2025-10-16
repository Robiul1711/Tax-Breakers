import Title from "@/common/Title";
import Image from "next/image";
import Banner1 from "@/assets/images/banner_image_1.png"
import Banner2 from "@/assets/images/banner_image_2.png"
import UserImg from "@/assets/images/user_1.png"
import { ChatGPTLogoIcon, SendIcon, StarBurst } from "@/Components/SvgContainer/SvgContainer";
import BannerBackground from "@/assets/images/banner_background.png"
import CommonButton from "@/common/CommonButton";

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${BannerBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className="lg:m-8 m-4 rounded-[24px]">
            <div className="section-padding-x py-[80px] mx-auto">

                <Title level="title72" children="Expert Accounting & Tax Solutions Anytime, Anywhere" className="max-w-[1152px] mx-auto text-center text-[#151515] mb-6" />
                <p className="text-[#677489] text-[20px] font-medium max-w-[860px] mx-auto text-center">Streamline your finances with professional tax and accounting support. Simple, transparent, and tailored to your needs.</p>
                <div className="flex justify-center items-center gap-4 mt-[32px] mb-12" >
                    <CommonButton
                        variant="primary"
                        isLoading={false}
                        className="!px-12 !py-3 !rounded-xl !text-[18px] !font-semibold hover:bg-white">
                        Get Started Free
                    </CommonButton>
                    <CommonButton
                        variant="secondary"
                        isLoading={false} className="!px-12 !py-3 !rounded-xl !text-[18px] !font-semibold">
                        Book An Appointment
                    </CommonButton>
                </div>
                <div className="flex gap-[20px] w-full">
                    <div>
                        <Image src={Banner1} alt="Main Banner" width={1020} height={800} />
                    </div>
                    <div>
                        <div className="flex flex-col justify-between w-full gap-[20px]">
                            <Image src={Banner2} alt="Sub Banner" width={510} height={400} />
                            <div className="rounded-2xl p-4 bg-white">
                                <div className="bg-[#F4F4F4] p-4 rounded-2xl">
                                    <div className="flex justify-center items-center">
                                        <h2 className=" border bg-[#FFF] border-[#095641] text-[#000] font-semibold px-2 rounded-full shadow-[0_0_4px_rgba(9,86,65,1)] ">Live Chat</h2>
                                    </div>
                                    <div className="flex justify-end items-center mt-6 gap-2">
                                        <p className="text-[#000] font-medium text-left">Lorem ipsum dolor sit amet consectetur.</p>
                                        <Image src={UserImg} alt="User Image" width={44} height={44} />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
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
                                        className="flex items-center p-3 rounded-xl border border-[#E5E5E5] shadow-sm mt-3 bg-white"
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