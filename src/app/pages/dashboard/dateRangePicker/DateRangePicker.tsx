import { DateRangePickerIcon } from "@/Components/SvgContainer/SvgContainer";


const DateRangePicker = () => {
    return (
        <div className="flex cursor-pointer hover:shadow transition-all duration-300 items-center justify-between border px-4 gap-2 border-gray-500/30 h-[46px] rounded-full overflow-hidden">
            <DateRangePickerIcon />
            <h2 className="text-[#1A1C1E] font-semibold">Range Date</h2>
        </div>
    );
};

export default DateRangePicker;