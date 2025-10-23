import AppointmentBookingForm from '@/app/pages/dashboard/appointments/AppointmentBookingForm/AppointmentBookingForm';
import React from 'react';

const BookAnAppointmentPage = () => {
    return (
        <div>
            <div className='bg-[#FBFBFB] p-8 rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-4xl font-semibold mb-2'>Book  a Consultant</h1>
                        <p className='text-[#677489] tracking-widest'>Easily book a tax or accounting chat right from your dashboard and keep your finances in check!</p>
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