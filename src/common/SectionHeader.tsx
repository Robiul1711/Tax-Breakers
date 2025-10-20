import { ISectionHeader } from "@/Types";
import CommonSubTitle from "./CommonSubTitle";


const SectionHeader: React.FC<ISectionHeader> = ({ title, main_title, brandName, companyName, description }) => {
    return (
        <div>
            {
                title && <CommonSubTitle title={title} />
            }
            <h2 className="text-[#151515] text-3xl md:text-[36px] lg:text-[48px] font-bold text-center capitalize max-w-[830px] mx-auto mt-6 md:px-0 px-3">{main_title}</h2>
            <p className="text-[#515151] text-center max-w-[1052px] leading-6 mx-auto mt-6 md:px-0 px-3">
                <span className="text-[#151515] font-semibold">{brandName}</span> {companyName} {description}
            </p>
        </div>
    );
};

export default SectionHeader;