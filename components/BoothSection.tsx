import React from 'react';
import { IoHeartCircle } from 'react-icons/io5';

const BoothSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white w-full p-10 md:p-20">
            <div className="flex flex-col gap-3 sm:gap-5 text-site-main w-full items-center">
                <span className="text-3xl md:text-4xl 2xl:text-6xl font-bold">
                    BOOTHS
                </span>
                <ul className="w-full md:w-2/3 text-xs sm:text-sm md:text-md lg:text-xl list-none">
                    <li className="flex flex-row items-center mb-2">
                        <IoHeartCircle size={'5vh'} className="mr-2" />
                        <span className="w-full">
                            Support local! Registrations for all booths are{' '}
                            <b>CLOSED</b>.{' '}
                            <u>
                                Check out our FAQ here if you&apos;re a boother!
                            </u>
                        </span>
                    </li>
                    <li className="flex flex-row items-center mb-2">
                        <IoHeartCircle size={'5vh'} className="mr-2" />
                        <span className="w-full">
                            Interested in collaborating, partnering, or working
                            with us? <u>Email us here!</u>
                        </span>
                    </li>
                    <li className="flex flex-row items-center">
                        <IoHeartCircle size={'5vh'} className="mr-2" />
                        <span className="w-full">
                            Not sure if your products or displays are suitable
                            for our event?{' '}
                            <a
                                href="https://bit.ly/43W8Rbw"
                                className="underline hover:text-black"
                            >
                                Check out our detailed content filtering guide!
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap w-full justify-around">
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-white text-md md:text-xl px-10 bg-site-main mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR ARTIST ALLEY
                    </span>{' '}
                    Deadline: June 10th
                </div>
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-white text-md md:text-xl px-10 bg-site-main mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR MERCHANT MENAGERIE
                    </span>
                </div>
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-white text-md md:text-xl px-10 bg-site-main mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR EXHIBITORS EMPORIUM
                    </span>{' '}
                    Deadline: June 10th
                </div>
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-white text-md md:text-xl px-10 bg-site-main mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR COSPLAY CROSSWALK
                    </span>{' '}
                    Deadline: June 10th
                </div>
            </div>
        </div>
    );
};

export default BoothSection;
