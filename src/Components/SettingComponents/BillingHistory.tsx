"use client";
import { FileIcon } from "@/common/DashboardSvg/DashSVG";
import { DownloadIcon } from "../SvgContainer/SvgContainer";

export default function BillingHistory() {
  const billingData = [
    { docId: "INV-TEST-001", date: "09-09-2025", status: "Send", total: 122.0 },
    { docId: "INV-TEST-002", date: "09-09-2025", status: "Rejected", total: 2317.6 },
    { docId: "INV-TEST-003", date: "09-09-2025", status: "Draft", total: 635.0 },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Send":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border border-red-200";
      case "Draft":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Billing History</h1>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:block hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm sm:text-base">
            <thead>
              <tr className="bg-[#E7F9DE] border-b border-green-200">
                <th className="text-left py-3 sm:py-4 px-4 lg:px-3 2xl:px-6 font-semibold text-gray-800">
                  Doc ID
                </th>
                <th className="text-left py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 font-semibold text-gray-800">
                  Date
                </th>
                <th className="text-left py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 font-semibold text-gray-800">
                  Status
                </th>
                <th className="text-left py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 font-semibold text-gray-800">
                  Total (€)
                </th>
                <th className="text-left py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 font-semibold text-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                >
                  <td className="py-3 sm:py-4 px-4 lg:px-3 2xl:px-6">
                    <div className="flex items-center gap-2">
                      <FileIcon className="text-gray-700 w-5 h-5" />
                      <span className="text-gray-700 font-medium break-all">
                        {item.docId}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 text-gray-700 text-sm">
                    {item.date}
                  </td>
                  <td className="py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 ">
                    <span
                      className={`inline-block px-3 sm:px-4 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-4 lg:px-1 2xl:px-6 text-gray-700 text-sm font-medium">
                    {item.total.toFixed(2)}
                  </td>
                  <td className="py-3 sm:py-4 px-4 lg:px-1 2xl:px-6">
                    <button className="text-[#004D3F] hover:text-[#00382D] text-sm font-medium hover:underline transition-colors">
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View (for very small screens) */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {billingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-base">
                <FileIcon className="text-gray-700 w-5 h-5" />
                <span className="text-gray-800 font-medium">{item.docId}</span>
              </div>
              <span
                className={`text-xs font-medium md:px-3 px-1 md:py-1 rounded-full ${getStatusStyle(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Date:</span> {item.date}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Total (€):</span>{" "}
                {item.total.toFixed(2)}
              </p>
            </div>
            <button
              className=" bg-[#004D3F] text-white rounded-md flex items-center justify-center gap-3 hover:bg-teal-800 transition-colors md:text-sm text-xs font-medium w-full py-2 mt-4"
            >
               <DownloadIcon/> Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
