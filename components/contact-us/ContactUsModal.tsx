import React from 'react';
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from 'react-icons/md';

interface ContactUsModalProps {
    onClose: () => void;
    isSent: boolean;
    hasConcern: boolean;
    isNotSent: boolean;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({
    onClose,
    isSent,
    hasConcern,
    isNotSent,
}) => {
    return (
        <div className="fixed inset-0 flex  items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
            <div className="bg-site-main flex flex-col justify-center items-center gap-y-3 py-4 px-6 md:px-10 rounded-md w-[80%] md:w-auto">
                {isSent && <MdOutlineCheckCircle size={150} />}
                {isNotSent ||
                    (!hasConcern && <MdOutlineErrorOutline size={150} />)}
                <h2 className="text-xl md:text-2xl font-bold text-center">
                    {isSent && 'SUCCESS'}
                    {isNotSent || (!hasConcern && 'ERROR')}
                </h2>
                <p className="text-sm md:text-lg text-center">
                    {isSent && 'Your concern has been successfully submitted!'}
                    {isNotSent && 'There seems to be a problem, try again.'}
                    {!hasConcern && 'Please select a concern.'}
                </p>
                <button
                    className="border-2  px-4 py-2 rounded-md md:text-base text-xs hover:text-site-main hover:bg-site-secondary transition-colors duration-300"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactUsModal;
