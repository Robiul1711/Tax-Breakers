import AllTickets from '@/app/pages/dashboard/AllTickets/AllTickets'
import CreateTicketButton from '@/app/pages/dashboard/AllTickets/CreateTicketButton/CreateTicketButton'
import { getAllTickets } from '@/services/dashboard/ticket/ticket'
import { TTickets } from '@/Types'
import React from 'react'


const DashboardTicketingPage = async () => {

  const data = await getAllTickets()
  const ticketData: TTickets[] = data instanceof Error ? [] : data;
  
  return (
    <div>
      <div className='bg-[#FBFBFB] p-8 rounded-2xl'>
        <div className=' flex justify-between items-center'>
          <div>
            <h1 className='text-4xl font-semibold mb-2'>Support & Ticketing</h1>
            <p className='text-[#677489] tracking-wider'>Handle customer requests and keep an eye on how things are getting resolved</p>
          </div>
          <div>
            <CreateTicketButton/>
          </div>
        </div>
      </div>

      {/* table */}
      <div className='mt-10'>
        <AllTickets ticketData={ticketData} />
      </div>
    </div>
  )
}

export default DashboardTicketingPage