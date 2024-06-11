import React from 'react';
import { ContactUsContainer } from '@/components/ContactUsContainer';
import ImageUrl from '@/enums/imageUrl';

const ContactUs = () => {
    return (
        <section
            className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80  px-20 pb-10 pt-[7.5rem]"
            style={{ backgroundImage: `url(${ImageUrl.BACKGROUND2024})` }}
        >
            <ContactUsContainer />
        </section>
    );
};

export default ContactUs;
