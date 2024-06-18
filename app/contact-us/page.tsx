import React from 'react';
import { ContactUsContainer } from '@/components/contact-us/ContactUsContainer';

const ContactUs = () => {
    return (
        <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80  px-20 pb-10 pt-[7.5rem] relative bg-theme">
            <ContactUsContainer />
        </section>
    );
};

export default ContactUs;
