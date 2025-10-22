"use client"
import Pagination from '@/Shared/Pagination';
import { TTickets } from '@/Types'
import { useCallback, useState } from 'react';
import AllTickets from './AllTickets/AllTickets';
import CreateTicketButton from './CreateTicketButton/CreateTicketButton';


const TicketAndHelpPage = ({ ticketData }: { ticketData: TTickets[] }) => {



  const [currentPageData, setCurrentPageData] = useState(ticketData);
  const [dataPerPage ,setDataPerPage] = useState(5)


  const handlePageData = useCallback((pageData: TTickets[]) => {
    setCurrentPageData(pageData)
  }, [])

  return (
    <div>
      <div className='bg-[#FBFBFB] p-8 rounded-2xl'>
        <div className=' flex justify-between items-center'>
          <div>
            <h1 className='text-4xl font-semibold mb-2'>Support & Ticketing</h1>
            <p className='text-[#677489] tracking-wider'>Handle customer requests and keep an eye on how things are getting resolved</p>
          </div>
          <div>
            <CreateTicketButton />
          </div>
        </div>
      </div>

      {/* table */}
      <div className='mt-10'>
        <AllTickets ticketData={currentPageData} />
      </div>

      <div className='flex justify-between items-center'>
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

        <div className="mt-10">
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