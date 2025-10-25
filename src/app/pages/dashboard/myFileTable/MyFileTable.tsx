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
import { CopyIcon, CrossIcon, DeleteIcon, DownloadIcon, FolderIcon, MoveRightIcon, RightArrow } from "@/Components/SvgContainer/SvgContainer";
// import { TFile } from "@/Types";
import UploadFile from "@/app/dashboard/documents/upload-file/page";
import { TFile } from "@/Types/documents/documents";



const columnHelper = createColumnHelper<TFile>();

const MyFileTable = ({ fileData, height = '350', fileName }: { fileData: TFile[], height?: string , fileName?: string }) => {
    const [data] = React.useState<TFile[]>(() => [...fileData]);
    const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
    const [currentData, setCurrentData] = React.useState<TFile[]>([...fileData]);


    const handleFolderDelete = () => {
        const newData = currentData.filter((item) => !selectedRows.includes(item.id as number));
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
            setSelectedRows(data.map((item) => item.id as number));
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
                        className="w-4 h-4 accent-[#004d3f]"
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
                            className="w-4 h-4 accent-[#004d3f]"
                            checked={selectedRows.includes(row.id as number)}
                            onChange={() => toggleRow(row.id as number)}
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
        <div>
            {
                fileData?.length ? <div className="bg-[#FBFBFB] rounded-3xl p-8 mt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#191919] text-[18px] font-medium">
                            <FolderIcon /> <h2>
                                {
                                    fileName ? `${fileName}` : "My Files"
                                }
                            </h2>
                        </div>
                        <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-lg overflow-hidden max-w-[350px] w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full h-full text-sm text-gray-500 placeholder-gray-500 bg-transparent outline-none"
                            />
                        </div>
                    </div>
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
                                                className="px-8 py-4 text-left"
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

                        <div style={{ maxHeight: `${height}px` }} className="overflow-y-auto custom-scroll border rounded-2xl border-[#E5E5E5]" >
                            <table className="w-full border-collapse">
                                <tbody className="text-sm text-gray-700">
                                    {table.getRowModel().rows.map((row) => (
                                        <tr
                                            key={row.id}
                                            className="border-b border-[#E5E5E5] hover:bg-[#EFEFEF] transition duration-300"
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} className="px-8 py-4 text-left">
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
                    :
                    <div className="my-8">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#191919] text-[18px] font-medium">
                                <FolderIcon /> <h2>
                                    {
                                        fileName ? `${fileName}` : "My Files"
                                    }
                                </h2>
                            </div>
                            <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-lg overflow-hidden max-w-[350px] w-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                                    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full h-full text-sm text-gray-500 placeholder-gray-500 bg-transparent outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <UploadFile />
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyFileTable;