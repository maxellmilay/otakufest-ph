import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/OFYears/ImageUrl2024';

const VtuberSection = () => {
    return (
        <div className="flex flex-col flex-grow items-center justify-around text-center bg-white h-screen sm:h-[75vh] md:h-[150vh] w-screen mb-40">
            <div className="flex flex-col text-[#C60001]">
                <span className="text-5xl md:text-8xl font-bold px-10 w-full">
                    VTUBER GUESTS
                </span>
            </div>
            <div
                className="flex flex-row items-center justify-around h-[200vh] w-screen my-20 relative bg-cover bg-center relative"
                style={{ backgroundImage: `url(${ImageUrl.BACKGROUND2024})` }}
            >
                <div className="flex h-full w-full items-end justify-around md:items-center md:justify-between pb-16 md:p-56 z-10">
                    <div className="flex flex-col justify-center bg-white/[0.9] p-5 w-[35vh] text-[#C60001] md:mb-[25vh] mx-1 rounded-lg">
                        <span className="font-bold text-md md:text-xl">
                            Ouro Kronii
                        </span>
                        <div className="flex flex-row w-full items-center justify-between">
                            <Image
                                src={ImageUrl.YOUTUBEICON}
                                alt="YouTube icon"
                                className="w-[20px] h-[20px]"
                                width={80}
                                height={80}
                            />
                            <a
                                href="https://www.youtube.com/@OuroKronii"
                                className="text-xs lg:text-sm ml-5"
                            >
                                Ouro Kronii Ch. hololive-EN
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center bg-white/[0.9] p-5 w-[35vh] text-[#C60001] mx-1 rounded-lg">
                        <span className="font-bold text-md md:text-xl">
                            Gawr Gura
                        </span>
                        <div className="flex flex-row w-full items-center justify-between">
                            <Image
                                src={ImageUrl.YOUTUBEICON}
                                alt="YouTube icon"
                                className="w-[20px] h-[20px]"
                                width={80}
                                height={80}
                            />
                            <a
                                href="https://www.youtube.com/@GawrGura"
                                className="text-xs lg:text-sm ml-5"
                            >
                                Gawr Gura Ch. hololive-EN
                            </a>
                        </div>
                    </div>
                </div>
                <Image
                    src={ImageUrl.OUROKRONII}
                    alt="Ouro Kronii"
                    width={700}
                    height={1050}
                    className="w-auto h-auto absolute ml-[-15vh] xs:ml-[-25vh] sm:ml-[-30vh]"
                />
                <Image
                    src={ImageUrl.GAWRGURA}
                    alt="Gawr Gura"
                    width={600}
                    height={900}
                    className="w-auto h-auto absolute ml-[15vh] xs:ml-[25vh] sm:ml-[30vh] mt-[10vh] md:mt-[25vh]"
                />
            </div>
        </div>
    );
};

export default VtuberSection;
