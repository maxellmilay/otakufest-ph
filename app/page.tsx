'use client';

import React from 'react';
import HomeCarousel from '@/components/home/HomeCarousel';
import EventDescription from '@/components/home/EventDescription';
import GuestSection from '@/components/home/GuestSection';
import SalesSection from '@/components/home/SalesSection';
import EventSection from '@/components/home/EventSection';
import SponsorSection from '@/components/home/SponsorSection';
import BoothSection from '@/components/home/BoothSection';

const Home = () => {
    return (
        <>
            <section>
                <HomeCarousel />
            </section>

            <section>
                <EventDescription />
            </section>

            <section>
                <BoothSection />
            </section>

            <section id="guestSection">
                <GuestSection />
            </section>

            {/*
            <section>
                <VtuberSection />
            </section>
            */}

            <section id="eventSection">
                <EventSection />
            </section>
            <section id="shirtSection">
                <SalesSection />
            </section>
            <section>
                <SponsorSection />
            </section>
        </>
    );
};

export default Home;
