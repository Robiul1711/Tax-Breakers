import InvoiceDataTab from "@/app/pages/dashboard/invoiceDataTab/InvoiceDataTab"
import CommonButton from "@/common/CommonButton"
import Title from "@/common/Title"
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

  return (
    <div className="xl:mr-8">
      <div className="bg-[#FBFBFB] rounded-3xl lg:p-8 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-14">
          <div className="lg:w-2/3">
            <Title level="title32" children="Invoices"/>
            <p className="text-[#677489] lg:text-[18px] md:text-base text-sm mt-4">Easily book a tax or accounting chat right from your dashboard and keep your finances in check!</p>
          </div>
          <div className="flex items-center gap-4">

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CommonButton
                  variant="primary"
                  className="lg:text-[18px]! font-semibold! hover:text-[#004D3F]! border-[#004D3F]! flex! items-center! gap-2.5 "
                >
                  <FaPlus /> Add Invoice
                </CommonButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="lg:mr-18 ml-8">
                <DropdownMenuLabel>
                 <Link href={'/dashboard/invoices/invoice-create'}>
                  <CommonButton
                    variant="primary"
                    className="font-semibold! hover:text-[#004D3F]! border-[#004D3F]! flex! items-center! gap-2.5"
                  >
                    <FaPlus /> Proforma Invoice
                  </CommonButton></Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Link href={'/dashboard/invoices/invoice-create'}>
                  <CommonButton
                    variant="secondary"
                    className="font-semibold! hover:text-white! flex! items-center! gap-2.5"
                  >
                    <FaPlus /> Electronic Invoice
                  </CommonButton>
                  </Link>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mb-6">
          {
            invoicesData.map((invoice, index) => (
              <div key={index} className="bg-[#FFF] rounded-2xl p-4 border border-[#E5E6E6] flex justify-between items-center gap-4">
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
      <div className="mt-8">
        <InvoiceDataTab invoices={invoices} />
      </div>
    </div>
  )
}

export default DashboardInvoicePage;