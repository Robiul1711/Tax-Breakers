import CommonButton from "@/common/CommonButton";
import { CreateNewFolderIcon, FolderIcon, UploadFileIcon } from "@/Components/SvgContainer/SvgContainer";
import { getAllFolder } from "@/services/dashboard/folder/folder";
import GreenFolderImg from "@/assets/images/green_folder_icon.png"
import Image from "next/image";
import MyFileTable from "@/app/pages/dashboard/myFileTable/MyFileTable";
type IFolder = { name: string; size: string; items: string; last_opened: string; color_style: string; }


const DashboardDocumentPage = async () => {
    const result = await getAllFolder();
    const folders: IFolder[] = result instanceof Error ? [] : result;




    return (
        <div>
            <div className="bg-[#FBFBFB] rounded-3xl p-8">
                <div className="flex items-center justify-between mb-14">
                    <div>
                        <h1 className="text-[32px] font-semibold text-[#000]">Documents</h1>
                        <p className="text-[#677489] text-[18px] mt-4">Access and organize all your personal and work files in one place.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <CommonButton variant="secondary" className="!text-[18px] hover:!text-white !font-semibold !text-[#004D3F] !border-[#004D3F] !flex !items-center gap-[10px]"><UploadFileIcon /> Upload File</CommonButton>
                        <CommonButton variant="primary" className="!text-[18px] !font-semibold hover:!text-[#004D3F] !border-[#004D3F] !flex !items-center gap-[10px]"><CreateNewFolderIcon /> Create New Folder</CommonButton>
                    </div>
                </div>
                {/* Add your document listing and management UI here */}
                <div >
                    <div className="flex items-center gap-2 text-[#191919] text-[18px] font-medium">
                        <FolderIcon /> <h2>My Folder</h2>
                    </div>
                    <div className="grid grid-cols-8 gap-8 mt-6">
                        {folders.map((folder, index) => (
                            <div key={index} className="mt-4">
                                <div className="relative">
                                    <Image src={GreenFolderImg} alt="Folder Icon" width={150} height={150} />
                                    <div className="absolute bottom-2 left-4 flex justify-center text-[#FFF] font-medium items-center gap-6">
                                        <p>{folder?.size}</p>
                                        <p>{folder?.items}</p>
                                    </div>
                                </div>
                                <h3 className="mt-4 font-medium text-[#191919] text-[16px]">{folder.name}</h3>
                                <p className="text-[#7F7F7F] mt-1">{folder.last_opened}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="bg-[#FBFBFB] rounded-3xl p-8 mt-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-[#191919] text-[18px] font-medium">
                        <FolderIcon /> <h2>My Files</h2>
                    </div>
                    <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-lg overflow-hidden max-w-[350px] w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
                        />
                    </div>
                </div>

                <div>
                    <MyFileTable />
                </div>

            </div>
        </div>
    );
};

export default DashboardDocumentPage;