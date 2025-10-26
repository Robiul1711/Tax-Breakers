import CommonBannerTwo from "@/common/CommonBannerTwo";
import AboutImg1 from "@/assets/images/about_img_1.png";
import AboutImg2 from "@/assets/images/about_img_2.png";
import AboutUsersImg from "@/assets/images/about_users.png";
import Image from "next/image";
import Title from "@/common/Title";
import OurIdentity from "@/app/pages/about/ourIdentity/OurIdentity";
import WeOffer from "@/app/pages/about/weOffer/WeOffer";
import WhyChooseUs from "@/app/pages/about/whyChooseUs/WhyChooseUs";
import OurTeam from "@/app/pages/about/ourTeam/OurTeam";

const AboutPage = () => {
    return (
        <div>
            {/* Banner */}
            <CommonBannerTwo
                main_title="Your Trusted Partner for Accounting & Tax Solutions"
                description="At MY TAX BREAKER, we are committed to simplifying financial management for individuals and businesses. Our goal is to make tax compliance, accounting, and financial planning stress-free, transparent, and accessible for everyone."
            />

            {/* Main About Section */}
            <div className="flex flex-col lg:flex-row gap-5 m-4 lg:m-8">
                {/* Left Image */}
                <div className="flex-1">
                    <Image
                        src={AboutImg1}
                        alt="about img one"
                        width={668}
                        height={474}
                        className="object-cover w-full lg:h-full md:h-[300px] h-[200px] rounded-2xl"
                    />
                </div>

                {/* Middle Content */}
                <div className="flex-1 flex flex-col gap-5">
                    {/* Customer Satisfaction Box */}
                    <div className="border border-[#E5E5E5] bg-[#FFF] rounded-3xl flex flex-col justify-center items-center gap-4 p-6">
                        <div className="flex-1">
                            <Image src={AboutUsersImg} alt="About user img" width={200} height={200} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[#101115] text-2xl font-semibold text-center">90% Customer Satisfaction</h2>
                        </div>
                    </div>


                    {/* Simplifying Finance Box */}
                    <div className="bg-[#E7F9DE] rounded-3xl lg:p-4 md:p-6 p-4 flex-1">
                        <Title
                            level="title24"
                            children="Simplifying Finance, Empowering Your Success."
                            className="text-center sm:text-left"
                        />
                        <p className="text-[#677489] mt-4 sm:mt-6 text-center sm:text-left text-sm sm:text-base">
                            At <span className="text-[#101115] font-semibold">MY TAX BREAKER</span>
                            , we believe that financial management doesn’t have to be
                            complicated. Our mission is simple: to simplify finance so you can
                            focus on what truly matters—growing your success.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 block lg:hidden xl:block">
                    <Image
                        src={AboutImg2}
                        alt="about img two"
                        width={668}
                        height={474}
                        className="object-cover w-full lg:h-full md:h-[300px] h-[200px] rounded-2xl"
                    />
                </div>
            </div>

            {/* Subsections */}
            <div className="section-padding-x">
                <OurIdentity />
                <WeOffer />
                <WhyChooseUs />
                <OurTeam />
            </div>
        </div>
    );
};

export default AboutPage;
