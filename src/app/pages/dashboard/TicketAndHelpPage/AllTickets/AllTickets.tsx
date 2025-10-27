"use client";
import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table';
import { TTickets } from '@/Types';
import { TicketSVG } from '@/Components/SvgContainer/SvgContainer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

const columnHelper = createColumnHelper<TTickets>();

const AllTickets = ({ ticketData = [] }: { ticketData?: TTickets[] }) => {
    const router = useRouter();

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'open':
                return 'bg-[#E6E6E6] w-full text-[#677489] border border-[#677489]';
            case 'pending':
                return 'bg-yellow-100 w-full border border-yellow-600 text-yellow-700';
            case 'in progress':
                return 'bg-blue-50 w-full border border-[#81A1E3] text-blue-700';
            case 'resolved':
                return 'bg-[#D5FFD7] w-full border border-[#68A499]  text-green-700';
            default:
                return 'bg-gray-100 w-full text-gray-700';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return 'bg-red-100 w-full text-[#F73541] border border-red-600';
            case 'medium':
                return 'bg-[#E6E6E6] w-full text-[#677489] border border-[#677489]';
            default:
                return 'bg-gray-100 border border-gray-500 w-full text-gray-700';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const columns = [
        columnHelper.accessor('ticket_id', {
            header: 'Ticket ID',
            cell: info => (
                <div className='flex items-center gap-2'>
                    <div className='p-2 rounded-full bg-[#ECF4E9]'>
                        <TicketSVG />
                    </div>
                    <span className="text-sm text-gray-600">
                        {info.getValue()}
                    </span>
                </div>
            ),
            size: 250
        }),
        columnHelper.accessor('title', {
            header: 'Subject',
            cell: info => (
                <span className="text-sm text-gray-900 whitespace-nowrap">
                    {info.getValue()}
                </span>
            ),
            size: 400,
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => (
                <span className={`flex justify-center px-3 py-1 rounded-2xl text-xs font-medium ${getStatusColor(info.getValue())}`}>
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('priority', {
            header: 'Priority',
            cell: info => (
                <span className={`flex justify-center px-3 py-1 rounded-2xl text-xs font-medium ${getPriorityColor(info.getValue())}`}>
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('category', {
            header: 'Category',
            cell: info => (
                <span className="text-sm text-gray-700">
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('last_updated', {
            header: 'Last Update',
            cell: info => (
                <span className="text-sm text-gray-600">
                    {formatDate(info.getValue())}
                </span>
            ),
        }),
        columnHelper.display({
            id: 'action',
            header: 'Action',
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="text-[#071431] text-xl font-medium cursor-pointer">...</button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="rounded-2xl duration-300 p-0">
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() => router.push(`/dashboard/helpandticketing/${row.original.ticket_id}`)}
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white py-3 px-4 rounded-2xl duration-300"
                            >
                                View Details
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="p-0">
                            <button className="bg-white w-full cursor-pointer text-red-500 hover:bg-red-500 hover:text-white py-3 px-4 rounded-2xl duration-300">
                                Delete
                            </button>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }),
    ];

    const table = useReactTable({
        data: ticketData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full">
            <div className="rounded-lg flex flex-col">
                <div className="overflow-x-scroll custom-scroll">
                    <table className="w-full min-w-[800px] rounded-2xl">
                        <thead className="sticky top-0 bg-[#E7F9DE] z-10">
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className="border-b border-gray-200">
                                    {headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap"
                                            style={{ width: header.getSize() }}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {table.getRowModel().rows.map(row => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                                    onClick={() => router.push(`/dashboard/helpandticketing/${row.original.ticket_id}`)}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTickets;