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
            <div className="flex items-center lg:mt-16 rounded-lg bg-site-main lg:w-[70%] p-5 justify-center space-x-5">
                <figure className="relative aspect-square  w-28 sm:w-52 md:w-52 lg:w-64 xl:w-[28rem] duration-200 flex justify-center items-center">
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
                <div className="text-start pr-3 rounded-lg w-11/12 md:w-1/2 lg:w-[60%]  text-site-secondary">
                    <h2 className="text-2xl font-bold uppercase">
                        {event.isRevealed ? event.eventName : '??? Competition'}
                    </h2>
                    <p className="mb-6 font-semibold uppercase">
                        Deadline of Application: {formattedDeadline}
                    </p>
                    <p className="font-yaldevi mb-10">{event.description}</p>
                    <div className="flex justify-evenly">
                        <Link
                            href={event.eventURL}
                            className=" px-8 py-2 rounded border hover:text-site-main hover:bg-white cursor-pointer"
                        >
                            Apply
                        </Link>
                        <button
                            onClick={onClose}
                            className=" px-8 py-2 rounded border hover:text-site-main hover:bg-white cursor-pointer"
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
