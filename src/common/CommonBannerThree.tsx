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
    }} className="lg:m-8 m-4 rounded-[24px] pt-24 pb-96">
      <div className="mb-8">
        <CommonSubTitle title={title}/>
      </div>
      <h2 className="text-[#151515] text-[64px] font-semibold text-center max-w-[1080px] mx-auto">{main_title}</h2>
      <p className="text-[#677489] text-center max-w-[1080px] leading-8 text-xl font-medium mx-auto mt-6">
        <span className="text-[#101115] font-semibold">{brandName}</span> {description}
      </p>
    </div>
  );
};

export default CommonBannerThree;