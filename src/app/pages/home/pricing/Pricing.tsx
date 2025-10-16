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
        isPopular: false,
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
        isPopular: true,
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
        cta: "Start Your Pro Plan"
    },
    {
        id: "premium",
        name: "Premium Plan",
        tagline: "Best for Freelancers & Sole Traders",
        icon: <PremiumBadgeIcon />,
        isPopular: false,
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
        cta: "Contact Sales"
    }
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<"Monthly" | "Annual">('Monthly');
    console.log(billingCycle);
    const getSliderTransform = () => {
        return billingCycle === 'Annual' ? 'translateX(100%)' : 'translateX(0)';
    };

    return (
        <div>
            <div>
                <CommonSubTitle title='Pricing' />
                <h2 className="text-[#151515] text-[48px] font-bold capitalize mt-6">Pricing and Plans</h2>
                <p className="text-[#515151] leading-6 w-[571px]">
                    Choose a plan that fits your financial needs. No hidden fees, no surprises—just expert services at fair rates.
                </p>

                {/* Toggle Switch */}
                <div className="flex justify-end mt-8 mb-[98px]">
                    <div className="relative inline-flex p-1 bg-[#FAFAFA] border border-[#E3E8EF] rounded-md">
                        {/* Slider (Dynamic element) */}
                        <div
                            className="absolute h-[calc(100%-8px)] w-[45%] bg-[#BBF49C] rounded-md transition-transform duration-300 ease-in-out"
                            style={{ transform: getSliderTransform() }}
                        ></div>

                        <button
                            className={`w-27 py-3 flex items-center gap-2 justify-center text-sm font-semibold rounded-md transition-colors z-10 cursor-pointer ${billingCycle === 'Monthly' ? 'text-[#1E4841] bg-[#BBF49C] ' : 'text-gray-500'
                                }`}
                            onClick={() => setBillingCycle('Monthly')}
                        >
                            {
                                billingCycle === 'Monthly' && <p className='w-2 h-2 rounded-full bg-[#1E4841] border-2 border-[#ECFDCD]'></p>
                            }
                            Monthly
                        </button>
                        <button
                            className={`w-27 py-3 flex items-center gap-2 justify-center text-sm font-semibold rounded-md transition-colors z-10 cursor-pointer ${billingCycle === 'Annual' ? 'text-[#1E4841] bg-[#BBF49C]' : 'text-gray-500'
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans?.map(plan => (
                    <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
                ))}
            </div>
        </div>
    );
};

export default Pricing;