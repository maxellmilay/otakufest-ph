'use client';

import React from 'react';
import HomeCarousel from '@/components/HomeCarousel';
import EventDescription from '@/components/EventDescription';
import GuestSection from '@/components/GuestSection';
import ShirtsSection from '@/components/ShirtsSection';
import VtuberSection from '@/components/VtuberSection';
import EventSection from '@/components/EventSection';
import SponsorSection from '@/components/SponsorSection';

const Home = () => {
    return (
        <>
            <section>
                <HomeCarousel />
            </section>
            <section>
                <EventDescription />
            </section>
            <section id="guestSection">
                <GuestSection />
            </section>
            <section>
                <VtuberSection />
            </section>
            <section id="eventSection">
                <EventSection />
            </section>
            <section id="shirtSection">
                <ShirtsSection />
            </section>
            <section>
                <SponsorSection />
            </section>
        </>
    );
};

export default Home;
