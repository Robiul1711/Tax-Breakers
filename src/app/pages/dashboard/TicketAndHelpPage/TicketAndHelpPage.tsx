"use client"
import Pagination from '@/Shared/Pagination';
import { TTickets } from '@/Types'
import { useCallback, useState } from 'react';
import AllTickets from '../AllTickets/AllTickets';
import CreateTicketButton from '../AllTickets/CreateTicketButton/CreateTicketButton';


const TicketAndHelpPage = ({ ticketData }: { ticketData: TTickets[] }) => {



  const [currentPageData, setCurrentPageData] = useState(ticketData);


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

      <div className="mt-10">
        <Pagination
          data={ticketData}
          dataPerPage={4}
          renderItem={handlePageData}
        />
      </div>
    </div>
  )
}

export default TicketAndHelpPage