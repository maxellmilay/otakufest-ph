import React from 'react';

const BoothSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-site-main w-full p-10 md:p-20">
            <div className="flex flex-col md:flex-row text-white w-full">
                <span className="text-5xl md:text-8xl font-bold w-1/3">
                    BOOTHS
                </span>
                <span className="w-full md:w-2/3 text-md md:text-xl">
                    Support local! Registrations for all booths are 
                    <b>CLOSED</b>. Check out our FAQ here if you&apos;re a
                    boother!
                    <br />
                    Interested in collaborating, partnering, or working with us?
                    Email us here! <br />
                    Not sure if your products or displays are suitable for our
                    event?{' '}
                    <a
                        href="https://bit.ly/43W8Rbw"
                        className="underline hover:text-gray-200"
                    >
                        Check out our detailed content filtering guide!
                    </a>
                </span>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-between">
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-site-main text-md md:text-xl px-10 bg-white mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR ARTIST ALLEY
                    </span>
                    Deadline: June 10th
                </div>
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-site-main text-md md:text-xl px-10 bg-white mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR MERCHANT MENAGERIE
                    </span>
                </div>
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-site-main text-md md:text-xl px-10 bg-white mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR EXHIBITORS EMPORIUM
                    </span>
                    Deadline: June 10th
                </div>
                <div className="flex flex-col w-[85vh] h-[20vh] md:h-[35vh] text-site-main text-md md:text-xl px-10 bg-white mt-10 md:mt-20 rounded-lg items-center justify-center text-center hover:scale-[1.05] transform transition duration-y">
                    <span className="text-xl md:text-4xl font-bold">
                        APPLY FOR COSPLAY CROSSWALK
                    </span>
                    Deadline: June 10th
                </div>
            </div>
        </div>
    );
};

export default BoothSection;
