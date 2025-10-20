"use client"
import CommonSubTitle from '@/common/CommonSubTitle';
import React, { useState } from 'react';
import PricingCard from '../pricingCard/PricingCard';
import { BadgeIcon, LikeIcon, PremiumBadgeIcon } from '@/Components/SvgContainer/SvgContainer';
import { TPricingPlan } from '@/Types';

const pricingPlans: TPricingPlan[] = [
    {
        id: "starter",
        name: "Starter Plan",
        tagline: "Best for Freelancers & Sole Traders",
        icon: <LikeIcon />,
        price: {
            Monthly: { amount: 120, period: "/month" },
            Annual: { amount: 1296, period: "/year" }
        },
        features: [
            "VAT ID Registration",
            "Dedicated Tax Consultant",
            "Web & Mobile App (forecasts, Tax calendar, guides)",
            "Annual Tax Return & Compliance",
            "Unlimited Free E-Invoicing",
            "Alumni network establishment"
        ],
        cta: "Subscribe Now"
    },
    {
        id: "pro",
        name: "Pro Plan",
        tagline: "Best for Freelancers & Sole Traders",
        icon: <BadgeIcon />,
        price: {
            Monthly: { amount: 150, period: "/month" },
            Annual: { amount: 1620, period: "/year" }
        },
        features: [
            "VAT ID Registration",
            "Dedicated Tax Consultant",
            "Web & Mobile App (forecasts,Tax calendar, guides)",
            "Annual Tax Return & Compliance",
            "Unlimited Free E-Invoicing",
            "Alumni network establishment."
        ],
        cta: "Subscribe Now"
    },
    {
        id: "premium",
        name: "Premium Plan",
        tagline: "Best for Freelancers & Sole Traders",
        icon: <PremiumBadgeIcon />,
        price: {
            Monthly: { amount: 200, period: "/month" },
            Annual: { amount: 2160, period: "/year" }
        },
        features: [
            "VAT ID Registration",
            "Dedicated Tax Consultant",
            "Web & Mobile App (forecasts, Tax calendar, guides)",
            "Annual Tax Return & Compliance",
            "Unlimited Free E-Invoicing",
            "Alumni network establishment"
        ],
        cta: "Subscribe Now"
    }
];

const Pricing = ({title,description , className}: {title : string, description : string, className?: string}) => {
    const [billingCycle, setBillingCycle] = useState<"Monthly" | "Annual">('Monthly');
    const getSliderTransform = () => {
        return billingCycle === 'Annual' ? 'translateX(100%)' : 'translateX(0)';
    };

    return (
        <div>
            <div>
                <CommonSubTitle title='Pricing' />
                <h2 className={`text-[#151515] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold capitalize mt-6 ${className}`}>{title}</h2>
                <p className={`text-[#515151] leading-6 max-w-[571px] mt-6 ${className}`}>
                    {description}
                </p>

                {/* Toggle Switch */}
                <div className="flex justify-end mt-8 lg:mb-[98px] md:mb-[70px] mb-[50px]">
                    <div className="relative inline-flex p-1 bg-[#FAFAFA] border border-[#E3E8EF] rounded-md">
                        {/* Slider (Dynamic element) */}
                        <div
                            className="absolute h-[calc(100%-8px)] w-[45%] bg-[#BBF49C] rounded-md transition-transform duration-300 ease-in-out"
                            style={{ transform: getSliderTransform() }}
                        ></div>

                        <button
                            className={`md:w-27 w-20 md:py-3 py-2 flex items-center gap-2 justify-center text-sm font-semibold rounded-md transition-colors z-10 cursor-pointer ${billingCycle === 'Monthly' ? 'text-[#1E4841] bg-[#BBF49C] ' : 'text-gray-500'
                                }`}
                            onClick={() => setBillingCycle('Monthly')}
                        >
                            {
                                billingCycle === 'Monthly' && <p className='w-2 h-2 rounded-full bg-[#1E4841] border-2 border-[#ECFDCD]'></p>
                            }
                            Monthly
                        </button>
                        <button
                            className={`md:w-27 w-20 md:py-3 py-2 flex items-center gap-2 justify-center text-sm font-semibold rounded-md transition-colors z-10 cursor-pointer ${billingCycle === 'Annual' ? 'text-[#1E4841] bg-[#BBF49C]' : 'text-gray-500'
                                }`}
                            onClick={() => setBillingCycle('Annual')}
                        >
                            {
                                billingCycle === 'Annual' && <p className='w-2 h-2 rounded-full bg-[#1E4841] border-2 border-[#ECFDCD]'></p>
                            }
                            Annual

                        </button>
                    </div>
                </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {pricingPlans?.map(plan => (
                    <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
                ))}
            </div>
        </div>
    );
};

export default Pricing;