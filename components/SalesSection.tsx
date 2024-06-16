import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';
import { OF24_TICKETS } from '@/enums/imageUrls';

const SalesSection = () => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-white w-full p-10 gap-10 md:p-20 md:px-[10vw]">
            <div className="flex flex-col text-site-main">
                <p className="text-4xl md:text-6xl font-bold w-full text-center">
                    TICKETS & MERCH
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-site-main rounded-xl overflow-hidden hover:scale-[1.01] transform transition duration-y">
                <figure className="relative w-auto h-64 md:w-1/2 md:h-auto">
                    <Image
                        src={OF24_TICKETS}
                        alt="of24visual"
                        fill
                        className="object-cover"
                    />
                </figure>
                <div className="flex flex-col justify-between w-full gap-10 p-8 md:w-2/3">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-3xl font-bold w-full">
                            TICKETS
                        </p>
                        <p className="text-xs sm:text-sm md:text-md mt-4">
                            Secure your tickets now for an unforgettable
                            experience packed with incredible panels, exclusive
                            screenings, and epic cosplay. Whether you&apos;re a
                            long-time fan or new to the scene, Otakufest 2024
                            promises excitement.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <button className="text-sm md:text-md py-2 px-3 bg-white text-site-main hover:scale-[1.05] transform transition duration-y">
                            AVAIL NOW!
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-site-main rounded-xl overflow-hidden hover:scale-[1.01] transform transition duration-y">
                <figure className="relative w-auto h-64 md:w-1/2 md:h-auto">
                    <Image
                        src={OF24_TICKETS}
                        alt="of24visual"
                        fill
                        className="object-cover"
                    />
                </figure>
                <div className="flex flex-col justify-between w-full gap-10 p-8 md:w-2/3">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-3xl font-bold w-full">
                            SHIRTS
                        </p>
                        <p className="text-xs sm:text-sm md:text-md mt-4">
                            Secure your shirts now for an unforgettable
                            experience packed with incredible panels, exclusive
                            screenings, and epic cosplay. Whether you&apos;re a
                            long-time fan or new to the scene, Otakufest 2024
                            promises excitement.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <button className="text-sm md:text-md py-2 px-3 bg-white text-site-main hover:scale-[1.05] transform transition duration-y">
                            AVAIL NOW!
                        </button>
                    </div>
                </div>
            </div>
            <span className="text-site-main text-center text-md md:text-xl mt-4">
                For concerns regarding your purchases from Otakufest 2024,
                consider{' '}
                <Link href={Routes.HOME} className="underline">
                    reaching out to us
                </Link>{' '}
                or sending us an e-mail at <u>sales.otakufest@gmail.com</u>.
            </span>
        </div>
    );
};

export default SalesSection;
