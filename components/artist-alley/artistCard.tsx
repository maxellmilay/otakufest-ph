import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';
import { IoGlobeSharp } from 'react-icons/io5';
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
    RiYoutubeFill,
    RiTiktokFill,
    RiTwitchFill,
    RiTumblrFill,
} from 'react-icons/ri';

interface IProps {
    name: string;
    description: string;
    profilePic: string;
    samples: Array<string>;
    socials: SocialInterface;
}

const ArtistCard = (props: IProps) => {
    const { name, description, profilePic, samples, socials } = props;
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const socialIcons: { [key: string]: JSX.Element } = {
        youtube: <RiYoutubeFill className="text-sm md:text-xl" />,
        facebook: <RiFacebookCircleFill className="text-sm md:text-xl" />,
        twitter: <RiTwitterFill className="text-sm md:text-xl" />,
        instagram: <RiInstagramFill className="text-sm md:text-xl" />,
        tiktok: <RiTiktokFill className="text-sm md:text-xl" />,
        twitch: <RiTwitchFill className="text-sm md:text-xl" />,
        tumblr: <RiTumblrFill className="text-sm md:text-xl" />,
        website: <IoGlobeSharp className="text-sm md:text-xl" />,
    };

    const handleImageClick = (index: number) => {
        setCurrentImage(index);
    };

    const openModal = () => {
        setIsGalleryOpen(true);
    };

    const closeModal = () => {
        setIsGalleryOpen(false);
    };

    return (
        <div>
            {isGalleryOpen && (
                <div className="fixed h-[100vh] w-[100vw] inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative flex bg-white p-8 w-3/4 h-[0.90] rounded-lg shadow-lg items-center justify-around flex-col gap-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 text-xl mx-2 md:m-4 font-bold"
                        >
                            &times;
                        </button>
                        <figure className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-[32rem] md:h-[32rem]">
                            <Image
                                src={samples[currentImage]}
                                alt="of24visual"
                                fill
                                className="object-cover"
                            />
                        </figure>
                        <div className="flex flex-row w-full md:w-1/3 items-center gap-4 justify-center gap-2 p-2 md:p-4 rounded-lg bg-site-main/[0.15]">
                            {Object.values(samples).map(
                                (currentItem, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleImageClick(index)}
                                        className="hover:scale-110 duration-200"
                                    >
                                        <figure className="relative w-12 h-12">
                                            <Image
                                                src={currentItem}
                                                alt="of24visual"
                                                fill
                                                className="object-cover"
                                            />
                                        </figure>
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="group w-full flex flex-col items-center md:p-8 rounded-xl border-2 border-slate-300 drop-shadow-md hover:border-site-main ease-in duration-100 overflow-hidden break-inside-avoid">
                <button onClick={openModal}>
                    <Image
                        src={samples[0]}
                        alt="sampleDis"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </button>

                <ul className="w-5/6 md:w-full gap-4 mt-4 leading-3 text-[12px] md:text-md lg:text-xl">
                    <li className="flex flex-row items-start gap-2 md:gap-4 justify-between mb-2">
                        <figure className="relative aspect-square w-10 md:w-20 hover:scale-105 duration-200">
                            <Image
                                src={profilePic}
                                alt={name}
                                fill
                                className="object-cover rounded-full object-center border-2 md:border-4 border-[#f0ca88] bg-theme"
                            />
                        </figure>
                        <div className="flex flex-col w-full">
                            <p className="w-full text-justify font-yaldevi font-bold">
                                {name}
                            </p>
                            <div className="flex gap-2">
                                {Object.entries(socials)
                                    .filter(([key, value]) => value)
                                    .map(([key, value]) => {
                                        return (
                                            <a
                                                key={value}
                                                href={value}
                                                className="hover:scale-150 duration-200"
                                            >
                                                {socialIcons[key]}
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>
                    </li>
                    <li className="w-full justify-around items-center mb-2 pb-2 text-[12px] sm:text-sm">
                        <p className="w-full">{description}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ArtistCard;
