import BannerImg from "@/assets/images/hero_sub_banner.png"

const CommonBannerTwo = ({ main_title, description, brandName }: { main_title: string, description: string, brandName?: string }) => {
    return (
        <div style={{
            backgroundImage: `url(${BannerImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px"
        }} className="lg:m-8 m-4 rounded-3xl py-10 lg:py-20">
            <h2 className="text-[#151515] px-4 text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold text-center capitalize max-w-[1080px] mx-auto">{main_title}</h2>
            <p className="text-[#677489] px-4 text-center max-w-[1080px] leading-8 text-sm md:text-xl font-medium mx-auto mt-6">
                <span className="text-[#101115] font-semibold">{brandName}</span> {description}
            </p>
        </div>
    );
};

export default CommonBannerTwo;