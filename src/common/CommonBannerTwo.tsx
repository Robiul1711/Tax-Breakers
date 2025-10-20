import BannerImg from "@/assets/images/hero_sub_banner.png"

const CommonBannerTwo = ({ main_title, description, brandName }: { main_title: string, description: string, brandName?: string }) => {
    return (
        <div style={{
            backgroundImage: `url(${BannerImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px"
        }} className="lg:m-8 m-4 rounded-[24px] py-20">
            <h2 className="text-[#151515] text-2xl sm:text-[32px] md:text-[46px] lg:text-[52px] xl:text-[64px] font-bold text-center capitalize max-w-[1080px] mx-auto">{main_title}</h2>
            <p className="text-[#677489] text-center max-w-[1080px] leading-8 text-base sm:text-sm md:text-md xl:text-xl font-medium mx-auto mt-6">
                <span className="text-[#101115] font-semibold">{brandName}</span> {description}
            </p>
        </div>
    );
};

export default CommonBannerTwo;