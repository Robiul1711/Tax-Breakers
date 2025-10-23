import CreateNewFolderModal from "@/app/pages/dashboard/createNewFolderModal/CreateNewFolderModal";
import MyFileTable from "@/app/pages/dashboard/myFileTable/MyFileTable";
import CommonButton from "@/common/CommonButton";
import { UploadFileIcon } from "@/Components/SvgContainer/SvgContainer";
import { getSingleFile } from "@/services/dashboard/file/file";
import { TDocumentFolder } from "@/Types";
import Link from "next/link";

const DashboardDocumentFolderDetailsPage = async ({ params }: { params: Promise<{ name: string }> }) => {
    const { name } = await params;
    const folderName = name.replace(/-/g, ' ');
    console.log(folderName);
    const folder = await getSingleFile(folderName)

    return (
        <div>
            {
                (folder as TDocumentFolder)?.files.length > 0 && <div className="bg-[#FBFBFB] rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-14">
                        <div>
                            <h1 className="text-[32px] font-semibold text-black">{(folder as TDocumentFolder)?.folder_name}</h1>
                            <p className="text-[#677489] text-[18px] mt-4">Access and organize all your personal and work files in one place.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href={'/dashboard/documents/upload-file'}><CommonButton variant="secondary" className="!text-[18px] hover:!text-white !font-semibold !text-[#004D3F] !border-[#004D3F] !flex !items-center gap-[10px]"><UploadFileIcon /> Upload File</CommonButton></Link>
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