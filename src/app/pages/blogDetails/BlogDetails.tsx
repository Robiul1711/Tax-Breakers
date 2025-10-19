'use client';

import BannerImg from "@/assets/images/banner3.png";
import PageHeading from "@/Components/PageHeading/PageHeading";
import { RightArrow } from "@/Components/SvgContainer/SvgContainer";
import { getAllBlog } from "@/services/blog/blog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


type TBlog = {
    id: number;
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

const BlogDetails = ({ id }: { id: string }) => {
    const [blog, setBlog] = useState<TBlog | null>(null);
    const [allBlogs, setAllBlogs] = useState<TBlog[]>([]);
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllBlog();
            console.log(result);
            if (!(result instanceof Error)) {
                const selectedBlog = result.find((b: TBlog) => (b.id) === Number(id));
                setBlog(selectedBlog ?? null);

                const otherBlogs = result.filter((b: TBlog) => (b.id) !== Number(id)).slice(0, 2);
                setAllBlogs(otherBlogs);
            }
        };
        fetchData();
    }, [id]);

    if (!blog) {
        return <p className="text-center mt-20 text-gray-500">Loading</p>;
    }

    return (
        <div className="mb-24">
            <div
                style={{
                    backgroundImage: `url(${BannerImg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                }}
                className="lg:m-8 m-4 rounded-[24px] pt-36 pb-96 relative"
            >
                <div className="max-w-[1920px] px-48 text-left">
                    <PageHeading
                        title="Blog Details"
                        breadcrumb={[
                            { label: "Blogs", link: "/blogs" },
                            { label: blog?.title, active: true },
                        ]}
                    />
                    <h2 className="text-[#151515] text-[64px] max-w-[1080px] leading-tight">
                        {blog.title}
                    </h2>
                    <p className="text-[#677489] leading-8 text-xl font-medium mt-6">
                        {blog.introduction}
                    </p>
                    <div className="absolute -bottom-110 left-72">
                        <Image src={blog.thumbnail} height={749} width={1280} alt="blog-bg" className="rounded-2xl h-[749px] object-cover" />
                    </div>
                </div>

            </div>

            <div className="mt-130 flex section-padding-x gap-16">
                {/* Left Column: Trends & Conclusion */}
                <div className="w-[70%]">
                    <div className="space-y-8">
                        {blog.trends.map((trend, idx) => (
                            <div key={idx}>
                                <h1 className="text-3xl mb-3">{trend.trend_name}</h1>
                                <p className="text-[#677489] leading-7">{trend.summary}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#FBFBFB] p-6 rounded-2xl mt-10">
                        <p className="text-[#68717E] leading-7">{blog.conclusion}</p>

                    </div>
                </div>

                {/* Right Column: More Data */}
                <div className="w-[30%] space-y-6">
                    <h1 className="text-3xl">More from our blogs</h1>
                    {allBlogs.map((b) => (
                        <div key={b.id} className="p-5 border border-[#E5E5E5] bg-[#FBFBFB] rounded-3xl">
                            <Image
                                className="w-full h-[320px] rounded-3xl mb-4 object-cover"
                                src={b.thumbnail}
                                alt={b.title}
                                width={429}
                                height={320}
                            />
                            <h4 className="font-semibold text-lg mb-2">{b.title}</h4>
                            <p className="text-[#56595C] text-sm line-clamp-3">{b.introduction}</p>
                            <div className="flex justify-between items-center mt-4 text-sm text-[#004D3F] font-medium">
                                <span>{b.date}</span>
                                <button className="hover:cursor-pointer flex gap-2" onClick={() => router.push(`/blogs/${b.id}`)}><span>Read More </span>
                                    <RightArrow />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;