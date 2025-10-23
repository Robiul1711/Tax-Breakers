"use server"
import ticketData from '../../../../public/appointments.json'

export const getAllAppointment = async() =>{
    try{
        return ticketData
    }
    catch(error: any){
        return Error(error)
    }
}