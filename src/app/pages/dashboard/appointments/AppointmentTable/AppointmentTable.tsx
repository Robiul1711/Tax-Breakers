"use client";
import React from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
// import { TAppointments } from "@/Types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { TAppointments } from "@/Types/appointments/appointments";


const columnHelper = createColumnHelper<TAppointments>();

const AppointmentTable = ({
    appointmentData,
}: {
    appointmentData: TAppointments[];
}) => {
    const router = useRouter();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Cancelled':
                return 'bg-[#FDCED1] w-full text-[#F73541]';
            case 'Pending':
                return 'bg-[#FFE3B4] text-[#B27000] w-full';
            case 'Completed':
                return 'bg-[#004D3F] text-[#A7EB94] w-full';
        }
    };

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


    const columns = [


        columnHelper.accessor("consultant_type", {
            header: "Consultant Type",
            cell: (info) => <span>{info.getValue()}</span>,
        }),
        columnHelper.accessor("service_type", {
            header: "Service Type",
            cell: (info) => <span>{info.getValue()}</span>,
        }),
        columnHelper.accessor("duration", {
            header: "Duration",
            cell: (info) => <span className="text-[#004D3F]">{info.getValue()}</span>,
        }),
        columnHelper.accessor("time_and_date", {
            header: "Date & Time",
            cell: (info) => (
                <span className="text-gray-700">{formatDate(info.getValue())}</span>
            ),
        }),
        columnHelper.accessor("status", {
            header: "Status",
            cell: (info) => (
                <span
                    className={`${getStatusColor(info.getValue())} py-1 rounded-full text-sm font-medium inline-block`}
                >
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.display({
            id: "action",
            header: "Action",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="text-gray-700 text-xl font-bold cursor-pointer">
                            ...
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="rounded-2xl duration-300 p-0 md:w-44 w-full">
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/appointments/${row.original.id}`)
                                }
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white md:py-3 md:px-4 p-2 rounded-2xl duration-300"
                            >
                                View Details
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/appointments/${row.original.id}`)
                                }
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white md:py-3 md:px-4 p-2 rounded-2xl duration-300"
                            >
                                Reschedule
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/appointments/${row.original.id}`)
                                }
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white md:py-3 md:px-4 p-2 rounded-2xl duration-300"
                            >
                                Send Message
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="p-0">
                            <button className="bg-white w-full cursor-pointer text-red-500 hover:bg-red-500 hover:text-white md:py-3 md:px-4 p-2 rounded-2xl duration-300">
                                Delete
                            </button>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }),
    ];

    const table = useReactTable({
        data: appointmentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full overflow-x-auto custom-scroll">
            <table className="w-full text-sm text-center border-collapse">
                <thead className="bg-[#E7F9DE] text-gray-700 font-semibold">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="px-6 py-3">
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={() =>
                                router.push(`/dashboard/appointments/${row.original.id}`)
                            }
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentTable;
