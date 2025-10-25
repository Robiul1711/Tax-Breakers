import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { PDFIcon } from '@/common/DashboardSvg/DashSVG';

export default function MyAccount() {
  return (
    <div className="">
      
        {/* Header Section */}
        <div className="bg-[#FBFBFB] rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-lime-400 to-lime-300 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Ralph Franecki</h1>
                <p className="text-gray-500 mb-1">Dose Advocate, Writer</p>
                <p className="text-gray-500">5708 Common Lane</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-2 py-1 text-[#004D3F] border border-[#004D3F] rounded-md hover:bg-teal-50 transition-colors">
              <span>Edit</span>
              <FiEdit2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="bg-[#FBFBFB] rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
            <button className="flex items-center gap-2 px-2 py-1 text-[#004D3F] border border-[#004D3F] rounded-md hover:bg-teal-50 transition-colors">
              <span>Edit</span>
              <FiEdit2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Name</p>
              <p className="text-gray-900 font-medium">Ralph Franecki</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Email</p>
              <p className="text-gray-900 font-medium">Patricia.Rodriguez38@Gmail.Com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Phone Number</p>
              <p className="text-gray-900 font-medium">(425) 871-9753</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Address</p>
              <p className="text-gray-900 font-medium">191 Stokes Cliffs, Albertoworth 16444-5273</p>
            </div>
          </div>
        </div>

        {/* Business Information Section */}
        <div className="bg-[#FBFBFB] rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Business Information</h2>
            <button className="flex items-center gap-2 px-2 py-1 text-[#004D3F] border border-[#004D3F] rounded-md hover:bg-teal-50 transition-colors">
              <span>Edit</span>
              <FiEdit2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Company Name</p>
              <p className="text-gray-900 font-medium">JD Consulting Srl</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">VAT ID</p>
              <p className="text-gray-900 font-medium">Patricia.Rodriguez38@Gmail.Com</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">PEC (Certified Email)</p>
            <p className="text-gray-900 font-medium">John.Doe@Pec.It</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-4">Upload ID/Compliance Docs</p>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
               <PDFIcon  />
                <span className="text-gray-700">Income Statement.pdf</span>
              </button>
              <button className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <PDFIcon  />
                <span className="text-gray-700">Balance Sheet.pdf</span>
              </button>
            </div>
          </div>
        </div>
  
    </div>
  );
}