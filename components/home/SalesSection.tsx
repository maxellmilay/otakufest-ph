import React, { useRef } from 'react';
import Routes from '@/enums/routes';
import SaleItem from './SaleItem';
import { ETICKETS, PHYS_TICKETS, MERCH } from '@/enums/imageUrls';
import ExternalLink from '../generics/ExternalLink';
import InternalLink from '../generics/InternalLink';
import { useIsVisible } from '../generics/isVisible';

const SalesSection = () => {
    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef<HTMLDivElement>(null);
    const isVisible2 = useIsVisible(ref2);
    const ref3 = useRef<HTMLDivElement>(null);
    const isVisible3 = useIsVisible(ref3);
    const ref4 = useRef<HTMLDivElement>(null);
    const isVisible4 = useIsVisible(ref4);
    const ref5 = useRef<HTMLDivElement>(null);
    const isVisible5 = useIsVisible(ref5);
    return (
        <div className="flex flex-col items-center justify-evenly bg-white w-full py-10 gap-10 md:py-20 px-4 md:px-[10vw]">
            <div
                ref={ref1}
                className={`flex flex-col text-site-main transition-opacity ease-in duration-500 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}
            >
                <p className="text-3xl md:text-4xl 2xl:text-6xl font-bold">
                    TICKETS & MERCH
                </p>
            </div>
            <div
                ref={ref2}
                className={`flex flex-col text-site-main text-xs sm:text-sm md:text-md lg:text-xl px-5 transition-opacity ease-in duration-500 ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}
            >
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
            <div className="gap-2 lg:gap-8 w-full text-site-main grid grid-cols-2 lg:grid-cols-3     items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
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
            <div
                ref={ref3}
                className={`flex flex-col text-site-main text-xs sm:text-sm md:text-md lg:text-xl px-5 transition-opacity ease-in duration-500 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`}
            >
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
                    <br />
                    <br />
                    <i>
                        Walk-in entrance passes are available on the day of the
                        event! We give discounts to PWD, senior citizens, and
                        children 7 and below.
                    </i>
                </p>
            </div>
            <div className="gap-2 lg:gap-8 w-full text-site-main grid grid-cols-2 lg:grid-cols-3 items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
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
            <div
                ref={ref4}
                className={`flex flex-col text-site-main text-xs sm:text-sm md:text-md lg:text-xl px-5 transition-opacity ease-in duration-500 ${isVisible4 ? 'opacity-100' : 'opacity-0'}`}
            >
                <p className="text-xl md:text-3xl font-bold w-full">
                    PREORDER EXCLUSIVE #OF24 MERCH
                </p>
                <p className="mt-4 text-justify">
                    Complete your Otakufest experience by preordering these{' '}
                    <b>LIMITED EDITION</b> Otakufest 2024 merch! Stocks are
                    limited, so make sure you order RIGHT AWAY! <br /> <br />
                    All merch preordered online aka via this form shall be
                    issued E-STUBS instead of physical claim stubs.
                </p>
            </div>
            <div className="gap-2 lg:gap-8 w-full text-site-main grid grid-cols-2 lg:grid-cols-3 items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
                {Object.values(MERCH).map((currentItem) => (
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
            <span
                ref={ref5}
                className={`text-site-main text-center text-xs sm:text-sm md:text-md lg:text-xl mt-4 transition-opacity ease-in duration-500 ${isVisible5 ? 'opacity-100' : 'opacity-0'}`}
            >
                For concerns regarding your purchases from Otakufest 2024,
                consider{' '}
                <InternalLink
                    content="reaching out to us"
                    route={Routes.CONTACT_US}
                />{' '}
                or sending us an e-mail at{' '}
                <ExternalLink content="sales.otakufest@gmail.com" />
            </span>
        </div>
    );
};

export default SalesSection;
