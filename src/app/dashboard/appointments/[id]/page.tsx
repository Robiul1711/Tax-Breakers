import AppointmentDetails from '@/app/pages/dashboard/appointments/AppointmentDetails/AppointmentDetails';
import React from 'react';

const AppointmentDetailsPage = async({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    
    return (
        <div>
            <AppointmentDetails id={id}/>
        </div>
    );
};

export default AppointmentDetailsPage;