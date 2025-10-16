"use server"
import blogData from '../../../public/blog.json';

export const getAllBlog = async () => {
    try {
        return blogData;
    } catch (error: any) {
        return Error(error)
    }
}