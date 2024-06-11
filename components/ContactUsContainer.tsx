import React from 'react';
import { ContactUsForms } from './ContactUsForms';

export const ContactUsContainer = () => {
    return (
        <div className="w-2/5 flex flex-col h-full bg-site-main rounded-3xl items-center p-3 ">
            <div className="flex flex-col items-center mt-6 mb-5 font-yaldevi w-full">
                <h2 className="font-bold text-3xl">Contact us!</h2>
                <h3 className="text-2xl">Send us your concerns!</h3>
            </div>
            <ContactUsForms />
        </div>
    );
};
