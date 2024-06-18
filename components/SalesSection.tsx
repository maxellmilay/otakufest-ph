import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';
import SaleItem from './SaleItem';
import { OF24_TICKETS, ETICKETS, PHYS_TICKETS } from '@/enums/imageUrls';

const SalesSection = () => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-white w-full py-10 gap-10 md:py-20 px-4 md:px-[10vw]">
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
            <div className="gap-2 lg:gap-8 w-full text-site-main grid grid-cols-2 lg:flex lg:flex-row items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
                {Object.values(ETICKETS).map((currentItem) => (
                    <SaleItem
                        key={currentItem.itemName}
                        imageUrl={currentItem.imageUrl}
                        itemName={currentItem.itemName}
                        price={currentItem.price}
                        itemDesc={currentItem.itemDesc}
                        status={currentItem.status}
                        purchaseURL={currentItem.purchaseURL}
                        tag={currentItem.tag}
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
            <div className="gap-2 lg:gap-8 w-full text-site-main grid grid-cols-2 lg:flex lg:flex-row items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
                {Object.values(PHYS_TICKETS).map((currentItem) => (
                    <SaleItem
                        key={currentItem.itemName}
                        imageUrl={currentItem.imageUrl}
                        itemName={currentItem.itemName}
                        price={currentItem.price}
                        itemDesc={currentItem.itemDesc}
                        status={currentItem.status}
                        purchaseURL={currentItem.purchaseURL}
                        tag={currentItem.tag}
                    />
                ))}
            </div>
            <span className="text-site-main text-center text-xs sm:text-sm md:text-md lg:text-xl mt-4">
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
