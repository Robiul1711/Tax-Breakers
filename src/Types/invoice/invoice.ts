export type TInvoice = {
  id: number;
  status: "paid" | "unpaid" | "overdue";

  basic_information: {
    invoice_number: string;
    invoice_id: string;
    issue_date: string;
    due_date: string;
    currency: string;
    document_type: string;
    payment_terms: string;
    order_reference: string;
    ddt_reference: string;
  };

  issuer_details: {
    company_name: string;
    vat_number: string;
    fiscal_code: string;
    email: string;
    phone: string;
    street_address: string;
    city: string;
    zip_code: string;
    province: string;
  };

  recipient_details: {
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
  };

  item_table: {
    description: string;
    quantity: number;
    unit_price: number;
    discount: number;
    tax_rate: number;
  }[];

  net_total: number;
  tax_amount: number;
  gross_total: number;

  additional_costs_deductions: {
    withholding_amount: number;
    shipping_cost: number;
    payment_method: string;
  };

  invoice_totals: {
    net_total: number;
    discount_total: number;
    vat_total: number;
    gross_total: number;
  };
};
