import React from 'react';
import Image from 'next/image';

interface IProps {
  imageUrl: string;
  aspect: string;
  width?: string;
}

const HomeSponsor = (props: IProps) => {
  const { imageUrl, aspect, width } = props;
  return (
    <figure className={`relative ${aspect} ${width}`}>
      <Image src={imageUrl} alt="image" fill className="object-cover" />
    </figure>
  );
};

export default HomeSponsor;
