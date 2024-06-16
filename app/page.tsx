'use client';

import React from 'react';
import HomeCarousel from '@/components/HomeCarousel';
import EventDescription from '@/components/EventDescription';
import GuestSection from '@/components/GuestSection';
import SalesSection from '@/components/SalesSection';
import EventSection from '@/components/EventSection';
import SponsorSection from '@/components/SponsorSection';
import BoothSection from '@/components/BoothSection';

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
