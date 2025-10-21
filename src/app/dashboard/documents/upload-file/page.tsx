"use client";
import CommonButton from "@/common/CommonButton";
import { DownloadBoxIcon, FolderIcon } from "@/Components/SvgContainer/SvgContainer";
import { useRef, useState } from "react";


const UploadFile = () => {
    const fileInputRef = useRef<HTMLInputElement>(null!);
    const [file, setFile] = useState(null as FileList | null);

    const handleClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-[60vh] mx-8">
                <h2 className="text-center text-[#0E1109] text-[32px] font-semibold mb-11"> Upload Documents</h2>
                <div className="border-2 border-dashed border-[#004D3F] bg-[#FBFBFB] rounded-3xl w-full h-[300px] flex flex-col justify-center items-center mx-auto">
                    <DownloadBoxIcon />
                    <p className="mt-3">Drag & drop or click to upload  Documents</p>
                    <h2 className="font-semibold text-2xl mt-3 mb-6">Or</h2>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={(e) => setFile(e.target.files as any)} // You can handle file here
                    />

                    {/* Your Button */}
                    <CommonButton
                        variant="primary"
                        className="!text-[18px] !font-semibold hover:!text-[#004D3F] !border-[#004D3F] !flex !items-center gap-[10px]"
                        onClick={handleClick}
                    >
                        Browse File
                    </CommonButton>
                </div>
            </div>
            <div >
                {file &&
                    <div className="bg-[#E7F9DE] inline-block p-3 rounded-lg mx-8">
                       <div className="flex items-center justify-center gap-2">
                        <FolderIcon/> {file[0].name}
                       </div>
                    </div>}
            </div>
        </div>
    );
};

export default UploadFile;