import React from 'react';
import Image from 'next/image';
import { SPONSOR, OF24_PAN } from '@/enums/imageUrls';
import HomeSponsor from '@/components/home/SponsorImage';

const SponsorSection = () => {
    return (
        <div className="flex flex-col  text-center w-full relative bg-cover bg-center overflow-hidden py-10 md:py-20 bg-theme">
            <span className="text-site-main text-4xl md:text-6xl font-bold w-full">
                SPONSORS
            </span>

            <div className="flex flex-col gap-5 justify-center items-center py-10 font-semibold xs:text-xs sm:text-md lg:text-xl z-10">
                <div className="flex flex-wrap xs:flex-nowrap gap-2 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-10 justify-center w-full">
                    <div className="flex flex-col gap-5 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[140px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-[240px]">
                        <p className="w-full">Major Sponsors</p>
                        <HomeSponsor
                            imageUrl={SPONSOR.SELECTA}
                            aspect="aspect-[300/151]"
                            width="w-32 xs:w-28 sm:w-32 md:w-36 lg:w-56"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.MY_LANGUAGE_CAFE}
                            aspect="aspect-[300/110]"
                            width="w-32  xs:w-28 sm:w-32 md:w-36 lg:w-56"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.PNB}
                            aspect="aspect-[300/201]"
                            width="w-32  xs:w-28 sm:w-32 md:w-36 lg:w-56"
                        />
                    </div>
                    <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[140px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-[240px] ">
                        <p>Minor Sponsors</p>
                        <HomeSponsor
                            imageUrl={SPONSOR.INKPLACE}
                            aspect="aspect-[200/51]"
                            width="w-20 xs:w-16 sm:w-20 md:w-24 lg:w-36"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.HOBBIWORKZ}
                            aspect="aspect-[200/100]"
                            width="w-20 xs:w-16 sm:w-20 md:w-24 lg:w-36"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.MACOLOGY}
                            aspect="aspect-[200/200]"
                            width="w-20 xs:w-16 sm:w-20 md:w-24 lg:w-36"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.NATURES_SPRING}
                            aspect="aspect-[200/97]"
                            width="w-20 xs:w-16 sm:w-20 md:w-24 lg:w-36"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.WORKPLACE_CAFE}
                            aspect="aspect-[200/119]"
                            width="w-20 xs:w-16 sm:w-20 md:w-24 lg:w-36"
                        />
                        <HomeSponsor
                            imageUrl={SPONSOR.ANE_MI}
                            aspect="aspect-[200/200]"
                            width="w-20 xs:w-16 sm:w-20 md:w-24 lg:w-36"
                        />
                    </div>
                    <div className="flex flex-col gap-3 xs:gap-5">
                        <div className="flex flex-col text-left bg-[#3F0000]/[.38] p-5 rounded-2xl w-[288px] xs:w-[248px] sm:w-[292px] md:w-[332px] lg:w-auto">
                            <p>Venue Partner</p>
                            <HomeSponsor
                                imageUrl={SPONSOR.SM_SEASIDE}
                                aspect="aspect-[400/92]"
                                width="w-48 xs:w-full lg:w-96"
                            />
                        </div>
                        <div className="flex gap-2 xs:gap-2 sm:gap-3  lg:gap-10 ">
                            <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[140px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-auto">
                                <span className="text-left">Presenters</span>
                                <HomeSponsor
                                    imageUrl={SPONSOR.PROFOOD}
                                    aspect="aspect-[246/248]"
                                    width="w-24 xs:w-20 sm:w-24 md:w-28 lg:w-44"
                                />
                                <HomeSponsor
                                    imageUrl={SPONSOR.PHOENIX}
                                    aspect="aspect-[250/251]"
                                    width="w-24 xs:w-20 sm:w-24 md:w-28 lg:w-44"
                                />
                                <HomeSponsor
                                    imageUrl={SPONSOR.NIKKE}
                                    aspect="aspect-[250/141]"
                                    width="w-24 xs:w-20 sm:w-24 md:w-28 lg:w-44"
                                />
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[140px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-auto">
                                    <p>Co-Presenters</p>
                                    <HomeSponsor
                                        imageUrl={SPONSOR.NONKI}
                                        aspect="aspect-[175/140]"
                                        width="w-20 xs:w-16 md:w-20 lg:w-32"
                                    />
                                    <HomeSponsor
                                        imageUrl={SPONSOR.ANGKAS}
                                        aspect="aspect-[175/132]"
                                        width="w-20 xs:w-16 md:w-20 lg:w-32"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 bg-[#3F0000]/[.38] p-5 rounded-2xl items-center w-[140px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-auto">
                                    <p>Media Partners</p>
                                    <HomeSponsor
                                        imageUrl={SPONSOR.SUNSTAR}
                                        aspect="aspect-[175/41]"
                                        width="w-20 xs:w-12 sm:w-16 md:w-20 lg:w-32"
                                    />
                                    <HomeSponsor
                                        imageUrl={SPONSOR.KEEPSAKES}
                                        aspect="aspect-[175/45]"
                                        width="w-20 xs:w-12 sm:w-16 md:w-20 lg:w-32"
                                    />
                                    <HomeSponsor
                                        imageUrl={SPONSOR.RADIO_105}
                                        aspect="aspect-[175/175]"
                                        width="w-20 xs:w-12 sm:w-16 md:w-20 lg:w-32"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure className="absolute inset-x-0 bottom-[-52rem] aspect-square w-full">
                <Image
                    src={OF24_PAN}
                    alt="logo"
                    fill
                    className="object-cover"
                />
            </figure>
        </div>
    );
};

export default SponsorSection;
