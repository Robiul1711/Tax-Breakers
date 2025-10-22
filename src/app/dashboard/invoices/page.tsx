import InvoiceDataTab from "@/app/pages/dashboard/invoiceDataTab/InvoiceDataTab"
import CommonButton from "@/common/CommonButton"
import { ArrowDownIcon, ArrowUpIcon, CircleWaveCheckIcon, NavInvoiceIcon, WarningOctagonIcon } from "@/Components/SvgContainer/SvgContainer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu"
import { getAllInvoice } from "@/services/dashboard/invoice/invoice"
import { TInvoice } from "@/Types"
import Link from "next/link"
import { FaPlus } from "react-icons/fa"

const invoicesData = [
  {
    "icon": <NavInvoiceIcon />,
    "metric": "Total Invoices",
    "current_value": 138500,
    "currency": "USD",
    "comparison": {
      "vs_last_month": 128000,
      "percentage_change": 8.20,
      "trend": "up"
    }
  },
  {
    "icon": <CircleWaveCheckIcon />,
    "metric": "Paid Invoices",
    "current_value": 97400,
    "currency": "USD",
    "comparison": {
      "vs_last_month": 94800,
      "percentage_change": 2.74,
      "trend": "up"
    }
  },
  {
    "icon": <WarningOctagonIcon />,
    "metric": "Unpaid Invoices",
    "current_value": 41100,
    "currency": "USD",
    "comparison": {
      "vs_last_month": 47760,
      "percentage_change": 13.94,
      "trend": "down"
    }
  }
]

const DashboardInvoicePage = async () => {
  const result = await getAllInvoice();
  const invoices : TInvoice[] = result instanceof Error ? [] : result;
  console.log(invoices);

  return (
    <div>
      <div className="bg-[#FBFBFB] rounded-3xl p-8 mr-8">
        <div className="flex items-center justify-between mb-14">
          <div>
            <h1 className="text-[32px] font-semibold text-[#000]">Invoices</h1>
            <p className="text-[#677489] text-[18px] mt-4">Easily book a tax or accounting chat right from your dashboard and keep your finances in check!</p>
          </div>
          <div className="flex items-center gap-4">

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CommonButton
                  variant="primary"
                  className="!text-[18px] !font-semibold hover:!text-[#004D3F] !border-[#004D3F] !flex !items-center gap-[10px]"
                >
                  <FaPlus /> Add Invoice
                </CommonButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>
                 <Link href={'/dashboard/invoices/invoice-create'}>
                  <CommonButton
                    variant="primary"
                    className="font-semibold! hover:text-[#004D3F]! border-[#004D3F]! !flex !items-center gap-[10px]"
                  >
                    <FaPlus /> Proforma Invoice
                  </CommonButton></Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Link href={'/dashboard/invoices/invoice-create'}>
                  <CommonButton
                    variant="secondary"
                    className="!font-semibold hover:!text-white !flex !items-center gap-[10px]"
                  >
                    <FaPlus /> Electronic Invoice
                  </CommonButton>
                  </Link>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {
            invoicesData.map((invoice, index) => (
              <div key={index} className="bg-[#FFF] rounded-2xl p-4 mb-6 border border-[#E5E6E6] flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#ECF4E9] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                    <div className="mx-auto">
                      {invoice.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[#242E2C] text-[14px] font-medium">{invoice.metric}</h2>
                    <p className="text-[#004D3F] text-[24px] font-bold mt-[6px]">${invoice.current_value.toLocaleString()}</p>
                  </div>
                </div>
                <div>
                  <div className={`flex items-center gap-2 rounded-[15px] px-[5px] py-[2px] text-[#004D3F] justify-center text-[10px] font-semibold ${invoice.comparison.trend === 'up' ? 'bg-[#A7EB94]' : 'bg-[#FDCED1]'}`}>
                    <span className=" font-semibold flex items-center gap-1">
                      {invoice.comparison.trend === 'up' ? <ArrowUpIcon /> : <ArrowDownIcon />} {invoice.comparison.percentage_change} %
                    </span>
                  </div>
                  <h2 className="text-[#242E2C] text-[12px] mt-2">vs last month</h2>
                  <h2 className="text-[#004D3F] text-[12px] font-bold">{invoice?.comparison?.vs_last_month}</h2>
                </div>
              </div>
            ))
          }
        </div>

      </div>
      <div className="mt-8 mr-8">
        <InvoiceDataTab invoices={invoices} />
      </div>
    </div>
  )
}

export default DashboardInvoicePage