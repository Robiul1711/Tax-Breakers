"use client";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import React from "react";
import LabelImg from "@/assets/images/Label Img File.png";
import Image from "next/image";
import { CopyIcon, CrossIcon, DeleteIcon, DownloadIcon, MoveRightIcon, RightArrow } from "@/Components/SvgContainer/SvgContainer";

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
    { id: 8, name: "Marketing_Assets.zip", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "zip" },
];

const columnHelper = createColumnHelper<TFile>();

const MyFileTable = () => {
    const [data] = React.useState<TFile[]>(() => [...fileData]);
    const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
    const [currentData, setCurrentData] = React.useState<TFile[]>([...fileData]);


    const handleFolderDelete = () => {
        const newData = currentData.filter((item) => !selectedRows.includes(item.id));
        setSelectedRows([]);
        setCurrentData(newData);
    }

    const headerCheckboxRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (headerCheckboxRef.current) {
            headerCheckboxRef.current.indeterminate =
                selectedRows.length > 0 && selectedRows.length < data.length;
        }
    }, [selectedRows, data.length]);

    const toggleRow = (id: number) => {
        setSelectedRows((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map((item) => item.id));
        }
    };

    const columns = [
        columnHelper.accessor("name", {
            id: "name",
            header: () => (
                <div className="flex items-center gap-2">
                    <input
                        ref={headerCheckboxRef}
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedRows.length === data.length}
                        onChange={toggleSelectAll}
                    />
                    <span>Name</span>
                </div>
            ),
            cell: (info) => {
                const row = info.row.original;
                return (
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={selectedRows.includes(row.id)}
                            onChange={() => toggleRow(row.id)}
                        />
                        <div className="relative">
                            <Image src={LabelImg} alt="file-type" width={30} height={25} />
                            <p className="absolute text-sm bottom-1 left-1 text-[#191919] text-[7px] font-bold">
                                {row?.file_type}
                            </p>
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

    const table = useReactTable({
        data: currentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const columnWidths = ["37%", "33%", "14%", "40%"];

    return (
        <div className="mt-10">
            {
                selectedRows.length > 0 && (
                    <div className="bg-[#E7F9DE]  inline-block rounded-lg px-6 py-4 mb-6 transition-all duration-500">
                        <div className="flex items-center gap-6">
                        <h2 className="text-[#191919] text-[14px] font-semibold flex items-center gap-4"><span onClick={() => setSelectedRows([])} className="cursor-pointer"><CrossIcon /> </span>
                            {selectedRows.length} Folder
                            {selectedRows.length > 1 ? "s" : ""} selected</h2>
                        <button className="text-sm text-[#191919] cursor-pointer hover:text-[#004D3F] hover:font-medium flex items-center gap-2"><MoveRightIcon /> Move</button>
                        <button className="text-sm text-[#191919] cursor-pointer hover:text-[#004D3F] hover:font-medium flex items-center gap-2"><CopyIcon /> Copy</button>
                        <button onClick={() => handleFolderDelete()} className="text-sm text-[#191919] cursor-pointer hover:text-red-700 hover:font-medium flex items-center gap-2"><DeleteIcon /> Delete</button>
                        <button className="text-sm text-[#191919] cursor-pointer hover:text-[#004D3F] hover:font-medium flex items-center gap-2"><DownloadIcon /> Download</button>
                    </div>
                    </div>
                )
            }
            <table className="w-full border-collapse">
                <thead className="uppercase text-[#191919] sticky top-0 z-10">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => (
                                <th
                                    key={header.id}
                                    style={{ width: columnWidths[index] }}
                                    className="py-4 px-8 text-left"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
            </table>

            <div className="max-h-[300px] overflow-y-auto custom-scroll border rounded-2xl border-[#E5E5E5]">
                <table className="w-full border-collapse">
                    <tbody className="text-sm text-gray-700">
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className="border-b border-[#E5E5E5] hover:bg-[#EFEFEF] transition duration-300"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="py-4 px-8 text-left">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFileTable;