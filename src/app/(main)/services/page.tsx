import CommonBannerTwo from "@/common/CommonBannerTwo";
import IdentityImg1 from "@/assets/images/about_img_3.png"
import IdentityImg2 from "@/assets/images/about_img_4.png"
import Image from "next/image";
import Services from "@/app/pages/home/services/Services";
import FaqSection from "@/app/pages/home/faqSection/FaqSection";
import Testimonial from "@/app/pages/home/testimonial/Testimonial";


const ServicesPage = () => {
    return (
        <div>
            <CommonBannerTwo main_title="Expert Accounting & Tax Solutions Tailored to Your Needs" description="At MY TAX BREAKER, we provide a full range of professional financial services to simplify your accounting, taxation, and financial planning. Whether you are an individual, freelancer, or business owner, our solutions are designed to ensure accuracy, compliance, and peace of mind." />
            <div className="mt-12 lg:m-8 m-4 flex md:flex-row flex-col gap-5">
                <div className="flex-1">
                    <Image className="w-full md:h-full h-[200px] object-cover rounded-3xl" src={IdentityImg1} alt="our identity img" width={730} height={730} />
                </div>
                <div className="flex-1 flex flex-col gap-5" >
                    <Image className="w-full xl:h-full lg:h-[300px] h-[200px] object-cover rounded-3xl" src={IdentityImg2} alt="our identity img" width={730} height={510} />
                    <div className="bg-[#004D3F] rounded-3xl p-4 lg:p-8 flex-1">
                        <h2 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-semibold text-white mb-4 md:mb-6">Your Financial Solutions</h2>
                        <p className="text-[#FFF]">From tax planning to business consulting, we’ve got you covered.</p>
                    </div>
                </div>
                <div className="flex-1 xl:block md:hidden">
                    <Image className="w-full xl:h-full h-[200px] object-cover rounded-3xl" src={IdentityImg1} alt="our identity img" width={730} height={730} />
                </div>
            </div>
            <div className="section-padding-x my-18 lg:my-36">
                <Services />
                <FaqSection />
            </div>
            <Testimonial />
        </div >
    );
};

export default ServicesPage;