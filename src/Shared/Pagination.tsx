"use client";
import { useState, useEffect } from "react";

interface PaginationProps<T> {
    data: T[];
    dataPerPage: number;
    renderItem: (pageData: T[]) => void;
}

const Pagination = <T,>({ data, dataPerPage, renderItem }: PaginationProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / dataPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages || 1);
        }
    }, [data, totalPages, currentPage]);

    useEffect(() => {
        const start = (currentPage - 1) * dataPerPage;
        const end = start + dataPerPage;
        renderItem(data.slice(start, end));
    }, [currentPage, data, dataPerPage, renderItem]);

    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const getVisiblePages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            // Show all pages if few pages
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // Always show first page
            pages.push(1);

            // Show left ellipsis if currentPage > 3
            if (currentPage > 3) pages.push("...");

            // Pages around currentPage
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            // Show right ellipsis if currentPage < totalPages - 2
            if (currentPage < totalPages - 2) pages.push("...");

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="my-8">
            <div className="flex items-center justify-end gap-2">
                {/* Prev Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrev}
                    type="button"
                    aria-label="Previous"
                    className={`mr-4 hover:bg-[#004D3F] hover:text-white text-[#004D3F] w-8 h-8 rounded-md flex items-center justify-center ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L2 9.24242L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Page Numbers */}
                <div className="flex gap-2 text-gray-500 text-sm md:text-base">
                    {visiblePages.map((page, index) => (
                        typeof page === "number" ? (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentPage(page)}
                                className={`flex cursor-pointer items-center justify-center active:scale-95 w-8 h-8 text-[12px] aspect-square rounded-md transition-all ${page === currentPage
                                        ? "bg-[#004D3F] text-white"
                                        : "bg-[#ECF4E9] hover:bg-[#004D3F] hover:text-white text-[#004D3F]"
                                    }`}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className="w-8 h-8 flex items-center justify-center text-[#004D3F]">
                                {page}
                            </span>
                        )
                    ))}
                </div>

                {/* Next Button */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNext}
                    type="button"
                    aria-label="Next"
                    className={`ml-4 hover:bg-[#004D3F] hover:text-white text-[#004D3F] w-8 h-8 rounded-md flex items-center justify-center ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L10 9.24242L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
