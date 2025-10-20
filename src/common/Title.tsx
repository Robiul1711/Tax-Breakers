import React, { forwardRef } from "react";
import clsx from "clsx";
import { TTitleProps, TTitleSize } from "@/Types";


const sizeMap: TTitleSize = {
  title72: "text-[38px] md:text-[48px] lg:text-[56px] xl:text-[72px] font-bold",
  title64: "text-[34px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold",
  title56: "text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-semibold sm:font-bold",
  title48: "text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-semibold",
  title40: "text-[22px] sm:text-2xl md:text-[32px] xl:text-[40px] font-medium",
  title32: "text-lg sm:text-xl md:text-2xl xl:text-[32px] font-semibold",
  title28: "text-base sm:text-lg md:text-xl lg:text-[28px] font-medium",
  title24: "text-[24px] font-semibold",
  title22: "text-sm sm:text-base xl:text-[22px] font-medium",
  title20: "text-sm md:text-base xl:text-xl font-normal",
  title18: "text-xs sm:text-sm md:text-base sm:text-lg font-normal",
  title16: "text-xs sm:text-sm lg:text-base font-normal",
  title14: "text-xs sm:text-sm md:text-base font-normal",
  title12: "text-[10px] sm:text-xs md:text-sm font-normal",
};

const Title = forwardRef<HTMLHRElement, TTitleProps>(({ children, level = "title24", className = "text-[#000]", ...rest }, ref) => {
  return (
    <h2 ref={ref} className={clsx(sizeMap[level], className)} {...rest}>
      {children}
    </h2>
  );
}
);

Title.displayName = "Title";
export default Title;
