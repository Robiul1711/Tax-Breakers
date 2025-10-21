"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import Pagination from "@/Shared/Pagination";
import { TInvoice } from "@/Types";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import React, { useState, useEffect, useRef, useCallback } from "react";
const columnHelper = createColumnHelper<TInvoice>();

const InvoiceDataTab = ({ invoices }: { invoices: TInvoice[] }) => {
    const [billingCycle, setBillingCycle] = useState<"All" | "Paid" | "Unpaid" | "Overdue">("All");
    const [filterCycle, setFilterCycle] = useState<"Filter" | "Last Week" | "Last 30 Days" | "Last 6 Months" | "Last Year">("Filter");
    const [searchText, setSearchText] = useState("");

    const [filteredData, setFilteredData] = useState<TInvoice[]>([...invoices]);
    const [currentPageData, setCurrentPageData] = useState<TInvoice[]>([]);
    const [dataPerPage, setDataPerPage] = useState(10);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const headerCheckboxRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);


    const handlePageData = useCallback((pageData: TInvoice[]) => {
        setCurrentPageData(pageData);
    }, []);


    // ✅ Filter invoices based on billing cycle and search
    useEffect(() => {
        let tempData = [...invoices];

        if (billingCycle !== "All") {
            tempData = tempData.filter(
                (item) => item.status.toLowerCase() === billingCycle.toLowerCase()
            );
        }

        if (searchText.trim() !== "") {
            tempData = tempData.filter(
                (item) =>
                    item.doc_id.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.sender.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.recipient.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredData(tempData);
        setSelectedRows([]); // reset selection when filter changes
        setCurrentPageData([]); // reset page
    }, [billingCycle, searchText, invoices]);

    // ✅ Slider transform for billing cycle buttons
    const getSliderTransform = () => {
        switch (billingCycle) {
            case "All": return "translateX(0%)";
            case "Paid": return "translateX(100%)";
            case "Unpaid": return "translateX(200%)";
            case "Overdue": return "translateX(300%)";
            default: return "translateX(0%)";
        }
    };

    // ✅ Row selection
    const toggleRow = (id: number) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedRows.length === currentPageData.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(currentPageData.map((item) => item.id));
        }
    };

    // ✅ Table columns
    const columns = [
        columnHelper.accessor("doc_id", {
            id: "doc_id",
            header: () => (
                <div className="flex items-center gap-2">
                    <input
                        ref={headerCheckboxRef}
                        type="checkbox"
                        className="checkbox checkbox-sm border-gray-400"
                        checked={currentPageData.length > 0 && selectedRows.length === currentPageData.length}
                        onChange={toggleSelectAll}
                    />
                    <span>Doc ID</span>
                </div>
            ),
            cell: (info) => {
                const row = info.row.original;
                return (
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-gray-400"
                            checked={selectedRows.includes(row.id)}
                            onChange={() => toggleRow(row.id)}
                        />
                        <span className="text-[#5E5E5E]">{row.doc_id}</span>
                    </div>
                );
            },
        }),
        columnHelper.accessor("date", { header: () => "Date", cell: (info) => <span className="text-[#363B54]">{info.getValue()}</span> }),
        columnHelper.accessor("sender", { header: () => "Sender", cell: (info) => <span className="text-[#363B54]">{info.getValue()}</span> }),
        columnHelper.accessor("recipient", { header: () => "Recipient", cell: (info) => <span className="text-[#363B54]">{info.getValue()}</span> }),
        columnHelper.accessor("status", {
            header: () => "Status",
            cell: (info) => (
                <div className={`px-3 py-[6px] text-xs capitalize font-semibold rounded-[6px] w-2/3 mx-auto text-center ${info.getValue() === "paid" ? "bg-[#E7F9DE] border border-[rgba(52,179,16,0.44)]" :
                    info.getValue() === "unpaid" ? "bg-[#FCEAEB] border border-[#F3ADAF]" :
                        info.getValue() === "overdue" ? "bg-[#FCFBEA] border border-[rgba(230,144,0,0.5)]" : "bg-gray-100 text-gray-700"
                    }`}>
                    {info.getValue()}
                </div>
            )
        }),
        columnHelper.accessor("total", { header: () => "Total (€)", cell: (info) => <span className="text-[#363B54]">{info.getValue()}</span> }),
        columnHelper.accessor("id", {
            header: () => "Action", cell: () =>
            (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="text-[#071431] text-xl font-medium cursor-pointer">...</button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent >
                        <DropdownMenuLabel>
                            <button className="text-black hover:bg-[#004D3F] w-full cursor-pointer hover:text-white py-2 px-3 rounded-3xl">View Details</button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <button className="bg-white hover:bg-[#004D3F] hover:text-white text-black w-full cursor-pointer py-2 px-3 rounded-3xl">Edit</button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <button className="bg-white w-full cursor-pointer text-red-500 hover:bg-red-500 hover:text-white py-2 px-3 rounded-3xl">Delete</button>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        })
    ];

    const table = useReactTable({
        data: currentPageData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const filterOptions: Array<"Filter" | "Last Week" | "Last 30 Days" | "Last 6 Months" | "Last Year"> =
        ["Filter", "Last Week", "Last 30 Days", "Last 6 Months", "Last Year"];

    return (
        <div className="w-full">
            {/* Filters + Search */}
            <div className="flex justify-between items-center mb-10">
                <div className="relative inline-flex p-1 bg-[#FAFAFA] border border-[#E3E8EF] rounded-lg overflow-hidden shadow-sm">
                    <div
                        className="absolute top-0 left-0 h-full w-1/4 bg-[#004D3F] rounded-md transition-transform duration-300 ease-in-out"
                        style={{ transform: getSliderTransform() }}
                    />
                    {["All", "Paid", "Unpaid", "Overdue"].map((cycle) => (
                        <button
                            key={cycle}
                            className={`w-24 py-2 text-sm font-semibold rounded-md z-10 transition-colors cursor-pointer ${billingCycle === cycle ? "text-white" : "text-gray-600 hover:text-[#004D3F]"}`}
                            onClick={() => setBillingCycle(cycle as typeof billingCycle)}
                        >
                            {cycle}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-lg overflow-hidden max-w-[350px] w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <div className="relative w-72">
                        <button
                            className="px-4 py-2 border border-gray-300 rounded-md text-left bg-white flex justify-end gap-2 items-center shadow-sm"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>{filterCycle}</span>
                            <svg className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isOpen && (
                            <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
                                {filterOptions.map((option) => (
                                    <li
                                        key={option}
                                        className="px-4 py-2 hover:bg-[#004D3F] hover:text-white cursor-pointer transition"
                                        onClick={() => {
                                            setFilterCycle(option);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
                <div className="overflow-x-auto">
                    <table className="table-fixed w-full text-sm text-left">
                        <thead className="bg-[#E7F9DE] border-b border-gray-200 text-[#101115] text-lg font-semibold">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="px-6 py-4 font-semibold tracking-wide truncate text-center">
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {currentPageData.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-8 text-gray-500">
                                        No invoices found for "{billingCycle}" status
                                    </td>
                                </tr>
                            ) : (
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className="hover:bg-[#F1F5F4] transition duration-200 text-center">
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="px-6 py-4 whitespace-nowrap truncate">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-[#6B7271] text-[12px]">Showing
                        <select className="bg-[#ECF4E9] border-none mx-2 px-3 py-2 rounded-md cursor-pointer" value={currentPageData.length} onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setDataPerPage(value);
                        }
                        }>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select> out of {filteredData?.length}</h2>
                </div>
                {/* Pagination */}
                <Pagination
                    data={filteredData}
                    dataPerPage={dataPerPage}
                    renderItem={handlePageData}
                />
            </div>
        </div>
    );
};

export default InvoiceDataTab;