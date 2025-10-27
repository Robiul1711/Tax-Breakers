import AppointmentBookingForm from '@/app/pages/dashboard/appointments/AppointmentBookingForm/AppointmentBookingForm';
import Title from '@/common/Title';
import React from 'react';

const BookAnAppointmentPage = () => {
    return (
        <div className='xl:mr-8'>
            <div className='bg-[#FBFBFB] rounded-3xl lg:p-8 p-4'>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                         <Title level="title32" children="Book  a Consultant"/>
                        <p className='text-[#677489] lg:text-[18px] md:text-base text-sm mt-4'>Easily book a tax or accounting chat right from your dashboard and keep your finances in check!</p>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className='mt-8'>
                <AppointmentBookingForm></AppointmentBookingForm>
            </div>
        </div>
    );
};

export default BookAnAppointmentPage;