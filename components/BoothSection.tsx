import React from 'react';
import { IoHeartCircle } from 'react-icons/io5';

const BoothSection = () => {
    return (
        <div className="flex flex-col gap-7 md:gap-10 lg:gap-16 xl:gap-20 items-center justify-around text-justify bg-white w-full pt-10 md:pt-20 px-3 sm:px-10 md:px-20">
            <div className="flex flex-col gap-7 xl:gap-10 text-site-main w-full items-center">
                <p className="text-3xl md:text-4xl 2xl:text-6xl font-bold">
                    BOOTHS
                </p>
                <ul className="w-full md:w-2/3 text-xs sm:text-sm md:text-md lg:text-xl list-none px-5 sm:px-0">
                    <li className="flex flex-row items-center mb-2">
                        <IoHeartCircle size={'5vh'} className="mr-2" />
                        <p className="w-full">
                            Support local! Registrations for all booths are{' '}
                            <b>CLOSED</b>.{' '}
                            <u>
                                Check out our FAQ here if you&apos;re a boother!
                            </u>
                        </p>
                    </li>
                    <li className="flex flex-row items-center mb-2">
                        <IoHeartCircle size={'5vh'} className="mr-2" />
                        <p className="w-full">
                            Interested in collaborating, partnering, or working
                            with us? <u>Email us here!</u>
                        </p>
                    </li>
                    <li className="flex flex-row items-center">
                        <IoHeartCircle size={'5vh'} className="mr-2" />
                        <p className="w-full">
                            Not sure if your products or displays are suitable
                            for our event?{' '}
                            <a
                                href="https://bit.ly/43W8Rbw"
                                className="underline hover:text-black"
                            >
                                Check out our detailed content filtering guide!
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-4 md:gap-10">
                <div className="flex flex-col text-md md:text-xl py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-24 px-3 sm:px-7 gap-4 bg-site-main rounded-lg items-center justify-center text-center">
                    <p className="text-sm md:text-lg xl:text-3xl 2xl:text-4xl font-bold">
                        APPLY FOR ARTIST ALLEY
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg">
                        Deadline: June 10th
                    </p>
                </div>
                <div className="flex flex-col text-md md:text-xl py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-24 px-3 sm:px-7 gap-4 bg-site-main rounded-lg items-center justify-center text-center">
                    <p className="text-sm md:text-md lg:text-lg xl:text-3xl 2xl:text-4xl font-bold">
                        APPLY FOR MERCHANT MENAGERIE
                    </p>
                </div>
                <div className="flex flex-col text-md md:text-xl py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-24 px-3 sm:px-7 gap-4 bg-site-main rounded-lg items-center justify-center text-center">
                    <p className="text-sm md:text-md lg:text-lg xl:text-3xl 2xl:text-4xl font-bold">
                        APPLY FOR EXHIBITORS EMPORIUM
                    </p>{' '}
                    <p className="text-xs sm:text-sm md:text-lg">
                        Deadline: June 10th
                    </p>
                </div>
                <div className="flex flex-col text-md md:text-xl py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-24 px-3 sm:px-7 gap-4 bg-site-main rounded-lg items-center justify-center text-center">
                    <p className="text-sm md:text-md lg:text-lg xl:text-3xl 2xl:text-4xl font-bold">
                        APPLY FOR COSPLAY CROSSWALK
                    </p>{' '}
                    <p className="text-xs sm:text-sm md:text-lg">
                        Deadline: June 10th
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BoothSection;
