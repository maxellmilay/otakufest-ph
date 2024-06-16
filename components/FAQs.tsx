'use client';
import React, { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { OF24_BBQ, OF24_FISH, OF24_LEAF, OF24_SHRIMP } from '@/enums/imageUrls';
import Image from 'next/image';

export const Faq = () => {
    const sections = [
        {
            title: 'GENERAL INFORMATION',
            items: [
                { question: 'When and where is Otakufest 2024?' },
                { question: 'Is there a theme for #OF24?' },
                { question: 'Does my cosplay need to follow the theme?' },
            ],
        },
        {
            title: 'TICKETS',
            items: [{ question: 'Can I buy tickets?' }],
        },
        {
            title: 'VENUE AND TRANSPORTATION',
            items: [{ question: 'How do I get to the venue?' }],
        },
        {
            title: 'COSPLAY GUIDELINES',
            items: [{ question: 'Can I cosplay anything I want?' }],
        },
        {
            title: 'OTHERS',
            items: [
                { question: 'Can I bring my pet?' },
                { question: 'Can I sell without a booth?' },
                { question: 'What happens if I lose/find an item?' },
                { question: 'Is this your event/announcement?' },
            ],
        },
    ];

    const [expandedItems, setExpandedItems] = useState(
        sections.map((section) => Array(section.items.length).fill(false))
    );

    // Function to toggle the item at a given index within a section
    const toggleItem = (sectionIndex: number, itemIndex: number) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[sectionIndex][itemIndex] =
            !newExpandedItems[sectionIndex][itemIndex];
        setExpandedItems(newExpandedItems);
    };

    return (
        <section className="bg-white flex flex-col items-center mt-12 text-site-main z-10 space-y-5  relative mb-4 overflow-hidden">
            {sections.map((section, sectionIndex) => (
                <div
                    key={sectionIndex + section.title}
                    className="md:w-[45rem] w-[90%] z-10 md:px-4"
                >
                    <h1 className="md:text-2xl lg:text-3xl text-xl font-lato font-black">
                        {section.title}
                    </h1>
                    <div className="">
                        {section.items.map((item, itemIndex) => (
                            <div
                                className="text-base md:text-lg lg:text-xl font-yaldevi flex flex-col pr-5 border-b-2 z-10 "
                                key={itemIndex + item.question}
                            >
                                <div
                                    className={`flex flex-row justify-between items-center cursor-pointer p-4 ${expandedItems[sectionIndex][itemIndex] ? 'border-[1px] border-b-2 border-site-main' : ''}`}
                                    onClick={() =>
                                        toggleItem(sectionIndex, itemIndex)
                                    }
                                >
                                    <span>{item.question}</span>
                                    <AiFillQuestionCircle
                                        className={`cursor-pointer z-10 ${expandedItems[sectionIndex][itemIndex] ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
                                    />
                                </div>
                                <div
                                    className={`text-sm md:text-base lg:text-lg ml-8 w-[92%] text-justify  ${expandedItems[sectionIndex][itemIndex] ? 'p-4 max-h-96 overflow-y-auto transition-max-height duration-300 ease-out' : 'max-h-0 overflow-hidden transition-max-height duration-300 ease-out'}`}
                                >
                                    {sectionIndex === 0 && itemIndex === 0 && (
                                        <p>
                                            Otakufest 2024 will be held on{' '}
                                            <strong>
                                                AUGUST 17-18, 2024 at Sky Hall
                                                and Sky Park, SM Seaside City
                                                Cebu, Philippines
                                            </strong>
                                            . Event doors open at 10AM on both
                                            days!
                                        </p>
                                    )}
                                    {sectionIndex === 0 && itemIndex === 1 && (
                                        <p>Homecooked food! 🍳</p>
                                    )}
                                    {sectionIndex === 0 && itemIndex === 2 && (
                                        <p>Nope! It&apos;d be cool, though</p>
                                    )}
                                    {sectionIndex === 1 && itemIndex === 0 && (
                                        <p>
                                            We know you&apos;re excited (us
                                            too!), but pre-orders for ticket
                                            sales will release soon! 👀
                                        </p>
                                    )}
                                    {sectionIndex === 2 && itemIndex === 0 && (
                                        <>
                                            <p>
                                                To get to SM Seaside, you have
                                                the following options:
                                            </p>
                                            <ul className="text-base list-disc ml-10">
                                                <li>
                                                    Take{' '}
                                                    <a
                                                        className="underline"
                                                        href="https://www.google.com/maps/dir//SM+Seaside+City+Cebu,+Cebu+South+Coastal+Rd,+Antuwanga,+Cebu+City,+Cebu/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x33a99de3d56b8723:0x86b681767d324454!3e0?sa=X&ved=1t:3747&ictx=111&entry=tts"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        these directions
                                                    </a>{' '}
                                                    via private transportation
                                                </li>
                                                <li>
                                                    Use ride-hailing services
                                                    (taxis) or applications
                                                    (Grab, Maxim, Angkas,
                                                    MoveIt, etc.)
                                                </li>
                                                <li>
                                                    Via MyBus stops located
                                                    around Cebu City
                                                </li>
                                            </ul>
                                            <p>
                                                When you reach SM Seaside, head
                                                to the 3rd Floor in the Mountain
                                                Wing to reach the entrance of
                                                the Sky Hall!
                                            </p>
                                        </>
                                    )}
                                    {sectionIndex === 3 && itemIndex === 0 && (
                                        <>
                                            <p>
                                                As long as it abides by our
                                                rules! Explicit (NSFW, sexual,
                                                or R18) cosplays and dangerous
                                                props are not allowed. If
                                                you&apos;d like to bring props,
                                                please be aware of the following
                                                guidelines and restrictions:
                                            </p>
                                            <ul className="text-base list-disc ml-10">
                                                <li>
                                                    Fully metallic martial arts
                                                    props are not allowed!
                                                    (swords, knives, etc.)
                                                </li>
                                                <li>
                                                    Props that can cause fire or
                                                    use chemicals for effects
                                                    are not allowed!
                                                </li>
                                                <li>
                                                    Props that are explicit/NSFW
                                                    are not allowed!
                                                </li>
                                                <li>
                                                    Firearms, such as loaded
                                                    airsoft weapons, are not
                                                    allowed!
                                                </li>
                                            </ul>
                                        </>
                                    )}
                                    {sectionIndex === 4 && itemIndex === 0 && (
                                        <p>
                                            Of course! Just be sure to clean up
                                            after your pet, and make sure that
                                            they are wearing pet diapers for
                                            cleanliness measures.
                                        </p>
                                    )}
                                    {sectionIndex === 4 && itemIndex === 1 && (
                                        <p>
                                            Nope! Due to venue policies, any
                                            selling activity must be documented.
                                            Please feel free to apply for booths
                                            so you can safely and legally sell
                                            at the event! Illegal selling
                                            activities may result in a permanent
                                            ban as well as confiscation of all
                                            goods being sold.
                                        </p>
                                    )}
                                    {sectionIndex === 4 && itemIndex === 2 && (
                                        <p>
                                            Please direct all concerns with lost
                                            or found items to our Techbooth,
                                            which will be found near the stage
                                            of our main event area! When the
                                            event ends, you may contact us via
                                            our social media pages to inquire
                                            about our inventory of lost items.
                                        </p>
                                    )}
                                    {sectionIndex === 4 && itemIndex === 3 && (
                                        <>
                                            <p>
                                                All Otakufest PH&apos;s OFFICIAL
                                                announcements are on our social
                                                media pages below. If you see
                                                someone using our name or
                                                posting misinformation about our
                                                event, please let us know.
                                            </p>
                                            <ul className="text-base list-disc ml-10">
                                                <li>Facebook: @otakufestph</li>
                                                <li>Instagram: @otakufestph</li>
                                                <li>Twitter: @otakufestph</li>
                                                <li>Tiktok: @otakufestph</li>
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <figure className="absolute right-[-190px]   bottom-[-150px] rotate-12  overflow-hidden">
                <Image
                    src={OF24_FISH}
                    alt="logo"
                    width={400}
                    height={300}
                    className="hidden lg:inline  lg:w-[350px] lg:h-[300px] xl:w-[400px] xl:h-[300px]"
                />
            </figure>
            <figure className="absolute right-[-15px]   top-72 rotate-12 overflow-hidden ">
                <Image
                    src={OF24_BBQ}
                    alt="logo"
                    width={150}
                    height={100}
                    className="hidden lg:inline xl:w-[150px] xl:h-[300px]"
                />
            </figure>
            <figure className="absolute left-[-15px] top-30 rotate-12 overflow-hidden ">
                <Image
                    src={OF24_LEAF}
                    alt="logo"
                    width={250}
                    height={100}
                    className=" hidden lg:inline lg:w-[180px] lg:h-[200px] xl:w-[250px] xl:h-[300px]"
                />
            </figure>
            <figure className="absolute left-[-15px]   bottom-36 rotate-12  overflow-hidden">
                <Image
                    src={OF24_SHRIMP}
                    alt="logo"
                    width={150}
                    height={100}
                    className="hidden lg:inline xl:w-[150px] xl:h-[200px]"
                />
            </figure>
        </section>
    );
};
