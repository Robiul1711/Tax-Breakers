import React, { forwardRef } from "react";
import clsx from "clsx";
import { TTitleProps, TTitleSize } from "@/Types";


const sizeMap: TTitleSize = {
  title72: "text-[28px] sm:text-[38px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold",
  title64: "text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold",
  title56: "text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-semibold sm:font-bold",
  title48: "text-[22px] sm:text-[30px] md:text-[38px] lg:text-[46px] xl:text-[48px] font-semibold",
  title40: "text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[40px] font-medium",
  title36: "text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-semibold",
  title32: "text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-semibold",
  title28: "text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-medium",
  title24: "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold",
  title22: "text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-medium",
  title20: "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal",
  title18: "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal",
  title16: "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal",
  title14: "text-[11px] sm:text-[13px] md:text-[14px] font-normal",
  title12: "text-[10px] sm:text-[11px] md:text-[12px] font-normal",
}


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
