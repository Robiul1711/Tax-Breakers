import SectionHeader from "@/common/SectionHeader";
import { CorrectIcon, WrongIcon } from "@/Components/SvgContainer/SvgContainer";

const comparisonPlanData = [
    {
        "name": "Track Accounts",
        "starter": "2",
        "pro": "Unlimited",
        "premium": "Unlimited"
    },
    {
        "name": "Monthly Budget Insights",
        "starter": true,
        "pro": true,
        "premium": true
    },
    {
        "name": "Active Saving Plans",
        "starter": true,
        "pro": true,
        "premium": true
    },
    {
        "name": "Income & Expense Analytics",
        "starter": "1",
        "pro": "Up to 5",
        "premium": "Unlimited"
    },
    {
        "name": "Custom Categories & Alerts",
        "starter": false,
        "pro": true,
        "premium": true
    },
    {
        "name": "Finance Score Tracker",
        "starter": false,
        "pro": true,
        "premium": true
    },
    {
        "name": "Export to Google Sheets",
        "starter": false,
        "pro": true,
        "premium": true
    },
    {
        "name": "Whitney Francis",
        "starter": false,
        "pro": true,
        "premium": true
    },
    {
        "name": "Investment Dashboard",
        "starter": false,
        "pro": false,
        "premium": true
    },
    {
        "name": "Whitney Francis",
        "starter": false,
        "pro": false,
        "premium": true
    },
    {
        "name": "Forecasting Tools",
        "starter": false,
        "pro": false,
        "premium": true
    },
    {
        "name": "Email Support",
        "starter": false,
        "pro": true,
        "premium": true
    },
    {
        "name": "Priority Support",
        "starter": false,
        "pro": false,
        "premium": true
    },
    {
        "name": "Early Access to New Features",
        "starter": false,
        "pro": false,
        "premium": true
    }
]

const ComparisonPlan = () => {
    return (
        <div className="lg:my-36 my-12">
            <SectionHeader title="Comparison Plan" main_title="Compare Plans at a Glance" description="Find the right features for your financial journey." />
            <div className="overflow-x-auto custom-scroll">
                <div className="min-w-[1000px] lg:min-w-[1400px]">
                    <div className="flex justify-between items-center border-b border-[#E3E8EF] pb-5 md:px-5 mt-12">
                        <h2 className="flex-1 text-[#0E1109] md:text-lg font-bold">Feature</h2>
                        <h2 className="flex-1 text-[#0E1109] md:text-lg font-bold flex justify-center items-center">Starter</h2>
                        <h2 className="flex-1 text-[#0E1109] md:text-lg font-bold flex justify-center items-center">Pro</h2>
                        <h2 className="flex-1 text-[#0E1109] md:text-lg font-bold flex justify-center items-center">Premium</h2>
                    </div>
                    <div>

                        {
                            comparisonPlanData?.map((plan, index) => (
                                <div key={index} className="flex justify-between items-center border-b border-[#E3E8EF]/50 py-4 hover:bg-[#FAFAFA] md:px-5 ">
                                    <h2 className="flex-1 text-[#0E1109] text-lg">
                                        {plan?.name}
                                    </h2>
                                    <h2 className="flex-1 text-[#0E1109] text-lg flex justify-center">
                                        {plan?.starter === true && <CorrectIcon />}
                                        {plan?.starter === false && <WrongIcon />}
                                        {typeof plan?.starter !== 'boolean' && (
                                            plan?.starter
                                        )}
                                    </h2>
                                    <h2 className="flex-1 text-[#0E1109] text-lg flex justify-center">
                                        {plan?.pro === true && <CorrectIcon />}
                                        {plan?.pro === false && <WrongIcon />}
                                        {typeof plan?.pro !== 'boolean' && (
                                            plan?.pro
                                        )}
                                    </h2>
                                    <h2 className="flex-1 text-[#0E1109] text-lg flex justify-center">
                                        {plan?.premium === true && <CorrectIcon />}
                                        {plan?.premium === false && <WrongIcon />}
                                        {typeof plan?.premium !== 'boolean' && (
                                            plan?.premium
                                        )}
                                    </h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonPlan;