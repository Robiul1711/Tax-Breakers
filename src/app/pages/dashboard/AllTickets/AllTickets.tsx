"use client"
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  ColumnDef,
} from '@tanstack/react-table';
import { MdMoreTime } from 'react-icons/md';

type TTickets = {
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

const columnHelper = createColumnHelper<TTickets>();

const AllTickets = ({ ticketData = [] }: { ticketData?: TTickets[] }) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'solved':
                return 'bg-green-100 text-green-700';
            case 'inprogress':
                return 'bg-blue-100 text-blue-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return 'bg-red-100 text-red-700';
            case 'medium':
                return 'bg-yellow-100 text-yellow-700';
            default:
                return 'bg-gray-100 text-gray-700';
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
        columnHelper.display({
            id: 'select',
            header: () => (
                <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300"
                />
            ),
            cell: () => (
                <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300"
                />
            ),
            size: 50,
        }),
        columnHelper.accessor('ticket_id', {
            header: 'Ticket ID',
            cell: info => (
                <span className="text-sm text-gray-600">
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('title', {
            header: 'Subject',
            cell: info => (
                <span className="text-sm text-gray-900">
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => (
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(info.getValue())}`}>
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('priority', {
            header: 'Priority',
            cell: info => (
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(info.getValue())}`}>
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
            cell: () => (
                <button className="text-gray-400 hover:text-gray-600">
                    <MdMoreTime className="w-5 h-5" />
                </button>
            ),
        }),
    ];

    const table = useReactTable({
        data: ticketData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full h-screen bg-gray-50 p-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                <div className="overflow-auto flex-1">
                    <table className="w-full">
                        <thead className="sticky top-0 bg-gray-50 z-10">
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className="border-b border-gray-200">
                                    {headerGroup.headers.map(header => (
                                        <th 
                                            key={header.id}
                                            className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
                                            style={{ width: header.getSize() }}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="px-6 py-4">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
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