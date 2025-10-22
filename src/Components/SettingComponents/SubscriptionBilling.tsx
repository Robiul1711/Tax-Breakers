"use client";
import AllTickets from "@/app/pages/dashboard/TicketAndHelpPage/AllTickets/AllTickets";
import React from "react";
import BillingHistory from "./BillingHistory";

const SubscriptionBilling = () => {
  return (
    <div className="">

      {/* Plan Info */}
      <div className="bg-[#FBFBFB] rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Current Plan</h2>
        <div className="grid grid-cols-3 text-sm font-medium text-gray-500 mb-3">
          <p>Plan</p>
          <p>Price</p>
          <p>Next Renewal</p>
        </div>

        <div className="grid grid-cols-3 items-center mb-6">
          <p className="font-medium text-gray-900">Ordinary Plus (Sole Trader)</p>
          <p className="text-gray-900">
            <span className="font-semibold">€59</span>/Month
          </p>
          <p className="font-semibold text-gray-900">10/10/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-10 py-2 bg-[#004D40] text-white font-medium rounded-2xl hover:bg-[#003b31] transition">
            Update Plan
          </button>
          <button className="px-10 py-2 border border-[#004D40] text-[#004D40] font-medium rounded-2xl hover:bg-gray-100 transition">
            Cancel Plan
          </button>
        </div>
      </div>
      <div className="bg-[#FBFBFB] rounded-xl p-6 mt-6">
     <BillingHistory />
      </div>
    </div>
  );
};

export default SubscriptionBilling;
