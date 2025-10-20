import SectionHeader from "@/common/SectionHeader";
import IdentityImg1 from "@/assets/images/about_img_3.png"
import IdentityImg2 from "@/assets/images/about_img_4.png"
import Image from "next/image";


const OurIdentity = () => {
    return (
        <div className="my-36">
            <SectionHeader title="Who We Are" main_title="Our Identity" />
            <div className="flex flex-col lg:flex-row gap-5 mt-12">
                <Image className="flex-1 w-full" src={IdentityImg1} alt="our identity img" width={730} height={730} />
                <div className="flex-1 flex flex-col gap-5" >
                    <Image className="w-full" src={IdentityImg2} alt="our identity img" width={730} height={510} />
                    <div className="bg-[#004D3F] rounded-3xl p-8 flex-1">
                        <h2 className="text-[32px] font-semibold text-white mb-6">Our Mission</h2>
                        <p className="text-[#FFF]">To empower individuals and businesses with accurate, reliable, and easy-to-access financial solutions, enabling them to make informed decisions and achieve long-term success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurIdentity;