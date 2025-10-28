import BillingHistory from "./BillingHistory";

const SubscriptionBilling = () => {
  return (
    <div>

      {/* Plan Info */}
      <div className="bg-[#FBFBFB] rounded-xl md:p-6 p-4">
        <h2 className="text-lg font-semibold mb-4">Current Plan</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 text-sm font-medium text-gray-500 mb-8">
          <div>
            <p>Plan</p>
            <p className="font-medium text-gray-900  mt-3">Ordinary Plus (Sole Trader)</p>
          </div>
          <div>
            <p>Price</p>
            <p className="text-gray-900 mt-3">
              <span className="font-semibold">€59</span>/Month
            </p>
          </div>
          <div>
            <p>Next Renewal</p>
            <p className="font-semibold text-gray-900 mt-3">10/10/2025</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button className="px-10 py-2 bg-[#004D40] text-white font-medium rounded-2xl hover:bg-[#003b31] transition">
            Update Plan
          </button>
          <button className="px-10 py-2 border border-[#004D40] text-[#004D40] font-medium rounded-2xl hover:bg-gray-100 transition">
            Cancel Plan
          </button>
        </div>
      </div>
      <div className="bg-[#FBFBFB] rounded-xl md:p-6 p-4 mt-6">
        <BillingHistory />
      </div>
    </div>
  );
};

export default SubscriptionBilling;
