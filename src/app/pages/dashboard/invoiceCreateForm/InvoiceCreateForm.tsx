"use client";
import CommonButton from "@/common/CommonButton";
import { SendInvoiceIcon } from "@/Components/SvgContainer/SvgContainer";
import { FieldValues, useForm, useFieldArray, UseFormRegister, FieldErrors } from "react-hook-form";

interface IFormInputProps {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
    defaultValue?: number;
}
interface IItemInputProps {
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
    defaultValue?: number;
}

interface IFormSelectProps {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
    options: { value: string; label: string }[]; // dynamic options
    defaultValue?: string;
}

interface IFormDatePickerProps {
    label: string;
    name: string;
    register: any;
    errors: any;
    defaultValue?: string;
}

// Helper component for common text input fields
const FormInput: React.FC<IFormInputProps> = ({ label, name, register, errors, defaultValue = '' }) => (
    <div className="flex flex-col">
        <label className="text-[#0A0A0A] text-[14px] mb-3">{label}</label>
        <input
            {...register(name, { value: defaultValue })}
            className={`p-3 border rounded-md text-[#717182] text-[14px] transition ${errors[name] ? "border-red-500" : " border-[rgba(0,0,0,0.10)]"
                }`}
            type="text"
        />
    </div>
);

const FormSelect: React.FC<IFormSelectProps> = ({
    label,
    name,
    register,
    errors,
    options,
    defaultValue = "",
}) => (
    <div className="flex flex-col">
        <label className="text-[#0A0A0A] text-[14px] mb-3">{label}</label>
        <select
            {...register(name, { value: defaultValue })}
            className={`p-3 border rounded-md text-[#717182] text-[14px] transition ${errors[name] ? "border-red-500" : "border-[rgba(0,0,0,0.10)]"
                }`}
            defaultValue={defaultValue}
        >
            <option value="" disabled>
                Select {label}
            </option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    </div>
);


const FormDatePicker: React.FC<IFormDatePickerProps> = ({ label, name, register, errors, defaultValue }) => {
    return (
        <div className="flex flex-col">
            <label className="text-[#0A0A0A] text-[14px] mb-2">{label}</label>
            <input
                type="date"
                {...register(name)}
                defaultValue={defaultValue}
                className={`p-3 border rounded-md text-[#717182] text-[14px] transition ${errors[name] ? "border-red-500" : "border-[rgba(0,0,0,0.10)]"
                    }`}
            />
            {errors[name] && (
                <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>
            )}
        </div>
    );
};


// Helper component for Item Table inputs (numeric fields)
const ItemInput: React.FC<IItemInputProps> = ({ name, register, errors, defaultValue = 0.0 }) => (
    <input
        {...register(name, { valueAsNumber: true })}
        className={`w-full px-3 py-2 border rounded-md text-sm transition ${errors[name] ? "border-red-500" : "border-gray-300"
            }`}
        type="number"
        step="0.01"
        defaultValue={defaultValue}
    />
);


const InvoiceCreateForm = () => {

    const defaultValues = {
        basic_information: {
            invoice_number: '',
            invoice_id: '',
            issue_date: '',
            due_date: '',
            currency: '',
            document_type: 'TAXES',
            payment_terms: '',
            order_reference: '',
            ddt_reference: '',
        },
        issuer_details: {
            company_name: 'Your Company Name',
            vat_number: 'Tax ID (N)',
            fiscal_code: '155497960',
            email: '',
            phone: '',
            street_address: '98 North 102',
            city: '',
            zip_code: '',
            province: '',
        },
        recipient_details: {
            recipient_name: 'Your Company Name',
            recipient_vat_number: '',
            recipient_fiscal_code: '',
            recipient_code: '',
            recipient_pec_address: '',
            recipient_email: 'admin@company.it',
            recipient_phone: '',
            recipient_street_address: 'admin_street',
            recipient_city: '',
            recipient_zip_code: '2.555',
            recipient_province: '0.0',
        },
        item_table: [
            {
                description: 'Description here',
                quantity: 0,
                unit_price: 0,
                discount: 0,
                tax_rate: 0
            },
        ],
        net_total: 0,
        tax_amount: 0,
        gross_total: 0,
        additional_costs_deductions: {
            withholding_amount: 0,
            shipping_cost: 0,
            payment_method: 'Bank 0-5 days',
        },
        invoice_totals: {
            net_total: 0,
            discount_total: 0,
            vat_total: 0,
            gross_total: 0,
        }
    };


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    // Hook for the first Item Table (dynamic fields)
    const { fields: itemFields, append: appendItem, remove: removeItem } = useFieldArray({
        control,
        name: "item_table",
    });


    const onSubmit = (data: FieldValues) => {
        console.log("Invoice Data:", data);
    };


    // Utility function to render a header for each section
    const SectionHeader = ({ title }: { title: string }) => (
        <h3 className="mb-8 text-[#0A0A0A] font-semibold">{title}</h3>
    );


    return (
        <div className="bg-[#FBFBFB] border border-[#E6E8E5] rounded-3xl p-8">
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Basic Information */}
                <div className="bg-[#FFF] rounded-2xl py-7 px-9">
                    <SectionHeader title="Basic Information" />
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <FormInput label="Invoice Number *" name="basic_information.invoice_number" register={register} errors={errors} />
                        <FormInput label="Invoice ID" name="basic_information.invoice_id" register={register} errors={errors} />
                        <FormDatePicker label="Issue Date *" name="basic_information.issue_date" register={register} errors={errors} />
                        <FormInput label="Due Date *" name="basic_information.due_date" register={register} errors={errors} />
                        <FormSelect label="Currency" name="basic_information.currency" register={register} errors={errors}
                            options={[
                                { value: "usd", label: "USD - Dollar" },
                                { value: "eur", label: "EUR - Euro" },
                                { value: "bdt", label: "BDT - Taka" },
                            ]}
                        />
                        <FormSelect label="Document Type" name="basic_information.document_type" register={register} errors={errors}
                            options={[
                                { value: "nid", label: "National ID (NID)" },
                                { value: "passport", label: "Passport" },
                                { value: "driving_license", label: "Driving License" },
                            ]}
                        />
                    </div>
                    <FormInput label="Payment Terms" name="basic_information.payment_terms" register={register} errors={errors} />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <FormInput label="Order Reference" name="basic_information.order_reference" register={register} errors={errors} />
                        <FormInput label="DDT Reference" name="basic_information.ddt_reference" register={register} errors={errors} />
                    </div>
                </div>

                <div className="bg-[#FFF] rounded-2xl py-7 px-9 my-6">
                    <SectionHeader title="Issuer Details" />
                    <div className="grid grid-cols-3 gap-4">
                        <FormInput label="Company Name" name="issuer_details.company_name" register={register} errors={errors} />
                        <FormInput label="VAT Number" name="issuer_details.vat_number" register={register} errors={errors} />
                        <FormInput label="Fiscal Code" name="issuer_details.fiscal_code" register={register} errors={errors} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <FormInput label="Email" name="issuer_details.email" register={register} errors={errors} />
                        <FormInput label="Phone" name="issuer_details.phone" register={register} errors={errors} />
                        <FormInput label="Street Address" name="issuer_details.street_address" register={register} errors={errors} />

                        <FormSelect label="City" name="issuer_details.city" register={register} errors={errors}
                            options={[
                                { value: "dhaka", label: "Dhaka" },
                                { value: "chittagong", label: "Chittagong" },
                                { value: "rajshahi", label: "Rajshahi" },
                                { value: "khulna", label: "Khulna" },
                                { value: "sylhet", label: "Sylhet" },
                            ]}
                        />

                        <FormInput label="ZIP Code" name="issuer_details.zip_code" register={register} errors={errors} />
                        <FormInput label="Province" name="issuer_details.province" register={register} errors={errors} />
                    </div>
                </div>

                {/* Recipient Details */}
                <div className="bg-[#FFF] rounded-2xl py-7 px-9">
                    <SectionHeader title="Recipient Details" />
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <FormInput label="Recipient Name" name="recipient_details.recipient_name" register={register} errors={errors} />
                        <FormInput label="VAT Number" name="recipient_details.recipient_vat_number" register={register} errors={errors} />
                        <FormInput label="Fiscal Code" name="recipient_details.recipient_fiscal_code" register={register} errors={errors} />
                        <FormInput label="Recipient Code" name="recipient_details.recipient_code" register={register} errors={errors} />
                    </div>
                    <FormInput label="PEC Address" name="recipient_details.recipient_pec_address" register={register} errors={errors} />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <FormInput label="Email" name="recipient_details.recipient_email" register={register} errors={errors} />
                        <FormInput label="Phone" name="recipient_details.recipient_phone" register={register} errors={errors} />
                        <FormInput label="Street Address" name="recipient_details.recipient_street_address" register={register} errors={errors} />
                        <FormSelect label="City" name="recipient_details.recipient_city" register={register} errors={errors}
                            options={[
                                { value: "dhaka", label: "Dhaka" },
                                { value: "chittagong", label: "Chittagong" },
                                { value: "rajshahi", label: "Rajshahi" },
                                { value: "khulna", label: "Khulna" },
                                { value: "sylhet", label: "Sylhet" },
                            ]}
                        />
                        <FormInput label="ZIP Code" name="recipient_details.recipient_zip_code" register={register} errors={errors} />
                        <FormInput label="Province" name="recipient_details.recipient_province" register={register} errors={errors} />
                    </div>
                </div>

                {/* Item Table 1 */}
                <div className="mt-4 bg-[#FFF] rounded-2xl py-7 px-9">
                    <div className="flex justify-between items-center ">
                        <SectionHeader title="Item Table" />
                        <button
                            type="button"
                            onClick={() => appendItem({
                                description: 'Description here',
                                quantity: 0.0,
                                unit_price: 0.0,
                                discount: 0.0,
                                tax_rate: 0.0
                            })}
                            className="bg-[#FFF] border border-[#E6E8E5] p-2 text-[#0C110F] text-[14px] rounded-md cursor-pointer"
                        >
                            + Add New Row
                        </button>
                    </div>

                    {itemFields.map((item, index) => (
                        <div key={item.id} className="bg-[#F9F9F9] rounded-2xl p-5 mb-4">
                            <div className="col-span-3">
                                <label className="text-xs font-medium text-gray-500 mb-1 block">Description</label>
                                <textarea
                                    {...register(`item_table.${index}.description`)}
                                    className="w-full px-3 py-2 border rounded-md text-[#717182] text-[14px] transition border-gray-300"
                                    placeholder="Enter item description"
                                    rows={3}
                                />

                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                <div className="col-span-1">
                                    <label className="text-xs font-medium text-gray-500 mb-1 block">Quantity</label>
                                    <ItemInput name={`item_table.${index}.quantity`} register={register} errors={errors} />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-xs font-medium text-gray-500 mb-1 block">Unit Price (CAD)</label>
                                    <ItemInput name={`item_table.${index}.unit_price`} register={register} errors={errors} />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-xs font-medium text-gray-500 mb-1 block">Discount</label>
                                    <ItemInput name={`item_table.${index}.discount`} register={register} errors={errors} />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-xs font-medium text-gray-500 mb-1 block">Tax Rate</label>
                                    <ItemInput name={`item_table.${index}.tax_rate`} register={register} errors={errors} />
                                </div>
                            </div>
                            {itemFields.length > 1 && (
                                <button type="button" onClick={() => removeItem(index)} className="text-red-500 text-xs mt-2 cursor-pointer hover:text-red-700">
                                    Remove Item
                                </button>
                            )}
                        </div>
                    ))}

                    {/* Totals Section */}
                    <div className="mt-4 border-t-2 border-gray-300 pt-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label className="text-[#0A0A0A] text-[14px] mb-3">Net Total</label>
                                <input
                                    {...register('net_total', { value: defaultValues.net_total })}
                                    className={`p-3 border rounded-md text-[#717182] text-[14px] transition border-[rgba(0,0,0,0.10)]"
                                        }`}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#0A0A0A] text-[14px] mb-3">Tax Amount</label>
                                <input
                                    {...register('tax_amount', { value: defaultValues.tax_amount })}
                                    className={`p-3 border rounded-md text-[#717182] text-[14px] transition border-[rgba(0,0,0,0.10)]"
                                        }`}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#0A0A0A] text-[14px] mb-3">Gross Total</label>
                                <input
                                    {...register('gross_total', { value: defaultValues.gross_total })}
                                    className={`p-3 border rounded-md text-[#717182] text-[14px] transition border-[rgba(0,0,0,0.10)]"
                                        }`}
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>




                {/* Additional Costs & Deductions */}
                <div className="mt-4 bg-[#FFF] rounded-2xl py-7 px-9">
                    <SectionHeader title="Additional Costs & Deductions" />
                    <div className="grid grid-cols-2 gap-4 my-4">
                        <FormInput label="Withholding Amount" name="additional_costs_deductions.withholding_amount" register={register} errors={errors} />
                        <FormInput label="Shipping Cost" name="additional_costs_deductions.shipping_cost" register={register} errors={errors} />
                    </div>
                    <FormSelect label="Payment Method" name="additional_costs_deductions.payment_method" register={register} errors={errors}
                        options={[
                            { value: "cash", label: "Cash" },
                            { value: "bank_transfer", label: "Bank Transfer" },
                            { value: "credit_card", label: "Credit Card" },
                            { value: "paypal", label: "PayPal" },
                            { value: "mobile_banking", label: "Mobile Banking" },
                        ]}
                    />
                    <div className="mt-8">
                        <SectionHeader title="Invoice totals" />
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[#0A0A0A]">Net Total</span>
                                <span className="font-medium text-[#0A0A0A]">€{defaultValues.invoice_totals.net_total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[#0A0A0A]">Discount Total</span>
                                <span className="font-medium text-[#0A0A0A]">€{defaultValues.invoice_totals.discount_total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[#0A0A0A]">VAT Total</span>
                                <span className="font-medium text-[#0A0A0A]">€{defaultValues.invoice_totals.vat_total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-lg pt-2 border-t border-gray-300 mt-2">
                                <span className=" text-[#0A0A0A]">Gross Total</span>
                                <span className="font-medium text-[#0A0A0A] text-lg">€{defaultValues.invoice_totals.gross_total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6">
                    <button type="button" className="text-[#101115] text-lg font-medium hover:underline hover:text-red-700 cursor-pointer">
                        cancel
                    </button>
                    <div className="flex items-center gap-3">
                        <CommonButton variant="secondary">Save Draft</CommonButton>
                       
                    <CommonButton type="submit" variant="primary" className="ml-4"><SendInvoiceIcon /> Send Invoice</CommonButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InvoiceCreateForm;