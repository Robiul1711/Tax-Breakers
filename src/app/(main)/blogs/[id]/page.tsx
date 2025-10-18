import React from 'react';

const BlogDetails = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            <h1>blog details page {id}</h1>
        </div>
    );
};

export default BlogDetails;