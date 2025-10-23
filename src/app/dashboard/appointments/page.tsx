import AppointmentTable from '@/app/pages/dashboard/appointments/AppointmentTable/AppointmentTable'
import CommonButton from '@/common/CommonButton'
import { getAllAppointment } from '@/services/dashboard/appointment/appointment'
import { TAppointments } from '@/Types'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import AppointmentImage from '@/assets/images/OBJECTS.png'

const BookAppointmentPage = async () => {

  const data = await getAllAppointment()
  const appointmentData: TAppointments[] = data instanceof Error ? [] : data;

  //no data show text and button
  if (!appointmentData || appointmentData.length === 0) {
    return (
      <div className="pt-32">
        <div className='flex justify-center h-auto max-w-md mx-auto'>
          <Image src={AppointmentImage} alt="object image"></Image>
        </div>
        <div className='text-center mt-6'>
          <h1 className='text-4xl font-medium mb-4'>No Appointments Yet</h1>
          <p className='text-[#677489] tracking-wider'>You don’t have any scheduled consultations. Book your first appointment to get started.</p>

          <Link href={'/dashboard/appointments/book-an-appointment'}>
            <div className='flex justify-center items-center mt-8'>
              <CommonButton variant='primary' className='rounded-2xl!'>Book An Appointment</CommonButton>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  console.log(appointmentData);
  return (
    <div className='w-full'>
      <div className='bg-[#FBFBFB] p-8 rounded-2xl'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-4xl font-semibold mb-2'>Upcoming  Appointments</h1>
            <p className='text-[#677489] tracking-widest'>Easily schedule tax or accounting chats from your dashboard to manage your finances!</p>
          </div>
          <div>
            <Link href={'/dashboard/appointments/book-an-appointment'}>
              <CommonButton variant='primary' className='font-normal! rounded-2xl!'>Book An Appointment</CommonButton>
            </Link>
          </div>
        </div>
      </div>

      {/* table */}
      <div className='mt-10'>
        <AppointmentTable appointmentData={appointmentData} />
      </div>
    </div>
  )
}

export default BookAppointmentPage