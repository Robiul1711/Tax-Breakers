import { FileIcon } from '@/common/DashboardSvg/DashSVG';
import { FaFileAlt } from 'react-icons/fa';

export default function BillingHistory() {
  const billingData = [
    {
      docId: 'INV-TEST-001',
      date: '09-09-2025',
      status: 'Send',
      total: 122.00,
    },
    {
      docId: 'INV-TEST-001',
      date: '09-09-2025',
      status: 'Rejected',
      total: 2317.60,
    },
    {
      docId: 'INV-TEST-001',
      date: '09-09-2025',
      status: 'Draft',
      total: 635.00,
    },
  ];

  const getStatusStyle = (status : string) => {
    switch (status) {
      case 'Send':
        return 'bg-green-100 text-green-700 border border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border border-red-200';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
  
      <div className="">
        <h1 className="text-2xl font-bold mb-6">Billing History</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#E7F9DE] border-b border-green-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Doc ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Total (€)</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Action</th>
                </tr>
              </thead>
              <tbody>
                {billingData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                       <FileIcon className="text-gray-700 w-5 h-5" />
                        <span className="text-gray-700 font-medium">{item.docId}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">{item.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700 font-medium">{item.total.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <button className="text-gray-700 hover:text-gray-900 font-medium hover:underline transition-colors">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

  );
}