import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EventProps {
    imageUrl: string;
    eventName: string;
    description: string;
    eventURL: string;
    deadline: Date;
    isRevealed: boolean;
    blackImageUrl: string;
}

interface EventModalProps {
    event: EventProps | null;
    isOpen: boolean;
    onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
    if (!isOpen || !event) return null;

    const formattedDeadline = event.deadline
        ? event.deadline.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : '';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex md:flex-row flex-col items-center mt-16 rounded-lg bg-site-main w-[80%] md:w-[75%] lg:w-[70%] p-5  justify-center md:space-x-5">
                <figure className="relative aspect-square  w-40 sm:w-52 md:w-56 lg:w-64 xl:w-[28rem] duration-200 flex justify-center items-center">
                    {event.eventName == 'AniMotion! Animation Competition' && (
                        <Image
                            src={
                                event.isRevealed
                                    ? event.imageUrl
                                    : event.blackImageUrl
                            }
                            alt="guest"
                            width={350}
                            height={350}
                        />
                    )}
                    {event.eventName != 'AniMotion! Animation Competition' && (
                        <Image
                            src={
                                event.isRevealed
                                    ? event.imageUrl
                                    : event.blackImageUrl
                            }
                            alt="guest"
                            fill
                        />
                    )}
                </figure>
                <div className="rounded-lg w-11/12 md:w-[60%] lg:w-[60%]  text-site-secondary text-center md:text-start">
                    <div className="inline-block mb-6 ">
                        <h2 className="mb-1 text-sm md:text-lg lg:text-2xl font-bold uppercase">
                            {event.isRevealed
                                ? event.eventName
                                : '??? Competition'}
                        </h2>
                        <span className="font-semibold uppercase text-[0.6rem] md:text-[0.6rem] lg:text-xs  px-2 py-1 rounded-md bg-white text-site-main">
                            Deadline of Application: {formattedDeadline}
                        </span>
                    </div>
                    <p className="font-yaldevi mb-6 text-[0.6rem] md:text-[0.7rem] lg:text-base">
                        {event.description}
                    </p>
                    <div className="flex justify-around text-[0.6rem] md:text-xs lg:text-base">
                        <Link
                            href={event.eventURL}
                            className=" w-2/5  text-center py-2 rounded border bg-site-secondary text-site-main hover:bg-site-main  hover:text-site-secondary cursor-pointer"
                        >
                            Apply
                        </Link>
                        <button
                            onClick={onClose}
                            className="w-2/5 text-center py-2 rounded border hover:text-site-main hover:bg-white cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
