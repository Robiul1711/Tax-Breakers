"use client"
import CommonButton from '@/common/CommonButton';
import { getAllTickets } from '@/services/dashboard/ticket/ticket';
import React, { useEffect, useState } from 'react';

type TTicket = {
    id: number;
    ticket_id: string;
    title: string;
    category: string;
    priority: string;
    description: string;
    submitted_date: string;
    status: string;
    assigned_to: string;
    last_updated: string;
};

const TicketDetails = ({ ticketId }: { ticketId: string }) => {
    const [ticketDetails, setTicketDetails] = useState<TTicket | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const result = await getAllTickets();
                if (Array.isArray(result)) {
                    const ticket = result.find(
                        (t) => t.ticket_id === ticketId
                    );
                    setTicketDetails(ticket || null);
                }
            } catch (error) {
                console.error("Error fetching ticket:", error);
            } finally {
                setLoading(false);
            }
        };

        if (ticketId) {
            fetchTicket();
        }
    }, [ticketId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-gray-500">Loading ticket details...</div>
                </div>
            </div>
        );
    }

    if (!ticketDetails) {
        return (
            <div className="min-h-screen bg-white p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-gray-500">
                        Ticket not found for ID: {ticketId}
                    </div>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-[#FBFBFB] rounded-3xl p-12">
            <div className="">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-4">Ticketing</h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <span>Dashboard</span>
                        <span>&gt;</span>
                        <span>{ticketDetails.status}</span>
                        <span>&gt;</span>
                        <span className="text-gray-900">Ticket #{ticketDetails.ticket_id}</span>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-3xl p-8 mb-8">
                    {/* Issue Title */}
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {ticketDetails.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-8">
                        Submitted on {formatDate(ticketDetails.submitted_date)}
                    </p>

                    {/* Title Section with Category and Priority */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Title</h3>
                            <p className="text-gray-900">{ticketDetails.title}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Category</h3>
                                <p className="text-gray-900 font-medium">{ticketDetails.category}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Priority</h3>
                                <p className="text-gray-900 font-medium">{ticketDetails.priority}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {ticketDetails.description}
                        </p>
                    </div>
                </div>

                {/* Need Assistance Section */}
                <div className="bg-white rounded-3xl p-12 text-center space-y-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        Need Assistance?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Get help, report issues, or contact our support team directly from here.
                    </p>
                    <div className="flex justify-center">
                        <CommonButton className="!px-16 !py-3 !rounded-2xl">
                            Help Center
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;