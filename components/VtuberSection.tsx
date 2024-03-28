import React from 'react';
import Image from 'next/image';

const VtuberSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-center bg-white h-[150vh] w-full pt-20">
            <div className="flex flex-col text-[#C60001]">
                <span className="text-8xl font-bold w-full">VTUBER GUESTS</span>
            </div>
            <div className="flex flex-row h-[200vh] w-full my-20">
                <Image
                    src="/images/2024-custombg.png"
                    alt="2024-custombg.png"
                    className="w-[26px] h-[26px]"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
};

export default VtuberSection;
