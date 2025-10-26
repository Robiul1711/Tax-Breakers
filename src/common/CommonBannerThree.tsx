import BannerImg from "@/assets/images/banner3.png"
import CommonSubTitle from "./CommonSubTitle";

const CommonBannerThree = ({ title, main_title, description, brandName }: {title: string, main_title: string, description: string, brandName?: string }) => {
  return (
    <div style={{
      backgroundImage: `url(${BannerImg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "20px"
    }} className="lg:m-8 m-4 rounded-3xl md:pt-24 py-10 lg:py-20 lg:pb-56 xl:pb-76 2xl:pb-[520px] px-4">
      <div className="mb-8">
        <CommonSubTitle title={title || ""} />
      </div>
      <h2 className="text-[#151515] text-[22px] sm:text-[38px] md:text-[38px] lg:text-[48px] font-semibold text-center max-w-[1080px] mx-auto">{main_title}</h2>
      <p className="text-[#677489] text-center max-w-[1080px] leading-8 text-sm md:text-xl font-medium mx-auto mt-6">
        <span className="text-[#101115] font-semibold">{brandName}</span> {description}
      </p>
    </div>
  );
};

export default CommonBannerThree;