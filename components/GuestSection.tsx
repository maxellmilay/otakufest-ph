import React from 'react';
import ComingSoon from './ComingSoon';

const GuestSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white w-full p-10 md:px-10 md:py-16 lg:p-20">
            <div className="flex flex-col text-site-main">
                <p className="text-4xl lg:text-6xl font-bold w-full">GUESTS</p>
            </div>
            <ComingSoon />
        </div>
    );
};

export default GuestSection;
