import SectionHeader from "@/common/SectionHeader";
import Title from "@/common/Title";
import { getAllBlog } from "@/services/blog/blog";
import Image from "next/image";
import RightArrowSvg from "@/assets/images/right arrow.svg"

type TBlog = {
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
}


const BlogSection = async () => {

    const result = await getAllBlog();
    if (result instanceof Error) {
        return <div className="text-red-500">Failed to load blogs: {result.message}</div>;
    }
    const blogs: TBlog[] = result;
    return (
        <div className="mt-[135px]">
            <SectionHeader title="Blog" main_title="Insights, Tips & Updates to Keep You Ahead" description="Stay informed with expert advice, tax updates, and financial strategies to help you make smarter decisions for your business and personal finances." />
            <div className="flex xl:flex-row flex-col gap-5 mt-12">
                <div className="flex-1">
                    {blogs.slice(0, 1).map((blog: TBlog, index: number) => (
                        <div key={index} className="md:p-5 p-3 bg-[#FBFBF] border border-[#E5E5E5] rounded-3xl">
                            <Image className="w-full md:h-full h-[200px] rounded-3xl mb-8" src={blog?.thumbnail} alt={blog?.title} width={682} height={358} />
                            <div>
                                <Title level="title24" children={blog?.title} />
                                <p className="text-[#56595C] text-[18px] mt-4">{blog.introduction}</p>
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <p className="text-[#061929] text-lg">{blog?.date}</p>
                                <button className="flex items-center justify-center gap-2 text-[#004D3F] font-medium text-xl cursor-pointer">
                                    Learn More
                                    <Image src={RightArrowSvg} alt="right arrow svg" width={16} height={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex xl:flex-col lg:flex-row flex-col gap-5">
                    {blogs.slice(1, 3).map((blog: TBlog, index: number) => (
                        <div key={index} className="md:p-6 p-3 bg-[#FBFBF] border border-[#E5E5E5] rounded-3xl flex xl:flex-row lg:flex-col md:flex-row flex-col gap-6">
                            <Image className="md:h-full h-[200px] object-cover rounded-3xl" src={blog?.thumbnail} alt={blog?.title} width={256} height={271} />
                            <div>
                                <div>
                                    <Title level="title24" children={blog?.title} />
                                    <p className="text-[#56595C] text-[18px] mt-4">{blog.introduction}</p>
                                </div>

                                <div className="flex justify-between items-center mt-10">
                                    <p className="text-[#061929] text-lg">{blog?.date}</p>
                                    <button className="flex items-center justify-center gap-2 text-[#004D3F] font-medium text-xl cursor-pointer">
                                        Learn More
                                        <Image src={RightArrowSvg} alt="right arrow svg" width={16} height={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;