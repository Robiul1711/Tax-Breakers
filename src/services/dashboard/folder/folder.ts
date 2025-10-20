"use server"
import folderData from '../../../../public/folder.json';

export const getAllFolder = async () => {
    try {
        return folderData;
    } catch (error: any) {
        return Error(error)
    }
}