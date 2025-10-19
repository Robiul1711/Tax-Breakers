import CommonBannerTwo from "@/common/CommonBannerTwo";
import AboutImg1 from "@/assets/images/about_img_1.png"
import AboutImg2 from "@/assets/images/about_img_2.png"
import AboutUsersImg from "@/assets/images/about_users.png"
import Image from "next/image";
import Title from "@/common/Title";
import OurIdentity from "@/app/pages/about/ourIdentity/OurIdentity";
import WeOffer from "@/app/pages/about/weOffer/WeOffer";
import WhyChooseUs from "@/app/pages/about/whyChooseUs/WhyChooseUs";
import OurTeam from "@/app/pages/about/ourTeam/OurTeam";

 
const AboutPage = () => {
    return (
        <div>
           <CommonBannerTwo main_title="Your Trusted Partner for Accounting & Tax Solutions" description="At MY TAX BREAKER, we are committed to simplifying financial management for individuals and businesses. Our goal is to make tax compliance, accounting, and financial planning stress-free, transparent, and accessible for everyone." />
           <div className="lg:m-8 m-4 flex gap-5">
                <Image src={AboutImg1} alt="about img one" width={668} height={474}/>
                <div className="flex flex-col gap-5">
                    <div className="bg-[#FFF] border border-[#E5E5E5] rounded-3xl p-8 flex items-center gap-6">
                        <Image className= "flex-1 w-full h-full object-cover" src={AboutUsersImg} alt="about users img" width={125} height={300}/>
                        <h2 className=" text-[#101115]  font-semibold text-xl">90% Customer Satisfaction</h2>
                    </div>
                    <div className="bg-[#E7F9DE] rounded-3xl p-8 flex-1">
                        <Title level="title24" children="Simplifying Finance, Empowering Your Success." className="mt-6"/>
                        <p className="text-[#677489] mt-6">At <span className="text-[#101115] font-semibold">MY TAX BREAKER</span>, we believe that financial management doesn’t have to be complicated. Our mission is simple: to simplify finance so you can focus on what truly matters growing your success.</p>
                    </div>
                </div>
                <Image src={AboutImg2} alt="about img one" width={668} height={474}/>
           </div>
           <div className="section-padding-x">
                <OurIdentity/>
                <WeOffer/>
                <WhyChooseUs/>
                <OurTeam/>
           </div>

        </div>
    );
};

export default AboutPage;