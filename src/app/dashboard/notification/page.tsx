"use client"
import { NotificationIcon } from "@/Components/SvgContainer/SvgContainer";
import { notificationsData, TNotification } from "../layout";
import Title from "@/common/Title";
import PageHeading from "@/Components/PageHeading/PageHeading";
import { useCallback, useState } from "react";
import { SearchIcon } from "lucide-react";
import Pagination from "@/Shared/Pagination";
import DateRangePicker from "@/app/pages/dashboard/dateRangePicker/DateRangePicker";

const DashboardNotificationPage = () => {
    const [searchText, setSearchText] = useState('')
    const data = notificationsData;
    const [currentPageData, setCurrentPageData] = useState(data)
    const [dataPerPage, setDataPerPage] = useState(10)


    const handlePageData = useCallback((pageData: TNotification[]) => {
        setCurrentPageData(pageData);
    }, []);
    return (
        <div>
            <Title level="title24" children='Notification' />
            <PageHeading
                breadcrumb={[
                    { label: "Dashboard", link: "/dashboard" },
                    { label: 'Notification', active: true },
                ]}
            />

            <div className="bg-[#FBFBFB] px-6 py-8 rounded-3xl">
                <div className="flex justify-between items-center gap-8">
                    <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-[250px] w-full">
                        <SearchIcon color="#1A1C1E" />
                        <input
                            type="text"
                            placeholder="Search Notification"
                            className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <DateRangePicker />
                </div>

                <div className="flex flex-col gap-6 mt-8">
                    {
                        currentPageData.map((notification, index) => (
                            <div key={index} className="flex justify-between gap-6 items-start">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#ECF4E9] flex justify-center items-center">
                                        <NotificationIcon />
                                    </div>
                                    <div>
                                        <h2 className="text-[#1A1C1E] font-semibold">{notification?.title}</h2>
                                        <p className="text-[#6C7278] font-medium text-sm mt-1">{notification?.message}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2>{notification?.time}</h2>
                                    {
                                        notification?.status === "successful" && <p className="w-2 h-2 rounded-full bg-[#004D3F]"></p>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-[#6B7271] text-[12px]">Showing
                        <select className="bg-[#ECF4E9] border-none mx-2 px-3 py-2 rounded-md cursor-pointer" value={currentPageData.length} onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setDataPerPage(value);
                        }
                        }>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select> out of {data?.length}</h2>
                </div>
                {/* Pagination */}
                <Pagination
                    data={data}
                    dataPerPage={dataPerPage}
                    renderItem={handlePageData}
                />
            </div>
        </div>
    );
};

export default DashboardNotificationPage;