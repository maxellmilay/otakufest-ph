import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';
import HomeSponsor from '@/components/SponsorImage';

const SponsorSection = () => {
    return (
        <div
            className="flex flex-col min-h-[85rem] text-center w-full relative bg-cover bg-center overflow-hidden py-10 md:py-20"
            style={{ backgroundImage: `url(${ImageUrl.BACKGROUND2024})` }}
        >
            <span className="text-site-main text-5xl md:text-8xl font-bold w-full">
                SPONSORS
            </span>

            <div className="flex flex-col gap-5 min-h-screen justify-center items-center py-10 font-semibold text-md md:text-xl z-10">
                <div className="flex flex-wrap gap-10 justify-center w-4/5 md:w-full">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col text-left bg-[#3F0000]/[.38] p-5 rounded-2xl">
                            <p>Venue Partner</p>
                            <HomeSponsor
                                imageUrl={ImageUrl.SM_SEASIDE}
                                aspect="aspect-[400/92]"
                                width="w-64 md:w-96"
                            />
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center">
                                <span className="text-left">Presenters</span>
                                <HomeSponsor
                                    imageUrl={ImageUrl.PROFOOD}
                                    aspect="aspect-[246/248]"
                                    width="w-24 md:w-44"
                                />
                                <HomeSponsor
                                    imageUrl={ImageUrl.PHOENIX}
                                    aspect="aspect-[250/251]"
                                    width="w-24 md:w-44"
                                />
                                <HomeSponsor
                                    imageUrl={ImageUrl.NIKKE}
                                    aspect="aspect-[250/141]"
                                    width="w-24 md:w-44"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center">
                                    <p>Co-Presenters</p>
                                    <HomeSponsor
                                        imageUrl={ImageUrl.NONKI}
                                        aspect="aspect-[175/140]"
                                        width="w-20 md:w-32"
                                    />
                                    <HomeSponsor
                                        imageUrl={ImageUrl.ANGKAS}
                                        aspect="aspect-[175/132]"
                                        width="w-20 md:w-32"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center">
                                    <p>Media Partners</p>
                                    <HomeSponsor
                                        imageUrl={ImageUrl.SUNSTAR}
                                        aspect="aspect-[175/41]"
                                        width="w-20 md:w-32"
                                    />
                                    <HomeSponsor
                                        imageUrl={ImageUrl.KEEPSAKES}
                                        aspect="aspect-[175/45]"
                                        width="w-20 md:w-32"
                                    />
                                    <HomeSponsor
                                        imageUrl={ImageUrl.RADIO_105}
                                        aspect="aspect-[175/175]"
                                        width="w-20 md:w-32"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[240px] md:w-auto">
                        <p>Minor Sponsors</p>
                        <HomeSponsor
                            imageUrl={ImageUrl.INKPLACE}
                            aspect="aspect-[200/51]"
                            width="w-36"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.HOBBIWORKZ}
                            aspect="aspect-[200/100]"
                            width="w-36"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.MACOLOGY}
                            aspect="aspect-[200/200]"
                            width="w-36"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.NATURES_SPRING}
                            aspect="aspect-[200/97]"
                            width="w-36"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.WORKPLACE_CAFE}
                            aspect="aspect-[200/119]"
                            width="w-36"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.ANE_MI}
                            aspect="aspect-[200/200]"
                            width="w-36"
                        />
                    </div>
                    <div className="flex flex-col gap-5 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[240px] md:w-auto">
                        <p>Major Sponsors</p>
                        <HomeSponsor
                            imageUrl={ImageUrl.SELECTA}
                            aspect="aspect-[300/151]"
                            width="w-56"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.MY_LANGUAGE_CAFE}
                            aspect="aspect-[300/110]"
                            width="w-56"
                        />
                        <HomeSponsor
                            imageUrl={ImageUrl.PNB}
                            aspect="aspect-[300/201]"
                            width="w-56"
                        />
                    </div>
                </div>
            </div>

            <figure className="absolute inset-x-0 bottom-[-52rem] aspect-square w-full">
                <Image
                    src={ImageUrl.OF24_FLOURISH}
                    alt="logo"
                    fill
                    className="object-cover"
                />
            </figure>
        </div>
    );
};

export default SponsorSection;
