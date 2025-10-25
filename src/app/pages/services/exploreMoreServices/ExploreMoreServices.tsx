import SectionHeader from "@/common/SectionHeader";
import { AnalyticsDashboardIcon, EcoCardIcon, LeafShieldIcon } from "@/Components/SvgContainer/SvgContainer";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const moreServicesData = [
    {
        id: 1,
        icon: <EcoCardIcon />,
        title: "Financial Growth",
        description: "Intricacies of capital deployment and investment growth to empower business with informed decision-making.",
    },
    {
        id: 2,
        icon: <LeafShieldIcon />,
        title: "Financial Services",
        description: "Innovation initiatives, our advisory solutions are tailored to address the unique contours of your business landscape.",
    },
    {
        id: 3,
        icon: <AnalyticsDashboardIcon />,
        title: "Task Control",
        description: "Sustainable growth, our service commitment is guide the terrain of financial expectations with clarity and precision.",
    }
]

const ExploreMoreServices = () => {
    return (
        <div className="my-36">
            <SectionHeader title="Explore More Services" main_title="Expert Financial Solutions Tailored to Your Needs" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:grid-8 xl:gap-10 mt-12">
                {
                    moreServicesData?.map(service => (
                        <div key={service?.id} className="bg-[#FBFBFB] border-[1.23px] border-[#E5E5E5] rounded-[37px] p-12" >
                            <div>
                                {service?.icon}
                            </div>
                            <h2 className="text-3xl mt-6 mb-11 text-[#0C121D] font-semibold">{service?.title}</h2>
                            <p className="text-[#0C121D] text-[22px]"> {service?.description}</p>

                            <Link href={`/services/${service?.title.split(' ').join('-')}`}>
                                <button className="flex items-center gap-3 text-[#0C121D] text-[22px] cursor-pointer hover:underline font-medium mt-6">View More <FiArrowRight className="w-5 h-5" /></button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ExploreMoreServices;