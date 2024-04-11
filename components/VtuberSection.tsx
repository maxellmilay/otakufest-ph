import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';

const VtuberSection = () => {
    return (
        <div className="flex flex-col flex-grow items-center justify-around text-center bg-white h-[150vh] w-full mb-40">
            <div className="flex flex-col text-[#C60001]">
                <span className="text-8xl font-bold w-full">VTUBER GUESTS</span>
            </div>
            <div
                className="flex flex-row items-center justify-around h-[200vh] w-full my-20 relative bg-cover bg-center relative"
                style={{ backgroundImage: `url(${ImageUrl.BACKGROUND2024})` }}
            >
                <div className="flex h-full w-full items-center justify-between p-56 z-10">
                    <div className="flex flex-col justify-center bg-white/[0.9] p-5 w-[35vh] text-[#C60001] mb-[25vh] rounded-lg">
                        <span className="font-bold text-xl">Ouro Kronii</span>
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
                                className="text-sm"
                            >
                                Ouro Kronii Ch. hololive-EN
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center bg-white/[0.9] p-5 w-[35vh] text-[#C60001] mt-[28vh] rounded-lg">
                        <span className="font-bold text-xl">Gawr Gura</span>
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
                                className="text-sm"
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
                    className="w-auto h-auto absolute ml-[-30vh]"
                />
                <Image
                    src={ImageUrl.GAWRGURA}
                    alt="Gawr Gura"
                    width={600}
                    height={900}
                    className="w-auto h-auto absolute ml-[30vh] mt-[25vh]"
                />
            </div>
        </div>
    );
};

export default VtuberSection;
