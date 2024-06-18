import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';
import SaleItem from './SaleItem';
import { OF24_TICKETS, ETICKETS, PHYS_TICKETS } from '@/enums/imageUrls';

const SalesSection = () => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-white w-full py-10 gap-10 md:py-20 px-[10vw]">
            <div className="flex flex-col text-site-main">
                <p className="text-3xl md:text-4xl 2xl:text-6xl font-bold">
                    TICKETS
                </p>
            </div>
            <div className="flex flex-col text-site-main text-xs sm:text-sm md:text-md lg:text-xl px-5">
                <p className="text-xl md:text-3xl font-bold w-full">
                    PRE-ORDERS FOR E-TICKET SALES
                </p>
                <p className="mt-4 text-justify">
                    <b>PRE-ORDERS FOR TICKET SALES HAS NOW BEGUN!</b> Pre-order
                    your tickets now from <b>June 15</b> to <b>July 31</b> and
                    skip all the hassle of lining up, so you can fully focus on
                    getting the most out of OtakuFest &apos;24!
                    <br />
                    <br />
                    For your guidance, <b>Day 1</b> of OtakuFest &apos;24 is on{' '}
                    <b>Day 17, 2024</b> (Saturday) while <b>Day 2</b> of
                    OtakuFest &apos;24 is on <b>Day 18, 2024</b> (Sunday).
                </p>
            </div>
            <div className="gap-8 w-full text-site-main flex flex-col items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
                {Object.values(ETICKETS).map((currentItem) => (
                    <SaleItem
                        key={currentItem.itemName}
                        imageUrl={currentItem.imageUrl}
                        itemName={currentItem.itemName}
                        price={currentItem.price}
                        itemDesc={currentItem.itemDesc}
                        status={currentItem.status}
                        purchaseURL={currentItem.purchaseURL}
                    />
                ))}
            </div>
            <div className="flex flex-col text-site-main text-xs sm:text-sm md:text-md lg:text-xl px-5">
                <p className="text-xl md:text-3xl font-bold w-full">
                    MEETUP FOR LIMITED PHYSICAL TICKETS
                </p>
                <p className="mt-4 text-justify">
                    <b>BUY OUR LIMITED PHYSICAL TICKETS NOW!</b> We have limited
                    stock and a raffle for a Meet and Greet with our esteemed
                    guests for our Early Birds.
                    <br />
                    <br />
                    Join our raffle for a chance to win a free Meet and Greet
                    pass. <b>EXCLUSIVELY DURING THIS WEEKEND ONLY!</b>
                    <br />
                    <br />
                    For your guidance, <b>Day 1</b> of OtakuFest &apos;24 is on{' '}
                    <b>Day 17, 2024</b> (Saturday) while <b>Day 2</b> of
                    OtakuFest &apos;24 is on <b>Day 18, 2024</b> (Sunday).
                </p>
            </div>
            <div className="gap-8 w-full text-site-main flex flex-col items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
                {Object.values(PHYS_TICKETS).map((currentItem) => (
                    <SaleItem
                        key={currentItem.itemName}
                        imageUrl={currentItem.imageUrl}
                        itemName={currentItem.itemName}
                        price={currentItem.price}
                        itemDesc={currentItem.itemDesc}
                        status={currentItem.status}
                        purchaseURL={currentItem.purchaseURL}
                    />
                ))}
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
                <Link href={Routes.CONTACT_US} className="underline">
                    reaching out to us
                </Link>{' '}
                or sending us an e-mail at <u>sales.otakufest@gmail.com</u>.
            </span>
        </div>
    );
};

export default SalesSection;
