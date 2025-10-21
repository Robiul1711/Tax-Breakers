"use server"
import invoiceData from '../../../../public/invoice.json';

export const getAllInvoice = async () => {
    try {
        return invoiceData;
    } catch (error: any) {
        return Error(error)
    }
}