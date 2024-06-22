import React from 'react';
import Image from 'next/image';
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
    RiYoutubeFill,
    RiTiktokFill,
    RiTwitchFill,
} from 'react-icons/ri';
import ExternalUrls from '@/enums/externalUrls';

interface PropsInteface {
    name: string;
    description: string;
    socials: SocialInterface;
    imageUrl: string;
    isLeft: boolean;
}

const GuestCard = (props: PropsInteface) => {
    const { name, description, socials, imageUrl, isLeft } = props;

    const socialIcons: { [key: string]: JSX.Element } = {
        youtube: <RiYoutubeFill className="text-xl" />,
        facebook: <RiFacebookCircleFill className="text-xl" />,
        twitter: <RiTwitterFill className="text-xl" />,
        instagram: <RiInstagramFill className="text-xl" />,
        tiktok: <RiTiktokFill className="text-xl" />,
        twitch: <RiTwitchFill className="text-xl" />,
    };

    return (
        <div
            className={`flex flex-col md:flex-row gap-10 md:gap-20 ${!isLeft && 'md:flex-row-reverse'} items-center px-10`}
        >
            <figure className="relative aspect-square w-[80dvw] sm:w-[60dvw] md:w-[50dvw] lg:w-[25dvw] hover:scale-105 duration-200">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover rounded-full object-center border-4 border-[#f0ca88] bg-theme"
                />
            </figure>
            <div className="flex flex-col gap-3 w-full lg:w-[50dvw] xl:w-[45dvw] 2xl:w-[40dvw] text-clip bg-site-main/80 text-white justify-center h-fit p-5 hover:scale-105 duration-200">
                <p className="xl:text-5xl 2xl:text-6xl font-bold text-wrap">
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
                <p className="text-wrap text-xs xl:text-sm 2xl:text-md">
                    {description}
                </p>
                <a
                    href={ExternalUrls.PRE_ORDER_FORM}
                    className={`bg-white text-site-main w-fit px-3 py-2 rounded-md hover:scale-110 duration-200 self-end`}
                >
                    Meet & Greet
                </a>
            </div>
        </div>
    );
};

export default GuestCard;
