"use client"

import Title from "@/common/Title";
import { getAllBlog } from "@/services/blog/blog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import RightArrowSvg from "@/assets/images/right arrow.svg";
import { useRouter } from "next/navigation";

type TBlog = {
    id: number,
    thumbnail: string;
    title: string;
    source: string;
    date: string;
    read_time: string;
    introduction: string;
    trends: {
        trend_name: string;
        summary: string;
    }[];
    conclusion: string;
};

const BlogCard = () => {
    const [blogs, setBlogs] = useState<TBlog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllBlog();
            if (!(result instanceof Error)) setBlogs(result);
        };
        fetchData();
    }, []);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    return (
        <div className="mt-[520px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentBlogs.map((blog, index) => (
                    <div
                        key={index}
                        className="p-5 border border-[#E5E5E5] bg-[#FBFBFB] rounded-3xl"
                    >
                        <Image
                            className="w-full h-[358px] rounded-3xl mb-8 object-cover"
                            src={blog.thumbnail}
                            alt={blog.title}
                            width={429}
                            height={271}
                        />
                        <div>
                            <Title level="title24">{blog.title}</Title>
                            <p className="text-[#56595C] text-[18px] mt-4">
                                {blog.introduction}
                            </p>
                        </div>

                        <div className="flex justify-between items-center mt-8">
                            <p className="text-[#061929] text-lg">{blog.date}</p>
                            <button onClick={ () => router.push(`/blogs/${blog.id}`)} className="flex items-center justify-center gap-2 text-[#004D3F] font-medium text-xl cursor-pointer">
                                Learn More
                                <Image
                                    src={RightArrowSvg}
                                    alt="right arrow svg"
                                    width={16}
                                    height={20}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-between items-center gap-4 my-16">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-5 py-2 rounded-lg border border-gray-300 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    Previous
                </button>

                <p className="text-lg font-medium">
                    Page {currentPage} of {totalPages}
                </p>

                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-5 py-2 rounded-lg border border-gray-300 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
