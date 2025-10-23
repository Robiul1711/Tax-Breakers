import { getAllInvoice } from "@/services/dashboard/invoice/invoice";
import { TInvoice } from "@/Types";
import LogoImg from "@/assets/images/logo.png"
import Image from "next/image";
import CommonButton from "@/common/CommonButton";
import { DownloadIcon } from "@/Components/SvgContainer/SvgContainer";
import { Printer } from "lucide-react";

type TIssueDetails = {
    company_name: string;
    vat_number: string;
    fiscal_code: string;
    email: string;
    phone: string;
    street_address: string;
    city: string;
    zip_code: string;
    province: string;
}

type TRecipientDetails = {
    recipient_name: string;
    recipient_vat_number: string;
    recipient_fiscal_code: string;
    recipient_code: string;
    recipient_pec_address: string;
    recipient_email: string;
    recipient_phone: string;
    recipient_street_address: string;
    recipient_city: string;
    recipient_zip_code: string;
    recipient_province: string;
}

type IAddress = TIssueDetails | TRecipientDetails

const getCountryFromAddress = (address: IAddress): string => {
    if ('city' in address) {
        if (address.city === "Berlin") return "Germany";
    } else if ('recipient_city' in address) {
        if (address.recipient_city === "Berlin") return "Germany";
    }
    return "Country";
}

const DashboardInvoiceDetailsPage = async ({ params }: { params: Promise<{id : number}> }) => {
    const { id } = await params;

    const data = await getAllInvoice();
    const result = data instanceof Error ? [] : data;

    const invoiceArray = result?.filter((item: TInvoice) => item?.id === Number(id));
    const invoice: TInvoice | null = invoiceArray.length > 0 ? invoiceArray[0] : null;

    if (!invoice) {
        return <div className="text-center p-10 text-xl">Invoice not found for ID: {id}</div>;
    }

    const { basic_information,  issuer_details,  recipient_details, item_table,  invoice_totals} = invoice;

    const formatCurrency = (amount: number, currency = 'EUR') => {
        const absoluteAmount = Math.abs(amount);

        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: currency,
        }).format(absoluteAmount);
    }

    // Function to calculate item totals
    const calculateItemTotal = (item: { unit_price: number, discount: number, quantity: number }) => {
        const discountedPrice = item.unit_price - item.discount;
        const total = item.quantity * discountedPrice;
        return {
            unitAmount: discountedPrice,
            lineTotal: total,
        };
    };

    const issuerCountry = getCountryFromAddress(issuer_details);
    const recipientCountry = getCountryFromAddress(recipient_details);

    const issuerAddress = `${issuer_details.street_address}, ${issuer_details.city}, ${issuerCountry}`;
    const recipientAddress = `${recipient_details.recipient_street_address}, ${recipient_details.recipient_zip_code}, ${recipient_details.recipient_city}, ${recipientCountry}`;
    
    const formattedDueDate = new Date(basic_information.due_date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    const formattedIssueDate = new Date(basic_information.issue_date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });


    return (
        <div className=" bg-gray-50 min-h-screen p-4 md:px-24">
            <div className="flex justify-center">
                <div className="w-full bg-white py-12 px-18 shadow-lg border border-gray-100 print:shadow-none print:border-none">
                    <div className="flex justify-between items-start mb-10">
                        <div className="flex items-start">
                            <div className=" mr-4">
                                <Image className="object-cover" src={LogoImg} alt="Logo Img" width={150} height={200} />
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-gray-800">{issuer_details.company_name}</p>
                                <p className="text-sm text-gray-800 font-semibold">{issuerAddress}</p>
                                <p className="text-sm text-gray-800 font-semibold">{issuer_details.zip_code}</p>
                            </div>
                        </div>

                        {/* Right - Invoice Meta */}
                        <div className="text-right">
                            <p className="text-sm text-gray-800 font-semibold">Invoice #<span className="font-bold text-gray-800">{basic_information.invoice_number}</span></p>
                            <p className="text-sm text-gray-800 font-semibold mt-2">Issue date</p>
                            <p className="text-xs text-gray-800 font-semibold">{formattedIssueDate}</p>
                        </div>
                    </div>

                    <div className="border-t-5 border-[#576474] mb-6"></div>

                    {/* --- Main Title --- */}
                    <h1 className="text-3xl font-bold text-gray-800 pt-4">{issuer_details.company_name}</h1>
                    <p className="text-sm text-gray-500 mb-10 mt-2">Add a message here for your customer.</p>

                    {/* --- Details Section (BILL TO, DETAILS, PAYMENT) --- */}
                    <div className="grid grid-cols-3 gap-8 border-b-2 border-gray-300 mt-18">
                        <div className="border-t-2 border-gray-300 pb-4 pt-6">
                            <h3 className="uppercase text-gray-800 font-semibold mb-2">Bill To</h3>
                            <p className="font-medium text-gray-800">{recipient_details.recipient_name}</p>
                            <p className="text-gray-800">{recipient_details.recipient_email}</p>
                            <p className="text-gray-800">{recipient_details.recipient_phone}</p>
                            <p className="text-gray-800">{recipient_details.recipient_street_address}</p>
                            <p className="text-gray-800">{recipient_details.recipient_zip_code}, {recipient_details.recipient_city}</p>
                        </div>

                        <div className="border-t-2 border-gray-300 pb-4 pt-6">
                            <h3 className="uppercase text-gray-800 font-semibold mb-2">Details</h3>
                            <p className="text-gray-800">Enter a brief description about your job or project.</p>
                        </div>

                        <div className="border-t-2 border-gray-300 pb-4 pt-6">
                            <h3 className="uppercase text-gray-800 font-semibold mb-2">Payment</h3>
                            <p className="text-gray-800">Due date: {formattedDueDate}</p>
                            <p className="text-xl font-bold text-gray-800">{formatCurrency(invoice_totals.gross_total, basic_information.currency)}</p>
                        </div>
                    </div>

                    {/* --- Items Table --- */}
                    <div className="mt-4">
                        <div className="grid grid-cols-12 uppercase text-gray-800 font-semibold border-b-2 border-gray-300 pb-4">
                            <div className="col-span-6">Item</div>
                            <div className="col-span-2 text-right">Qty</div>
                            <div className="col-span-2 text-right">Price</div>
                            <div className="col-span-2 text-right">Amount</div>
                        </div>

                        {/* Table Rows (Mapping over items) */}
                        {item_table.map((item, index) => {
                            const { unitAmount, lineTotal } = calculateItemTotal(item);
                            return (
                                <div key={index} className="grid grid-cols-12 text-sm py-4 border-b-2 border-gray-300">
                                    <div className="col-span-6">
                                        <p className="font-medium text-gray-800">{item.description}</p>
                                        <p className="text-xs text-gray-500 mt-1">Describe your item</p>
                                    </div>
                                    <div className="col-span-2 text-right text-gray-600">{item.quantity}</div>
                                    <div className="col-span-2 text-right text-gray-600">{formatCurrency(unitAmount, basic_information.currency)}</div>
                                    <div className="col-span-2 text-right font-medium text-gray-800">{formatCurrency(lineTotal, basic_information.currency)}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* --- Totals Section --- */}
                    <div className="mt-8">
                        {/* Subtotal */}
                        <div className="flex justify-between py-1">
                            <span className="text-gray-800">Subtotal</span>
                            <span className="text-gray-800 font-medium">{formatCurrency(invoice_totals.net_total, basic_information.currency)}</span>
                        </div>

                        {/* Tax */}
                        <div className="flex justify-between py-1">
                            <span className="text-gray-800">Tax</span>
                            <span className="text-gray-800 font-medium">{formatCurrency(invoice_totals.vat_total, basic_information.currency)}</span>
                        </div>

                        {/* Total Due */}
                        <div className="flex justify-between mt-4 py-4 border-t-2 border-b-2 border-gray-300 text-lg font-bold">
                            <span className="text-gray-800">Total Due</span>
                            <span className="text-gray-800">{formatCurrency(invoice_totals.gross_total, basic_information.currency)}</span>
                        </div>
                    </div>

                    {/* --- Footer Note --- */}
                    <div className="mt-22 pt-6">
                        <p className="text-xs text-gray-500">
                            Want to customize your invoice even more? <br />
                            Add taxes, discounts, and service charges with Square Invoices.
                        </p>
                        <a href="#" className="text-xs text-blue-600 hover:text-blue-800 mt-1 inline-block">
                            Sign up for Square Invoices free
                        </a>
                    </div>

                    {/* Page Number */}
                    <div className="text-right text-xs text-gray-400 mt-4">
                        Page 1
                    </div>

                </div>
            </div>
            <div className="flex justify-end items-center gap-4 my-10 mr-2">
                <CommonButton  variant="secondary"><DownloadIcon /> Download</CommonButton>
                <CommonButton ><Printer /> Print</CommonButton>
            </div>
        </div>
    );
};

export default DashboardInvoiceDetailsPage;