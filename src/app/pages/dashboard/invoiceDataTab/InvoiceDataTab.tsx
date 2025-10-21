"use client";
import { TInvoice } from "@/Types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const columnHelper = createColumnHelper<TInvoice>();

const InvoiceDataTab = ({ invoices }: { invoices: TInvoice[] }) => {
  const [billingCycle, setBillingCycle] = useState<
    "All" | "Paid" | "Unpaid" | "Overdue"
  >("All");

  const [data] = useState<TInvoice[]>(() => [...invoices]);
  const [currentData, setCurrentData] = useState<TInvoice[]>([...invoices]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const headerCheckboxRef = React.useRef<HTMLInputElement>(null);

  // ✅ Filter data dynamically
  useEffect(() => {
    if (billingCycle === "All") {
      setCurrentData(data);
    } else {
      const filtered = data.filter(
        (item) => item.status.toLowerCase() === billingCycle.toLowerCase()
      );
      setCurrentData(filtered);
    }
  }, [billingCycle, data]);

  // ✅ Slider transform
  const getSliderTransform = () => {
    switch (billingCycle) {
      case "All":
        return "translateX(0%)";
      case "Paid":
        return "translateX(100%)";
      case "Unpaid":
        return "translateX(200%)";
      case "Overdue":
        return "translateX(300%)";
      default:
        return "translateX(0%)";
    }
  };

  // ✅ Row selection
  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === currentData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentData.map((item) => item.id));
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
            checked={
              currentData.length > 0 &&
              selectedRows.length === currentData.length
            }
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
    columnHelper.accessor("date", {
      header: () => "Date",
      cell: (info) => (
        <span className="text-[#363B54]">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor("sender", {
      header: () => "Sender",
      cell: (info) => (
        <span className="text-[#363B54]">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor("recipient", {
      header: () => "Recipient",
      cell: (info) => (
        <span className="text-[#363B54]">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <div
          className={`px-3 py-[6px] text-xs capitalize font-semibold rounded-[6px] w-2/3 mx-auto text-center  ${
            info.getValue() === "paid"
              ? "bg-[#E7F9DE] border border-[rgba(52,179,16,0.44)]"
              : info.getValue() === "unpaid"
              ? "bg-[##FCEAEB] border border-[#F3ADAF]"
              : info.getValue() === "overdue"
              ? "bg-[#FCFBEA] border border-[rgba(230,144,0,0.5)]"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("total", {
      header: () => "Total (€)",
      cell: (info) => (
        <span className="text-[#363B54]">
          {info.getValue() as number}
        </span>
      ),
    }),
    columnHelper.accessor("id", {
      header: () => "Action",
      cell: () => (
        <div>
            <button className="text-[#071431] font-bold text-xl">...</button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: currentData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <div className="flex mb-10">
        <div className="relative inline-flex p-1 bg-[#FAFAFA] border border-[#E3E8EF] rounded-lg overflow-hidden shadow-sm">
          <div
            className="absolute top-0 left-0 h-full w-1/4 bg-[#004D3F] rounded-md transition-transform duration-300 ease-in-out"
            style={{ transform: getSliderTransform() }}
          ></div>

          {["All", "Paid", "Unpaid", "Overdue"].map((cycle) => (
            <button
              key={cycle}
              className={`w-24 py-2 text-sm font-semibold rounded-md z-10 transition-colors cursor-pointer ${
                billingCycle === cycle
                  ? "text-white"
                  : "text-gray-600 hover:text-[#004D3F]"
              }`}
              onClick={() => setBillingCycle(cycle as typeof billingCycle)}
            >
              {cycle}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="table-fixed w-full text-sm text-left">
            <thead className="bg-[#E7F9DE] border-b border-gray-200 text-[#101115] text-lg font-semibold">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-4 font-semibold tracking-wide truncate text-center"
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
            <tbody className="divide-y divide-gray-100 ">
              {currentData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center py-8 text-gray-500"
                  >
                    No invoices found for "{billingCycle}" status
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#F1F5F4] transition duration-200 text-center"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap truncate"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDataTab;