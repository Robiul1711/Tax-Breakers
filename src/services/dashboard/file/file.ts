"use server"
import fileData from '../../../../public/file.json';

export const getAllFile = async () => {
    try {
        return fileData;
    } catch (error: any) {
        return Error(error)
    }
}
export const getSingleFile = async (name: string) => {
    try {
        const files = fileData;
        const res = files?.find(item => item?.folder_name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return res;
    } catch (error: any) {
        return Error(error)
    }
}