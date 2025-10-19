"use server"
import faqData from '../../../public/faq.json';

export const getAllFaq = async () => {
    try {
        return faqData;
    } catch (error: any) {
        return Error(error)
    }
}