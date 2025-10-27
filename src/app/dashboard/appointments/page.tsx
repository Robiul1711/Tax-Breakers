import AppointmentTable from '@/app/pages/dashboard/appointments/AppointmentTable/AppointmentTable'
import CommonButton from '@/common/CommonButton'
import { getAllAppointment } from '@/services/dashboard/appointment/appointment'
// import { TAppointments } from '@/Types'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import AppointmentImage from '@/assets/images/OBJECTS.png'
import Title from '@/common/Title'

const BookAppointmentPage = async () => {

  const data = await getAllAppointment()
  const appointmentData: any[] = data instanceof Error ? [] : data;

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
  return (
    <div className='w-full xl:pr-8'>
      <div className='bg-[#FBFBFB] rounded-3xl lg:p-8 p-4 border border-gray-100'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6'>
          <div className="lg:w-2/3">
            <Title level="title32" children="Upcoming  Appointments" />
            <p className='text-[#677489] lg:text-[18px] md:text-base text-sm mt-4'>Easily schedule tax or accounting chats from your dashboard to manage your finances!</p>
          </div>
          <div>
            <Link href={'/dashboard/appointments/book-an-appointment'}>
              <CommonButton variant='primary' className='font-normal!'>Book An Appointment</CommonButton>
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