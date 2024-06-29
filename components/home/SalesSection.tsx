import React from 'react';
import Image from 'next/image';
import Routes from '@/enums/routes';
import SaleItem from './SaleItem';
import { ETICKETS, PHYS_TICKETS, MERCH } from '@/enums/imageUrls';
import ExternalLink from '../generics/ExternalLink';
import InternalLink from '../generics/InternalLink';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Fade } from 'react-awesome-reveal';

const SalesSection = () => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-white w-full py-10 gap-10 md:py-20 px-4 md:px-[10vw]">
            <div className="flex flex-col text-site-main">
                <p className="text-3xl md:text-4xl 2xl:text-6xl font-bold">
                    TICKETS & MERCH
                </p>
            </div>
            <Fade>
                <div className="flex flex-col md:flex-row items-center bg-site-main text-site-secondary text-xs sm:text-sm md:text-md lg:text-xl p-5 rounded-2xl">
                    <figure className="relative aspect-square scale-100 w-1/3 md:scale-75 mt-4">
                        <Image
                            src="/ticket_chibi.png"
                            alt="coming soon"
                            fill
                            className="object-contain"
                        />
                    </figure>
                    <div className="flex flex-col w-full items-center justify-center gap-2 leading-2 md:gap-4 md:pr-5">
                        <p className="text-center text-lg md:text-3xl font-bold">
                            PRE-ORDERS FOR E-TICKET SALES
                        </p>
                        <p className="text-justify">
                            <b>PRE-ORDERS FOR TICKET SALES HAS NOW BEGUN!</b>{' '}
                            Skip all the hassle of lining up, so you can fully
                            focus on getting the most out of OtakuFest &apos;24!
                        </p>
                        <div className="flex flex-row justify-evenly rounded-full w-full md:w-1/2 p-2 border-site-secondary border-4">
                            <FaCalendarAlt className="size-20" />
                            <span>
                                Open until <b>July 31</b>
                            </span>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="gap-2 lg:gap-8 w-full text-site-main grid grid-cols-2 lg:grid-cols-3 items-center justify-around text-xs sm:text-sm md:text-md lg:text-xl md:flex-row">
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
            <div className="flex flex-col md:flex-row items-center bg-site-main text-site-secondary text-xs sm:text-sm md:text-md lg:text-xl p-5 rounded-2xl">
                <figure className="relative aspect-square scale-100 w-1/3 md:scale-75 mt-4">
                    <Image
                        src="/ticket_chibi.png"
                        alt="coming soon"
                        fill
                        className="object-contain"
                    />
                </figure>
                <div className="flex flex-col w-full items-center justify-center gap-2 md:gap-4 md:pr-5">
                    <p className="text-center text-lg leading-5 md:text-3xl font-bold">
                        MEETUP FOR LIMITED PHYSICAL TICKETS
                    </p>
                    <p className="text-justify">
                        <b>BUY OUR LIMITED PHYSICAL TICKETS NOW!</b> We have
                        limited stock and a raffle for a Meet and Greet with our
                        esteemed guests for our Early Birds.{' '}
                        <i>
                            Join our raffle for a chance to win a free Meet and
                            Greet pass.
                        </i>
                        <br />
                        <br />
                    </p>
                    <div className="flex flex-row justify-evenly rounded-2xl md:rounded-full w-full p-2 gap-4 border-site-secondary border-4">
                        <span className="flex flex-col items-center justify-center text-center">
                            <FaCalendarAlt className="size-20" />
                            <b>June 22-23</b>
                        </span>
                        <div className="flex flex-col justify-center">
                            <span className="flex flex-row items-center gap-4">
                                <FaLocationDot className="size-20" />
                                Mactan LLC, Bo&apos;s Coffee, Pueblo Verde
                                (1-5PM)
                            </span>
                            <span className="flex flex-row items-center gap-4">
                                <FaLocationDot className="size-20" />
                                IT Park, Workplace Cafe (3-7PM)
                            </span>
                        </div>
                    </div>
                </div>
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
            <Fade>
                <div className="flex flex-col md:flex-row items-center bg-site-main text-site-secondary text-xs sm:text-sm md:text-md lg:text-xl p-5 rounded-2xl">
                    <figure className="relative aspect-square scale-100 w-1/3 md:scale-75 mt-4">
                        <Image
                            src="/merch_chibi.png"
                            alt="coming soon"
                            fill
                            className="object-contain"
                        />
                    </figure>
                    <div className="flex flex-col w-full items-center justify-center gap-2 leading-2 md:gap-4 md:pr-5">
                        <p className="text-center text-lg md:text-3xl font-bold">
                            PREORDER EXCLUSIVE #OF24 MERCH
                        </p>
                        <p className="text-justify">
                            Complete your Otakufest experience by preordering
                            these <b>LIMITED EDITION</b> Otakufest 2024 merch!
                            Stocks are limited, so make sure you order RIGHT
                            AWAY!{' '}
                            <i>
                                All merch preordered online aka via this form
                                shall be issued E-STUBS instead of physical
                                claim stubs.
                            </i>
                        </p>
                        <div className="flex flex-row justify-evenly rounded-full w-full md:w-1/2 p-2 border-site-secondary border-4">
                            <FaCalendarAlt className="size-20" />
                            <span>
                                Open until <b>July 31</b>
                            </span>
                        </div>
                    </div>
                </div>
            </Fade>
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
            <Fade>
                <span className="flex flex-col xl:flex-row items-center gap-2 text-site-main text-center text-xs md:text-sm lg:text-md mt-2 md:mt-4">
                    <p className="flex flex-col sm:flex-row items-center gap-2">
                        For concerns regarding your purchases from Otakufest
                        2024, consider{' '}
                        <InternalLink
                            content="reaching out to us"
                            route={Routes.CONTACT_US}
                        />{' '}
                    </p>
                    <p className="flex flex-col sm:flex-row items-center gap-2">
                        or sending us an e-mail at{' '}
                        <ExternalLink content="sales.otakufest@gmail.com" />
                    </p>
                </span>
            </Fade>
        </div>
    );
};

export default SalesSection;
