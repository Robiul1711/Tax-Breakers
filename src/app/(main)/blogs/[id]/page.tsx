import BlogDetails from "@/Components/auth/blogDetails/BlogDetails";

const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <BlogDetails id={id} />;
};

export default BlogDetailsPage;
