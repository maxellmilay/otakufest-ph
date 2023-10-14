import React from 'react';
import Image from 'next/image';

interface IProps {
  imageUrl: string;
  name: string;
}

const EventImage = (props: IProps) => {
  const { imageUrl, name } = props;
  return (
    <div className="flex flex-col gap-2">
      <figure className="relative aspect-[281/225] h-44">
        <Image src={imageUrl} alt="guest" fill className="object-cover" />
      </figure>
      <p className="text-center text-xs">{name}</p>
    </div>
  );
};

export default EventImage;
