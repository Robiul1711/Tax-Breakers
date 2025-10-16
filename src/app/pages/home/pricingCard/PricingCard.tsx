import PricingShape from "@/assets/images/price shape.png"
import CommonButton from "@/common/CommonButton";
import Title from "@/common/Title";
import { PricingFeatureIcon } from "@/Components/SvgContainer/SvgContainer";
import { TPricingPlan } from "@/Types";
import Image from "next/image";

const PricingCard = ({ plan, billingCycle }: { plan: TPricingPlan, billingCycle: "Monthly" | "Annual" }) => {
    const { name, tagline, icon, price, features, cta } = plan;
    const currentPrice = price[billingCycle];

    return (
        <div className="rounded-3xl p-6 relative flex flex-col bg-[#FBFBFB] border border-[#E5E5E5] hover:bg-[#E7F9DE] transition-all duration-200">
           <div className="absolute -top-[26px] right-6 z-50">
             <div className="relative w-[100px] h-[112px]">
                <Image className="h-[108px]" src={PricingShape} alt="Pricing Shape" width={100} height={112} />
                <h2 className="absolute top-[40%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-center text-[#004D3F] leading-4">
                    ${currentPrice?.amount} <br /> <span className="text-sm font-normal">{currentPrice?.period}</span>
                </h2>
            </div>
           </div>

            <div>

                <div className="p-2 bg-[#1E4841] w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-6">
                    {icon}
                </div>
                <div>
                    <Title level="title24" children={name} className="mb-3" />
                    <p className="text-[#0C121D] text-xl">{tagline}</p>
                    <p className="h-[1px] w-full bg-[#E5E5E5] mt-3"></p>
                </div>
            </div>

            {/* Features List */}
            <ul className="my-8 flex flex-col gap-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#0C121D]">
                        <PricingFeatureIcon />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Footer/CTA Button */}
            <div className="mt-auto">
                <CommonButton className="!w-full !p-[18px] !rounded-2xl  !text-[18px] !font-semibold">{cta}</CommonButton>
                
            </div>
        </div>
    );
};

export default PricingCard;