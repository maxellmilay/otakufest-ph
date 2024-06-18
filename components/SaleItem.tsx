import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { MdNotInterested } from 'react-icons/md';

interface IProps {
    imageUrl: string;
    itemName: string;
    price: number;
    itemDesc: string;
    status: string;
    purchaseURL: string;
    tag: string;
}

const SaleItem = (props: IProps) => {
    const { imageUrl, itemName, price, itemDesc, status, purchaseURL, tag } =
        props;
    return (
        <div className="group relative w-full flex flex-col items-center md:p-8 rounded-xl border-2 border-slate-300 drop-shadow-md hover:border-site-main ease-in duration-100 overflow-hidden">
            {status === 'Available' ? (
                <div className="absolute flex w-full h-full z-10 inset-0 bg-gray-500/[0.2] items-center justify-center hidden group-hover:flex">
                    <a href={purchaseURL}>
                        <button className="p-4 bg-site-main text-white font-bold rounded-lg drop-shadow-xl hover:bg-[#6B1414] hover:scale-105 transform transition-transform duration-300">
                            AVAIL NOW
                        </button>
                    </a>
                </div>
            ) : (
                <div className="absolute flex flex-col w-full h-full z-10 inset-0 md:p-4 bg-zinc-700/[0.5] items-center justify-center">
                    <MdNotInterested
                        size={'15vw'}
                        className="mr-2 text-site-secondary opacity-75"
                    />
                    <span className="flex flex-col text-site-secondary text-center text-xs mt-4 sm:text-sm md:text-md lg:text-3xl px-5">
                        <b>Not Available!</b>
                        <span className="lg:text-xl">{status}</span>
                    </span>
                </div>
            )}
            <div
                className={`flex flex-col items-center w-full h-full px-4 ${status === 'Available' ? 'group-hover:blur-sm' : 'blur-sm'}`}
            >
                <figure className="relative w-40 h-40 md:w-80 md:h-80">
                    <Image
                        src={imageUrl}
                        alt="of24visual"
                        fill
                        className="object-cover"
                    />
                </figure>
                <ul className="w-full gap-4 mt-4 leading-3 text-[10px] sm:text-sm md:text-md lg:text-xl">
                    <li className="flex flex-row items-center justify-between mb-2">
                        <p className="w-full text-justify font-bold">
                            {itemName}
                        </p>
                    </li>
                    <li className="flex flex-row items-center justify-between mb-2">
                        <div className="bg-site-main text-site-secondary rounded-full px-2 text-xs md:px-4 md:text-sm">
                            {tag}
                        </div>
                        <p className="font-bold">₱{price}</p>
                    </li>
                    <li className="flex flex-row justify-around items-center mb-2">
                        <FaCircleInfo
                            size={'3.5vh'}
                            className="mr-2 w-6 text-site-main"
                        />
                        <p className="w-full text-right">{itemDesc}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SaleItem;
