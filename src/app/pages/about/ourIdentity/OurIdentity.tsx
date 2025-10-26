import SectionHeader from "@/common/SectionHeader";
import IdentityImg1 from "@/assets/images/about_img_3.png";
import IdentityImg2 from "@/assets/images/about_img_4.png";
import Image from "next/image";

const OurIdentity = () => {
  return (
    <div className="my-18 lg:my-36">
      {/* Section Header */}
      <SectionHeader title="Who We Are" main_title="Our Identity" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-5 mt-8 sm:mt-12">
        {/* Left Image */}
        <div className="flex-1 w-full">
          <Image
            src={IdentityImg1}
            alt="our identity img"
            width={730}
            height={730}
            className="object-cover w-full md:h-[300px] h-[200px] lg:h-full rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Top Image */}
          <div className="w-full">
            <Image
              src={IdentityImg2}
              alt="our identity img"
              width={730}
              height={510}
              className="object-cover w-full xl:h-full md:h-[300px] h-[200px] rounded-2xl"
            />
          </div>

          {/* Mission Box */}
          <div className="bg-[#004D3F] rounded-3xl p-6 lg:p-4 xl:p-6 flex-1">
            <h2 className="text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[36px] font-semibold text-white mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              To empower individuals and businesses with accurate, reliable, and
              easy-to-access financial solutions, enabling them to make informed
              decisions and achieve long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurIdentity;
