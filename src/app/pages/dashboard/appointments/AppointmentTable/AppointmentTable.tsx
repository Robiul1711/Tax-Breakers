"use client";
import React from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { TAppointments } from "@/Types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";


const columnHelper = createColumnHelper<TAppointments>();

const AppointmentTable = ({
    appointmentData,
}: {
    appointmentData: TAppointments[];
}) => {
    const router = useRouter();

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
        columnHelper.accessor("id", {
            header: "ID",
            cell: (info) => <span>{info.getValue()}</span>,
        }),
        columnHelper.accessor("full_name", {
            header: "Full Name",
            cell: (info) => (
                <span className="font-medium text-gray-800">{info.getValue()}</span>
            ),
        }),
        columnHelper.accessor("email_address", {
            header: "Email",
            cell: (info) => (
                <span className="text-gray-600">{info.getValue()}</span>
            ),
        }),
        columnHelper.accessor("phone_number", {
            header: "Phone",
            cell: (info) => (
                <span className="text-gray-600">{info.getValue()}</span>
            ),
        }),
        columnHelper.accessor("location", {
            header: "Location",
            cell: (info) => <span>{info.getValue()}</span>,
        }),
        columnHelper.accessor("consultant_type", {
            header: "Consultant Type",
            cell: (info) => <span>{info.getValue()}</span>,
        }),
        columnHelper.accessor("service_type", {
            header: "Service Type",
            cell: (info) => <span>{info.getValue()}</span>,
        }),
        columnHelper.accessor("time_and_date", {
            header: "Appointment Time",
            cell: (info) => (
                <span className="text-gray-700">{formatDate(info.getValue())}</span>
            ),
        }),
        columnHelper.accessor("duration", {
            header: "Duration",
            cell: (info) => <span>{info.getValue()}</span>,
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

                    <DropdownMenuContent className="rounded-2xl duration-300 p-0 w-44">
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/appointments/${row.original.id}`)
                                }
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white py-3 px-4 rounded-2xl duration-300"
                            >
                                View Details
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/appointments/${row.original.id}`)
                                }
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white py-3 px-4 rounded-2xl duration-300"
                            >
                                Reschedule
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="p-0">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/appointments/${row.original.id}`)
                                }
                                className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white py-3 px-4 rounded-2xl duration-300"
                            >
                                Send Message
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
        data: appointmentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
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
