import React from 'react';
import enums from '@/enums/OFYears/ImageUrl2024';

const VtuberSection = () => {
    return (
        <div
            className="flex flex-col items-center justify-center text-center h-[30vh] md:h-[75vh] w-screen my-20 relative bg-cover bg-center text-site-main"
            style={{ backgroundImage: `url(${enums.ImageUrl.BACKGROUND2024})` }}
        >
            <span className="text-5xl md:text-8xl font-bold px-10 w-full">
                COMING SOON!
            </span>
            <span className="md:text-[1.5vw] z-10">
                Stand by for more updates!
            </span>
        </div>
    );
};

export default VtuberSection;
