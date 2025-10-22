import { HTMLAttributes, ReactNode } from "react";

export type TCommonBannerOne = {
  image: any;
  title: any;
  description: any;
  linkText: any;
  logo: any;
  className: any;
  isLoading: any;
}
export type VariantKeys = "primary" | "secondary" | "danger";
export type TCommonButton = {
  [x: string]: any;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: VariantKeys;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  link?: string;
}
export type TButtonVariants = Record<VariantKeys, string>;
export type TTitleSize = {
  title72: string;
  title64: string;
  title56: string;
  title48: string;
  title40: string;
  title36: string;
  title32: string;
  title28: string;
  title24: string;
  title22: string;
  title20: string;
  title18: string;
  title16: string;
  title14: string;
  title12: string;
}
export type TTitleProps = {
  children?: ReactNode,
  level?: keyof TTitleSize,
  className?: string,
  initial?: {
    x: number;
    opacity: number;
  },
  whileInView?: {
    x: number;
    opacity: number;
  },
  transition?: {
    duration: number;
    delay: number;
    x: {
      type: string;
      stiffness: number;
    };
    opacity: {
      duration: number;
    };
    ease: string;
  },
  animate?: {
    opacity: number;
  },
  viewport?: {
    once: boolean;
  }


} & HTMLAttributes<HTMLHeadingElement>


export type ISectionHeader = {
    title?: string;
    main_title?: string;
    brandName?: string;
    companyName?: string;
    description?: string;
}

