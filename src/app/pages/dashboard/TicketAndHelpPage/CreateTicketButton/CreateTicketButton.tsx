"use client"
import CommonButton from '@/common/CommonButton';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import CreateTicketModal from '../CreateTicketModal/CreateTicketModal';

const CreateTicketButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <CommonButton onClick={() => setIsModalOpen(true)} className='flex'>
                <FiPlus className='h-6 w-6' />
                <span>Create Ticket</span>
            </CommonButton>

            {isModalOpen && <CreateTicketModal onClose={() => setIsModalOpen(false)} />}
        </>


    );
};

export default CreateTicketButton;