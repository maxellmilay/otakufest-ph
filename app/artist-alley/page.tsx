'use client';

import React from 'react';
import { OF24_PAN, ARTIST_FEATURES } from '@/enums/imageUrls';
import Image from 'next/image';
import ArtistCard from '@/components/artist-alley/artistCard';

const ArtistAlley = () => {
    return (
        <section className="overflow-x-hidden">
            <section className="flex flex-row gap-5 relative justify-between bg-site-blue-100/80 px-6 pb-8 md:px-10 lg:px-12 xl:px-20 pt-[6rem] lg:pb-16 lg:pt-[7.5rem] text-site-secondary bg-site-main overflow-hidden">
                <div className="flex flex-col text-center md:text-start">
                    <h1 className="text-3xl md:text-4xl 2xl:text-6xl tracking-wide font-black font-lato">
                        ARTIST ALLEY SPOTLIGHTS
                    </h1>
                    <p className="w-full md:w-4/6 font-yaldevi text-xs sm:text-sm md:text-md lg:text-xl mt-4 tracking-wide">
                        HAVE A LOOK AT WHAT THEY COOKED! 🎨
                        <br />
                        <br /> They&apos;ve been busy in the kitchen, now see
                        what they&apos;ve served!🔥 The artists are up at #OF24
                        - featuring our complete, official Artist Alley line-up
                        ✨ Visit them this Otakufest 2024 at SM Seaside City
                        Cebu on August 17-18, 2024!
                    </p>
                </div>

                <figure className="absolute right-[-12px] xl:right-8 md:top-20 aspect-square md:w-[16rem] lg:w-[27rem] z-5 overflow-hidden">
                    <Image
                        src="/artist alley ara.png"
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </figure>
            </section>
            <div className="gap-2 lg:gap-8 space-y-4 w-full text-site-main columns-2 lg:columns-3 text-xs sm:text-sm md:text-md lg:text-xl px-4 md:px-[5vw] py-10 md:py-20">
                {Object.values(ARTIST_FEATURES).map((currentItem) => (
                    <ArtistCard
                        key={currentItem.name}
                        name={currentItem.name}
                        description={currentItem.description}
                        profilePic={currentItem.profilePic}
                        samples={currentItem.samples}
                        socials={currentItem.socials}
                    />
                ))}
            </div>
        </section>
    );
};

export default ArtistAlley;
