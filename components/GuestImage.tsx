import React from 'react';
import Image from 'next/image';

interface IProps {
  imageUrl: string;
}

const GuestImage = (props: IProps) => {
  const { imageUrl } = props;
  return (
    <figure className="relative aspect-[400/319] h-44">
      <Image src={imageUrl} alt="guest" fill className="object-cover" />
    </figure>
  );
};

export default GuestImage;
