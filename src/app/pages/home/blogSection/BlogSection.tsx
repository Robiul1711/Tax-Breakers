import SectionHeader from "@/common/SectionHeader";
import Title from "@/common/Title";
import { getAllBlog } from "@/services/blog/blog";
import Image from "next/image";
import Link from "next/link";
import { RightArrow } from "@/Components/SvgContainer/SvgContainer";

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
}


const BlogSection = async () => {

    const result = await getAllBlog();
    if (result instanceof Error) {
        return <div className="text-red-500">Failed to load blogs: {result.message}</div>;
    }
    const blogs: TBlog[] = result;
    return (
        <div className="my-18 lg:my-36">
            <SectionHeader title="Blog" main_title="Insights, Tips & Updates to Keep You Ahead" description="Stay informed with expert advice, tax updates, and financial strategies to help you make smarter decisions for your business and personal finances." />
            <div className="flex xl:flex-row flex-col gap-5 mt-12 h-full">
                <div className="flex-1">
                    {blogs.slice(0, 1).map((blog: TBlog, index: number) => (
                        <div key={index} className="md:p-5 p-3 bg-[#FBFBF] border border-[#E5E5E5] rounded-3xl h-full">
                            <div>
                                <Image className="w-full lg:h-full md:h-[250px] h-[200px] rounded-3xl mb-8 object-cover" src={blog?.thumbnail} alt={blog?.title} width={682} height={358} />
                            <div>
                                <Title level="title24" children={blog?.title} />
                                <p className="text-[#56595C] md:text-[18px] text-sm mt-4 line-clamp-2">{blog.introduction}</p>
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <p className="text-[#061929] text-lg">{blog?.date}</p>
                                <Link href={`/blogs/${blog?.id}`} className="flex items-center justify-center gap-2 text-[#004D3F] font-medium text-[18px] md:text-xl cursor-pointer">
                                    Learn More
                                    <RightArrow />
                                </Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex xl:flex-col lg:flex-row flex-col gap-5">
                    {blogs.slice(1, 3).map((blog: TBlog, index: number) => (
                        <div key={index} className="lg:p-6 md:p-5 p-3 bg-[#FBFBF] border border-[#E5E5E5] rounded-3xl flex xl:flex-row lg:flex-col md:flex-row flex-col gap-6">
                            <Image className="2xl:w-[250px] xl:w-[200px] lg:w-full md:w-[250px] w-full  2xl:h-[255px] lg:h-[250px] h-[200px]  object-cover rounded-3xl" src={blog?.thumbnail} alt={blog?.title} width={256} height={271} />
                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <Title className="line-clamp-2" level="title24" children={blog?.title} />
                                    <p className="text-[#56595C] md:text-[18px] text-sm mt-4 line-clamp-2">{blog.introduction}</p>
                                </div>

                                <div className="flex justify-between items-center mt-8">
                                    <p className="text-[#061929] text-lg">{blog?.date}</p>
                                    <Link href={`/blogs/${blog?.id}`} className="flex items-center justify-center gap-2 text-[#004D3F] font-medium text-[18px] md:text-xl cursor-pointer">
                                        Learn More
                                        <RightArrow />
                                    </Link>
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