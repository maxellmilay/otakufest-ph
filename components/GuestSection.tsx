import React from 'react';
import ComingSoon from './ComingSoon';

const GuestSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white w-full p-10 md:p-20">
            <div className="flex flex-col text-site-main">
                <span className="text-4xl md:text-6xl font-bold w-full">
                    GUESTS
                </span>
            </div>
            <ComingSoon />
        </div>
    );
};

export default GuestSection;
