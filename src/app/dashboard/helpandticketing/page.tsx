import AllTickets from '@/app/pages/dashboard/AllTickets/AllTickets'
import CommonButton from '@/common/CommonButton'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const page = () => {
  return (
    <div>
      <div className='bg-[#FBFBFB] p-8 rounded-2xl'>
        <div className=' flex justify-between items-center'>
          <div>
            <h1 className='text-4xl font-semibold mb-2'>Support & Ticketing</h1>
            <p className='text-[#677489] tracking-wider'>Handle customer requests and keep an eye on how things are getting resolved</p>
          </div>
          <div>
            <CommonButton className='flex'>
              <FiPlus className='h-6 w-6' />
              <span>Create Ticket</span>
            </CommonButton>
          </div>
        </div>
      </div>

      {/* table */}
      <div className='mt-10'>
          <AllTickets/>
      </div>
    </div>
  )
}

export default page