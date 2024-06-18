import React from 'react';
import { OF24_PAN } from '@/enums/imageUrls';
import Image from 'next/image';
import { Faq } from '@/components/faqs/FAQs';

const Faqs = () => {
    return (
        <section className=" overflow-x-hidden">
            <section className="flex flex-row gap-5 relative justify-between bg-site-blue-100/80 px-6 pb-8 md:px-10 lg:px-12 xl:px-20 pt-[6rem] lg:pb-16 lg:pt-[7.5rem] text-site-main bg-theme">
                <div className="flex flex-col text-center md:text-start">
                    <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide font-black font-lato">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <p className="w-full md:w-4/6 font-yaldevi  md:text-sm lg:text-base xl:text-xl leading-7 mt-4 tracking-wide">
                        Otakufest brings together fans from all over the country
                        to celebrate their shared passions. Whether you&apos;re
                        a seasoned attendee or planning your first visit, this
                        page provides answers to common questions about the
                        event, ensuring you have all the information you need to
                        make the most of your Otakufest experience. Dive into
                        the details below and get ready for an unforgettable
                        time at Otakufest!
                    </p>
                </div>

                <figure className="absolute right-0 md:top-20 lg:top-0 aspect-square md:w-[16rem] lg:w-[22rem] xl:w-[27rem] z-5 overflow-hidden">
                    <Image
                        src={OF24_PAN}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </figure>
            </section>
            <Faq />
        </section>
    );
};

export default Faqs;
