import { StarIcon } from "@/Components/SvgContainer/SvgContainer";


const CommonSubTitle = ({title}: {title? : string}) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-[2px]">
                <span className="w-[56px] h-[1px] bg-gradient-to-r from-white to-[#095641]"></span>
                <StarIcon />
            </div>
            <h2 className=" border border-[#095641] text-[#095641] font-semibold py-1 px-[10px] rounded-[12px] shadow-[0_0_4px_rgba(9,86,65,1)] ">{title}</h2>
            <div className="flex items-center gap-[2px]">
                <StarIcon />
                <span className="w-[56px] h-[1px] bg-gradient-to-r from-[#095641] to-white"></span>
            </div>
        </div>
    );
};

export default CommonSubTitle;