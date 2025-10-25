'use client'
import { FileUploadIcon } from '@/Components/SvgContainer/SvgContainer';
import { getAllAppointment } from '@/services/dashboard/appointment/appointment';
import { TAppointments } from '@/Types/appointments/appointments';
// import { TAppointments } from '@/Types';
import React, { useEffect, useState } from 'react';

const AppointmentDetails = ({ id }: { id: string }) => {
    const [appointmentDetails, setAppointmentDetails] = useState<TAppointments | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAppointment = async () => {
            setLoading(true);
            try {
                const result = await getAllAppointment();
                if (Array.isArray(result)) {
                    const appointment = result.find((a) => a.id === Number(id));
                    setAppointmentDetails(appointment || null);
                }
            } catch (error) {
                console.error("Error fetching appointment:", error);
                setAppointmentDetails(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchAppointment();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-gray-500">Loading appointment details...</div>
                </div>
            </div>
        );
    }

    if (!appointmentDetails) {
        return (
            <div className="min-h-screen bg-white p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-gray-500">
                        Appointment not found for ID: {id}
                    </div>
                </div>
            </div>
        );
    }

    const { full_name, email_address, phone_number, location, consultant_type, service_type, time_and_date, duration, message, status } = appointmentDetails;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    return (
        <div className="bg-[#FBFBFB] p-8 space-y-6 rounded-3xl">
            <h1 className="text-4xl font-semibold">View Appointment Details</h1>

            <div className='flex flex-col md:flex-row gap-4'>
                {/* Basic Information */}
                <div className="bg-white p-6 rounded-3xl flex-1">
                    <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            <span className="font-medium w-40 inline-block">Full Name</span> : {full_name}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Email Address</span> : {email_address}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Phone Number</span> : {phone_number}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Location</span> : {location}
                        </p>
                    </div>
                </div>

                {/* Appointment Information */}
                <div className=" bg-white p-6 rounded-3xl flex-1">
                    <h2 className="text-xl font-semibold mb-4">Appointment Information</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            <span className="font-medium w-40 inline-block">Consultant Type</span> : {consultant_type}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Service Type</span> : {service_type}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Date & Time</span> : {formatDate(time_and_date)}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Duration</span> : {duration}
                        </p>
                        <p>
                            <span className="font-medium w-40 inline-block">Status</span> : {status}
                        </p>
                    </div>
                </div>

            </div>
            {/* Message */}
            <div className="bg-white p-6 rounded-3xl">
                <h2 className="text-xl font-semibold mb-2">Message</h2>
                <p className="text-gray-700">{message}</p>
            </div>
            {/* attached file */}
            {appointmentDetails.files && appointmentDetails.files.length > 0 && (
                <div className="bg-white p-6 rounded-3xl">
                    <h2 className="text-xl font-semibold mb-6">Uploaded Documents</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {appointmentDetails.files.map((fileName, index) => (
                            <div key={index} className="bg-[#EDEDED] inline-block px-4 py-2 rounded-lg">
                                <span className="flex items-center gap-2 text-[#727272] text-sm">
                                    <FileUploadIcon /> {fileName}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

};

export default AppointmentDetails;
