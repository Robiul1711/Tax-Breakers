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

    // Update current page if data changes and current page is out of range
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages || 1);
        }
    }, [data, totalPages, currentPage]);

    // Call renderItem with current page data
    useEffect(() => {
        const start = (currentPage - 1) * dataPerPage;
        const end = start + dataPerPage;
        const pageData = data.slice(start, end);
        renderItem(pageData);
    }, [currentPage, data, dataPerPage, renderItem]);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="my-8">
            <div className="flex items-center justify-end gap-2">
                <button disabled={currentPage === 1 } onClick={handlePrev} type="button" aria-label="Previous" className={`mr-4 cursor-pointer  hover:bg-[#004D3F] hover:text-white text-[#004D3F] w-8 h-8 rounded-md flex items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L2 9.24242L11 17" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="flex gap-2 text-gray-500 text-sm md:text-base">
                    {pages.map((page) => (
                        <button
                            key={page}
                            type="button"
                            onClick={() => setCurrentPage(page)}
                            className={`flex cursor-pointer items-center justify-center active:scale-95 w-8 h-8 text-[12px] aspect-square rounded-md transition-all ${
                                page === currentPage
                                    ? "bg-[#004D3F] text-white"
                                    : "bg-[#ECF4E9] hover:bg-[#004D3F] hover:text-white text-[#004D3F]"
                            }`}
                        >
                           {page}
                        </button>
                    ))}
                </div>
                <button disabled={currentPage === totalPages } onClick={handleNext} type="button" aria-label="Next" className={`ml-4 cursor-pointer  hover:bg-[#004D3F] hover:text-white text-[#004D3F] w-8 h-8 rounded-md flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L10 9.24242L1 17" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;