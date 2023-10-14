import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';

const Shirt = () => {
  return (
    <section
      id="shirt"
      className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-shirt bg-cover bg-center bg-blend-overlay px-20 pb-10 pt-[7.5rem]"
    >
      <h2>OFFICIAL OF23 SHIRT</h2>
      <figure className="relative aspect-[783/611] w-[70%] md:w-96">
        <Image src={ImageUrl.SHIRT} alt="shirt" fill className="object-cover" />
      </figure>
    </section>
  );
};

export default Shirt;
