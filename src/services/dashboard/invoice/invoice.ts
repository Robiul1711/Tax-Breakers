"use server"
import { TInvoice } from '@/Types';
import invoiceData from '../../../../public/invoice.json';

export const getAllInvoice = async () => {
    try {
        return invoiceData as TInvoice[];
    } catch (error: any) {
        return Error(error)
    }
}