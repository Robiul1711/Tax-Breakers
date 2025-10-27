import CreateNewFolderModal from "@/app/pages/dashboard/createNewFolderModal/CreateNewFolderModal";
import MyFileTable from "@/app/pages/dashboard/myFileTable/MyFileTable";
import CommonButton from "@/common/CommonButton";
import Title from "@/common/Title";
import { UploadFileIcon } from "@/Components/SvgContainer/SvgContainer";
import { getSingleFile } from "@/services/dashboard/file/file";
import { TDocumentFolder } from "@/Types/documents/documents";
// import { TDocumentFolder } from "@/Types";
import Link from "next/link";

const DashboardDocumentFolderDetailsPage = async ({ params }: { params: Promise<{ name: string }> }) => {
    const { name } = await params;
    const folderName = name.replace(/-/g, ' ');
    const folder = await getSingleFile(folderName)

    return (
        <div>
            {
                (folder as TDocumentFolder)?.files.length > 0 && <div className="bg-[#FBFBFB] rounded-3xl lg:p-8 p-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                        <div className="lg:w-1/3">
                             <Title level="title32" children={(folder as TDocumentFolder)?.folder_name}/>
                            <p className="text-[#677489] lg:text-[18px] md:text-base text-sm mt-4">Access and organize all your personal and work files in one place.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href={'/dashboard/documents/upload-file'}><CommonButton variant="secondary" className="md:text-[18px]! flex! items-center! gap-2.5"><UploadFileIcon /> Upload File</CommonButton></Link>
                            <CreateNewFolderModal />
                        </div>
                    </div>
                </div>
            }
            <MyFileTable fileData={(folder as TDocumentFolder)?.files} height="700" fileName={(folder as TDocumentFolder)?.folder_name} />
        </div>
    );
};

export default DashboardDocumentFolderDetailsPage;