import CommonButton from "@/common/CommonButton";
import { FolderIcon, UploadFileIcon } from "@/Components/SvgContainer/SvgContainer";
import { getAllFolder } from "@/services/dashboard/folder/folder";
import GreenFolderImg from "@/assets/images/green_folder_icon.png"
import Image from "next/image";
import MyFileTable from "@/app/pages/dashboard/myFileTable/MyFileTable";
import CreateNewFolderModal from "@/app/pages/dashboard/createNewFolderModal/CreateNewFolderModal";
import Link from "next/link";
import { TFile } from "@/Types/documents/documents";
import Title from "@/common/Title";
// import { TFile } from "@/Types";

type IFolder = { id: number,name: string; size: string; items: string; last_opened: string; color_style: string; }

const fileData: TFile[] = [
    { id: 1, name: "Marketing_Assets.zip", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "zip" },
    { id: 2, name: "Annual_Report_2024.pdf", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "pdf" },
    { id: 3, name: "Logo_Variant_HD.png", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "png" },
    { id: 4, name: "Q1-Financials.xlsx", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "xlsx" },
    { id: 5, name: "Company_Intro.ppt", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "ppt" },
    { id: 6, name: "Onboarding_Guide.txt", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "txt" },
    { id: 7, name: "Summer_Ad_Reel.mp4", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "mp4" },
    { id: 8, name: "Marketing_Assets.zip", modified: "Apr 22, 2025 by Iskandar Prah.", file_size: "1.5 GB", sharing: "Shared", file_type: "zip" },
];


const DashboardDocumentPage = async () => {
    const result = await getAllFolder();
    const folders: IFolder[] = result instanceof Error ? [] : result;
    return (
        <div className="xl:mr-8">
            <div className="sm:bg-[#FBFBFB] rounded-3xl lg:p-8 sm:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 sm:mb-14">
                    <div className="lg:w-1/3">
                        <Title level="title32" children="Documents"/>
                        <p className="text-[#677489] lg:text-[18px] md:text-base text-sm mt-4">Access and organize all your personal and work files in one place.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href={'/dashboard/documents/upload-file'} ><CommonButton  variant="secondary" className="md:text-[18px]! flex! items-center! gap-2.5"><UploadFileIcon /> Upload File</CommonButton></Link>
                        <div >
                            <CreateNewFolderModal />
                        </div>
                    </div>
                </div>
                
                <div >
                    <div className="flex items-center gap-2 text-[#191919] text-[18px] font-medium">
                        <FolderIcon /> <h2>My Folder</h2>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-6 mt-6 lg:p-8 sm:p-4 rounded-3xl bg-[#FFF]">
                        {folders.map((folder, index) => (
                        <Link href={`/dashboard/documents/${folder?.name.toLowerCase().split(" ").join("-")}`} key={index} className="mt-4 text-black hover:text-[#004d3f]">
                                <div className="relative">
                                    <Image src={GreenFolderImg} alt="Folder Icon" width={150} height={150} />
                                    <div className="absolute bottom-2 md:left-4 left-4 sm:left-6 flex justify-center text-[#FFF] md:text-base text-sm font-medium items-center gap-6">
                                        <p>{folder?.size}</p>
                                        <p>{folder?.items}</p>
                                    </div>
                                </div>
                                <h3 className="mt-4 font-medium text-xs sm:text-sm md:text-base">
                                    {
                                        folder?.name.length > 12
                                            ? folder?.name.slice(0, 12) + "..."
                                            : folder?.name
                                    }
                                </h3>
                                <p className="text-[#7F7F7F] md:text-base text-xs sm:text-sm  mt-1">{folder.last_opened}</p>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            <div >
              <MyFileTable fileData={fileData} height={'350'}/>
            </div>
        </div>
    );
};

export default DashboardDocumentPage;
