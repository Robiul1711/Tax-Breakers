import CommonButton from '@/common/CommonButton';
import { AppointmentTick } from '@/Components/SvgContainer/SvgContainer';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

interface AppointmentSuccessModalProps {
  onClose: () => void;
  formData: Record<string, any>;
}

const AppointmentSuccessModal: React.FC<AppointmentSuccessModalProps> = ({ onClose, formData }) => {
  const router = useRouter();

  const handleClick = () => {
    onClose();
    router.push('/dashboard/appointments/');
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-lg w-full mx-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Tick Icon */}
          <div className="p-4 rounded-full bg-[#ECF4E9] inline-flex mb-4">
            <AppointmentTick />
          </div>

          {/* Header */}
          <h2 className="text-2xl font-semibold text-black mb-3">
            You're all set for your appointment!
          </h2>
          <p className="text-gray-600 mb-8 tracking-wide text-sm">
            Watch for an email, text, or app alert as the date approaches.
          </p>

          {/* Appointment Details */}
          <div className="bg-gray-50 rounded-xl p-5 text-left mb-8 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Appointment Summary</h3>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Consultant Type:</span>
                <span className="font-semibold text-gray-800">{formData.consultant_type}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Service Type:</span>
                <span className="font-semibold text-gray-800">{formData.service_type}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Date & Time:</span>
                <span className="font-semibold text-gray-800">{formData.time_and_date}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Duration:</span>
                <span className="font-semibold text-gray-800">{formData.duration}</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <CommonButton
            type="button"
            variant="primary"
            onClick={handleClick}
            className="w-full rounded-2xl"
          >
            View Appointments
          </CommonButton>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppointmentSuccessModal;
