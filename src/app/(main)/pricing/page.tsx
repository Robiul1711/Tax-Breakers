import Pricing from "@/app/pages/home/pricing/Pricing";
import ComparisonPlan from "@/app/pages/pricing/comparisonPlan/ComparisonPlan";
import CommonBannerTwo from "@/common/CommonBannerTwo";

 
const PricingPage = () => {
    return (
        <div>
            <CommonBannerTwo main_title="Pricing" description="Simple, affordable pricing for individuals and growing teams."/>
            <div className="section-padding-x my-18 lg:my-36">
                <Pricing className="text-center mx-auto" title="Choose the Plan That Fits Your Finances" description="Nexa's analytics can boost your business. Choose a pricing plan that fits your goals—no hidden fees, just tools to improve finances."/>
                <ComparisonPlan/>
            </div>
        </div>
    );
};

export default PricingPage;