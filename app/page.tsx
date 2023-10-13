import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';
import ExternalLink from '@/enums/externalLinks';

const Home = () => {
  return (
    <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-hero bg-cover bg-center bg-blend-overlay pt-20">
      <h2>CONNECTING THE WORLD, ONE HOBBY AT A TIME</h2>
      <figure className="relative aspect-[656/442] h-72">
        <Image src={ImageUrl.VENUE} alt="venue" fill className="object-cover" />
      </figure>
      <p>June 24-25, 2023 SM Seaside Cebu</p>
      <a href={ExternalLink.THROWBACK_VIDEO} rel="noreferrer" target="_blank">
        Throwback Video
      </a>
    </section>
  );
};

export default Home;

