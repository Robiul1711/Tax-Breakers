"use client"
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import LabelImg from "@/assets/images/Label Img File.png"
import Image from 'next/image';

type TFile = {
    id: number;
    name: string;
    modified: string;
    file_size: string;
    sharing: string;
    file_type: string;
};

const fileData: TFile[] = [
    { id: 1, name: "Marketing_Assets.zip", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "zip" },
    { id: 2, name: "Annual_Report_2024.pdf", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "pdf" },
    { id: 3, name: "Logo_Variant_HD.png", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "png" },
    { id: 4, name: "Q1-Financials.xlsx", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "xlsx" },
    { id: 5, name: "Company_Intro.ppt", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "ppt" },
    { id: 6, name: "Onboarding_Guide.txt", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "txt" },
    { id: 7, name: "Summer_Ad_Reel.mp4", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "mp4" },
    { id: 8, name: "Marketing_Assets.zip", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "zip" }
];

const columnHelper = createColumnHelper<TFile>();

const columns = [
    columnHelper.accessor("name", {
        id: "name",
        header: () => (
            <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Name</span>
            </div>
        ),
        cell: (info) => {
            const row = info.row.original;
            return (
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <div className='relative'>
                        <Image src={LabelImg} alt="file-type" width={30} height={25} />
                        <p className='absolute text-sm bottom-1 left-1 text-[#191919] text-[7px] font-bold'>{row?.file_type}</p>
                    </div>

                    {row.name}
                </div>
            );
        },
    }),

    columnHelper.accessor("modified", {
        header: () => "Modified",
        cell: (info) => info.getValue() as string,
    }),

    columnHelper.accessor("file_size", {
        header: () => "File Size",
        cell: (info) => <div>{info.getValue() as string}</div>,
    }),

    columnHelper.accessor("sharing", {
        header: () => "Sharing",
        cell: (info) => (
            <div className="text-[#191919] font-semibold">
                {info.getValue() as string}
            </div>
        ),
    }),
];


const MyFileTable = () => {
    const [data] = React.useState<TFile[]>(() => [...fileData]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5]">
            <table className="w-full border-collapse">
                <thead className="uppercase text-[#191919]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="py-3 px-8 text-left">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody className="text-sm text-gray-700">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b border-[#E5E5E5] hover:bg-gray-50 transition">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="py-3 px-8 text-left">
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

export default MyFileTable;