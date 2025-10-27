"use client"
import Pagination from '@/Shared/Pagination';
import { TTickets } from '@/Types'
import { useCallback, useState } from 'react';
import AllTickets from './AllTickets/AllTickets';
import CreateTicketButton from './CreateTicketButton/CreateTicketButton';
import Title from '@/common/Title';


const TicketAndHelpPage = ({ ticketData }: { ticketData: TTickets[] }) => {

  const [currentPageData, setCurrentPageData] = useState(ticketData);
  const [dataPerPage ,setDataPerPage] = useState(5)


  const handlePageData = useCallback((pageData: TTickets[]) => {
    setCurrentPageData(pageData)
  }, [])

  return (
    <div className='xl:mr-8'>
      <div className='bg-[#FBFBFB] rounded-3xl lg:p-8 p-4'>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="lg:w-2/3">
            <Title level="title32" children="Support & Ticketing"/>
            <p className='text-[#677489] lg:text-[18px] md:text-base text-sm mt-4'>Handle customer requests and keep an eye on how things are getting resolved</p>
          </div>
          <div>
            <CreateTicketButton />
          </div>
        </div>
      </div>

      {/* table */}
      <div className='mt-10 '>
        <AllTickets ticketData={currentPageData} />
      </div>

      <div className='flex flex-col justify-between items-center mt-10'>
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
            </select> out of {ticketData?.length}</h2>
        </div>

        <div >
          <Pagination
            data={ticketData}
            dataPerPage={dataPerPage}
            renderItem={handlePageData}
          />
        </div>
      </div>
    </div>
  )
}

export default TicketAndHelpPage