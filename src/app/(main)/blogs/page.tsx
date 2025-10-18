import Banner from '@/app/pages/blogs/banner/Banner';
import BlogCard from '@/app/pages/blogs/blogCard/BlogCard';
import React from 'react';

const page = () => {
    return (
        <div className='overflow-x-hidden'>
            <Banner/>
           <div className='section-padding-x'>
             <BlogCard/>
           </div>
        </div>
    );
};

export default page;