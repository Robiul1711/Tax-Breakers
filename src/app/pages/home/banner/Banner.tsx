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
        }} className="lg:m-8 m-4 rounded-3xl">
            <div className="section-padding-x md:py-20 py-10 mx-auto">

                <Title level="title72" children="Expert Accounting & Tax Solutions Anytime, Anywhere" className="max-w-6xl mx-auto text-center text-[#151515] mb-6" />
                <p className="text-[#677489] md:text-[20px] font-medium max-w-[860px] mx-auto text-center">Streamline your finances with professional tax and accounting support. Simple, transparent, and tailored to your needs.</p>
                <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8 mb-12" >
                    <CommonButton
                        variant="primary"
                        isLoading={false}
                        className="!px-12 !py-3 !rounded-xl md:!text-[18px] !font-semibold hover:bg-white">
                        Get Started Free
                    </CommonButton>
                    <CommonButton
                        variant="secondary"
                        isLoading={false} className="md:!px-12 !px-6 !py-3 !rounded-xl md:!text-[18px] !font-semibold">
                        Book An Appointment
                    </CommonButton>
                </div>
                <div className="flex 2xl:flex-row flex-col gap-5 2xl:gap-8 w-full h-full">
                    <div>
                        <Image className="w-full h-full"  src={Banner1} alt="Main Banner" width={1020} height={800} />
                    </div>
                    <div>   
                        <div className="flex 2xl:flex-col md:flex-row flex-col justify-between w-full 2xl:gap-8 gap-5">
                            <Image className="flex-1 xl:w-[495px] lg:w-[40%] md:w-[50%] w-full xl:h-[350px] h-full object-cover object-top rounded-3xl" src={Banner2} alt="Sub Banner" width={510} height={400} />
                            <div className="flex-1 xl:w-full lg:w-[40%] md:w-[40%] w-full rounded-2xl md:p-4 p-2 bg-white">
                                <div className="bg-[#F4F4F4] md:p-4 p-2 rounded-2xl h-full flex flex-col justify-center">
                                    <div className="flex justify-center items-center xl:mt-0 2xl:mt-6">
                                        <h2 className=" border bg-[#FFF] border-[#095641] text-[#000000] font-semibold px-2 rounded-full shadow-[0_0_4px_rgba(9,86,65,1)] ">Live Chat</h2>
                                    </div>
                                    <div className="flex justify-end items-center mt-6 gap-2">
                                        <p className="text-[#000000] font-medium text-left">Lorem ipsum dolor sit amet consectetur.</p>
                                        <Image src={UserImg} alt="User Image" width={44} height={44} />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="bg-[#065341] w-11 h-11 rounded-full flex justify-center items-center">
                                            <ChatGPTLogoIcon />
                                        </div>
                                        <div>
                                            <div className="flex gap-[10px]">
                                                <p className="w-[90px] lg:w-[195px] md:w-[120px] h-2 bg-[#D2E4C7] rounded-md"></p>
                                                <p className="w-[50px] xl:w-[98px] lg:w-[70px] md:w-[60px] h-2 bg-[#D9D9D9] rounded-md"></p>
                                            </div>
                                            <div className="flex gap-2 mt-[10px]">
                                                <p className="w-10 xl:w-[98px] lg:w-[70px] md:w-[60px] h-2 bg-[#D9D9D9] rounded-md"></p>
                                                <p className="w-10 xl:w-[98px] lg:w-[70px] md:w-[60px] h-2 bg-[#D9D9D9] rounded-md"></p>
                                                <p className="w-10 xl:w-[98px] lg:w-[70px] md:w-[60px] h-2 bg-[#D9D9D9] rounded-md"></p>

                                            </div>
                                        </div>
                                    </div>
                                      {/* Input Area */}
                                    <div className="flex items-center p-2 sm:p-1 md:p-3 rounded-xl border border-[#E5E5E5] shadow-sm md:mt-6 mt-3 bg-white">
                                        {/* Star Icon */}
                                        <StarBurst className="flex-shrink-0 w-4 sm:w-5 h-4 sm:h-5" />

                                        {/* Input */}
                                        <input
                                            type="text"
                                            placeholder="Ask Anything"
                                            className="flex-grow mx-2 sm:mx-3 py-2 sm:py-3 w-[100px] text-sm sm:text-base focus:outline-none placeholder-gray-400"
                                        />

                                        {/* Send Button */}
                                        <button
                                            className="flex-shrink-0 p-2 sm:p-2.5 ml-1 bg-[#065341] rounded-md text-white transition-colors hover:bg-[#04714b]"
                                            aria-label="Send message"
                                        >
                                            <SendIcon className="w-4 h-4 sm:w-5 sm:h-5" />
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