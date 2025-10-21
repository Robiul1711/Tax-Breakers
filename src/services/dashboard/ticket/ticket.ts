"use server"
import ticketData from '../../../../public/ticket.json';

export const getAllTickets = async() =>{
    try{
        return ticketData
    }
    catch (error: any) {
        return Error(error)
    }
}