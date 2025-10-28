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
import {
  CopyIcon,
  CrossIcon,
  DeleteIcon,
  DownloadIcon,
  FolderIcon,
  MoveRightIcon,
} from "@/Components/SvgContainer/SvgContainer";
import UploadFile from "@/app/dashboard/documents/upload-file/page";
import { TFile } from "@/Types/documents/documents";

const columnHelper = createColumnHelper<TFile>();

const MyFileTable = ({
  fileData,
  height = "350",
  fileName,
}: {
  fileData: TFile[];
  height?: string;
  fileName?: string;
}) => {
  const [data] = React.useState<TFile[]>(() => [...fileData]);
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [currentData, setCurrentData] = React.useState<TFile[]>([...fileData]);

  const handleFolderDelete = () => {
    const newData = currentData.filter(
      (item) => !selectedRows.includes(item.id as number)
    );
    setSelectedRows([]);
    setCurrentData(newData);
  };

  const headerCheckboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate =
        selectedRows.length > 0 && selectedRows.length < data.length;
    }
  }, [selectedRows, data.length]);

  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
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
          <span className="hidden sm:inline">Name</span>
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
            <div className="relative min-w-[30px]">
              <Image src={LabelImg} alt="file-type" width={30} height={25} />
              <p className="absolute text-[7px] bottom-1 left-1 text-[#191919] font-bold">
                {row?.file_type}
              </p>
            </div>
            <span className="truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">
              {row.name}
            </span>
          </div>
        );
      },
    }),
    columnHelper.accessor("modified", {
      header: () => "Modified",
      cell: (info) => <span className="text-sm">{info.getValue() as string}</span>,
    }),
    columnHelper.accessor("file_size", {
      header: () => "File Size",
      cell: (info) => <div className="text-sm">{info.getValue() as string}</div>,
    }),
    columnHelper.accessor("sharing", {
      header: () => "Sharing",
      cell: (info) => (
        <div className="text-[#191919] font-semibold text-sm sm:text-base">
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
    <div className="w-full overflow-hidden">
      {fileData?.length ? (
        <div className="sm:bg-[#FBFBFB] rounded-2xl sm:rounded-3xl  sm:p-6 md:p-8 mt-6 sm:mt-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div className="flex items-center gap-2 text-[#191919] text-lg sm:text-[18px] font-medium">
              <FolderIcon /> <h2>{fileName ? `${fileName}` : "My Files"}</h2>
            </div>
            <div className="flex items-center border pl-3 sm:pl-4 gap-2 border-gray-500/30 h-[42px] sm:h-[46px] rounded-lg overflow-hidden max-w-full sm:max-w-[350px] w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="#6B7280"
              >
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full text-sm text-gray-500 placeholder-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Selected Row Actions */}
          {selectedRows.length > 0 && (
            <div className="bg-[#E7F9DE] rounded-lg px-4 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-6 mt-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <h2 className="text-[#191919] text-sm sm:text-[14px] font-semibold flex items-center gap-3">
                  <span
                    onClick={() => setSelectedRows([])}
                    className="cursor-pointer"
                  >
                    <CrossIcon />
                  </span>
                  {selectedRows.length} Folder
                  {selectedRows.length > 1 ? "s" : ""} selected
                </h2>
                <div className="flex flex-wrap gap-4">
                  <button className="text-sm hover:text-[#004D3F] flex items-center gap-2 transition">
                    <MoveRightIcon /> Move
                  </button>
                  <button className="text-sm hover:text-[#004D3F] flex items-center gap-2 transition">
                    <CopyIcon /> Copy
                  </button>
                  <button
                    onClick={() => handleFolderDelete()}
                    className="text-sm text-red-600 hover:text-red-700 flex items-center gap-2 transition"
                  >
                    <DeleteIcon /> Delete
                  </button>
                  <button className="text-sm hover:text-[#004D3F] flex items-center gap-2 transition">
                    <DownloadIcon /> Download
                  </button>
                </div>
              </div>
            </div>
          )}

{/* Table Wrapper */}
<div
  style={{ maxHeight: `${height}px` }}
  className="w-full overflow-x-auto overflow-y-auto border border-[#E5E5E5] rounded-2xl custom-scroll"
>
  <table className="min-w-[600px] w-full border-collapse">
    <thead className="uppercase text-[#191919] sticky top-0 bg-[#FBFBFB] z-10 text-xs sm:text-base">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header, index) => (
            <th
              key={header.id}
              style={{ width: columnWidths[index] }}
              className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-left whitespace-nowrap"
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

    <tbody className="text-sm text-gray-700">
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="border-b border-[#E5E5E5] hover:bg-[#EFEFEF] transition duration-300"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-left whitespace-nowrap"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
      ) : (
        <div className="my-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-[#191919] text-lg sm:text-[18px] font-medium">
              <FolderIcon /> <h2>{fileName ? `${fileName}` : "My Files"}</h2>
            </div>
            <div className="flex items-center border pl-3 sm:pl-4 gap-2 border-gray-500/30 h-[42px] sm:h-[46px] rounded-lg overflow-hidden max-w-full sm:max-w-[350px] w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="#6B7280"
              >
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full text-sm text-gray-500 placeholder-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <UploadFile />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFileTable;
