import React from 'react';
import { IoHeartCircle } from 'react-icons/io5';
import ExternalLink from '../generics/ExternalLink';
import { Fade, Slide } from 'react-awesome-reveal';
import { BoothCard } from '@/components/home/BoothCard';

const BoothSection = () => {
    return (
        <div className="flex flex-col gap-7 md:gap-10 lg:gap-16 xl:gap-20 items-center justify-around text-justify bg-white w-full pt-10 md:pt-20 px-3 sm:px-10 md:px-20">
            <div className="flex flex-col gap-7 xl:gap-10 text-site-main w-full items-center">
                <Fade>
                    <p className="text-4xl md:text-6xl font-bold w-full mb-5">
                        BOOTHS
                    </p>
                    <ul className="flex flex-col gap-3 lg:gap-2 w-fit text-xs sm:text-sm md:text-md lg:text-xl list-none px-5 sm:px-0">
                        <li className="flex flex-col lg:flex-row items-center lg:gap-2">
                            <div className="flex gap-2 items-center w-full lg:w-auto">
                                <IoHeartCircle size={'5vh'} />
                                <p>
                                    Support local! Registrations for all booths
                                    are CLOSED.
                                </p>
                            </div>
                            <ExternalLink content="Check out our FAQ here if you're a boother!" />
                        </li>
                        <li className="flex flex-col lg:flex-row items-center lg:gap-2">
                            <div className="flex gap-2 items-center w-full lg:w-auto">
                                <IoHeartCircle size={'5vh'} />
                                <p>
                                    Interested in collaborating, partnering, or
                                    working with us?{' '}
                                </p>
                            </div>
                            <ExternalLink content="Email us here!" />
                        </li>
                        <li className="flex flex-col lg:flex-row items-center lg:gap-2">
                            <div className="flex gap-2 items-center w-full lg:w-auto">
                                <IoHeartCircle size={'5vh'} />
                                <p>
                                    Not sure if your products or displays are
                                    suitable for our event?{' '}
                                </p>
                            </div>
                            <ExternalLink
                                content="Check out our detailed content filtering guide!"
                                link="https://bit.ly/43W8Rbw"
                            />
                        </li>
                    </ul>
                </Fade>
            </div>
            {/* <Slide direction="left" duration={300}>
                <div className="grid grid-cols-2 gap-4 md:gap-10">
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

                    <div className="h-full flex flex-col text-md md:text-xl py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-24 px-3 sm:px-7 gap-4 bg-site-main rounded-lg items-center justify-center text-center">
                        <p className="text-sm md:text-md lg:text-lg xl:text-3xl 2xl:text-4xl font-bold">
                            APPLY FOR COSPLAY CROSSWALK
                        </p>{' '}
                        <p className="text-xs sm:text-sm md:text-lg">
                            Deadline: June 10th
                        </p>
                    </div>
                </div>
            </Slide> */}
            <div className="space-y-0">
                <BoothCard
                    images={[
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                    ]}
                    title="ARTIST ALLEY"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
                    buttonText="REGISTER NOW"
                    backgroundColor="#FFE5E5"
                    buttonClassName="bg-[#922424] hover:bg-[#7a1e1e]"
                    onButtonClick={() => console.log('Artist Alley clicked')}
                />

                <BoothCard
                    images={[
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                    ]}
                    title="EXHIBITORS EMPORIUM"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
                    buttonText="REGISTER NOW"
                    backgroundColor="#FFEBC8"
                    buttonClassName="bg-[#D68500] hover:bg-[#b86f00]"
                    onButtonClick={() =>
                        console.log('Exhibitors Eporium clicked')
                    }
                />

                <BoothCard
                    images={[
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                    ]}
                    title="MERCHANT MENAGERIE"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
                    buttonText="REGISTER NOW"
                    backgroundColor="#FFE5D2"
                    buttonClassName="bg-[#CC5200] hover:bg-[#a84300]"
                    onButtonClick={() =>
                        console.log('Merchant Menagerie clicked')
                    }
                />

                <BoothCard
                    images={[
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                        '/image.jpg',
                    ]}
                    title="COSPLAY CROSSWALK"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
                    backgroundColor="#FFE5E5"
                    buttonClassName="bg-[#E67E22] hover:bg-[#CA6510]"
                />
            </div>
        </div>
    );
};

export default BoothSection;
