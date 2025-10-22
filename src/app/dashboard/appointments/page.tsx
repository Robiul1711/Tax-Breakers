import { getAllAppointment } from '@/services/dashboard/appointment/appointment'
import { TAppointments } from '@/Types'
import React from 'react'

const BookAppointmentPage = async() => {

  const data = await getAllAppointment()
  const appointmentData : TAppointments[] = data instanceof Error ? [] : data;

  console.log(appointmentData);
  return (
    <div>page</div>
  )
}

export default BookAppointmentPage