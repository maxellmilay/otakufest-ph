'use client';
import React, { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { OF24_BBQ, OF24_FISH, OF24_LEAF, OF24_SHRIMP } from '@/enums/imageUrls';
import Image from 'next/image';

export const Faq = () => {
    const sections = [
        {
            title: 'GENERAL INFORMATION',
            items: [
                {
                    question: 'When and where is Otakufest 2024?',
                    answer: (
                        <p>
                            Otakufest 2024 will be held on{' '}
                            <span className="font-bold">
                                AUGUST 17-18, 2024 at Sky Hall and Sky Park, SM
                                Seaside City Cebu, Philippines
                            </span>
                            {'. '}Event doors open at 10AM on both days!
                        </p>
                    ),
                },

                {
                    question: 'Is there a theme for #OF24?',
                    answer: <p>Homecooked food! 🍳</p>,
                },
                {
                    question: 'Does my cosplay need to follow the theme?',
                    answer: <p>Nope! It&apos;d be cool, though</p>,
                },
                {
                    question: 'How do I get to the venue?',
                    answer: (
                        <>
                            <p>
                                To get to SM Seaside, you have the following
                                options:
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
                                    Use ride-hailing services (taxis) or
                                    applications (Grab, Maxim, Angkas, MoveIt,
                                    etc.)
                                </li>
                                <li>
                                    Via MyBus stops located around Cebu City
                                </li>
                            </ul>
                            <p>
                                When you reach SM Seaside, head to the 3rd Floor
                                in the Mountain Wing to reach the entrance of
                                the Sky Hall!
                            </p>
                        </>
                    ),
                },
                {
                    question: 'Can I cosplay anything I want?',
                    answer: (
                        <>
                            <p>
                                As long as it abides by our rules! Explicit
                                (NSFW, sexual, or R18) cosplays and dangerous
                                props are not allowed. If you&apos;d like to
                                bring props, please be aware of the following
                                guidelines and restrictions:
                            </p>
                            <ul className="text-base list-disc ml-10">
                                <li>
                                    Fully metallic martial arts props are not
                                    allowed! (swords, knives, etc.)
                                </li>
                                <li>
                                    Props that can cause fire or use chemicals
                                    for effects are not allowed!
                                </li>
                                <li>
                                    Props that are explicit/NSFW are not
                                    allowed!
                                </li>
                                <li>
                                    Firearms, such as loaded airsoft weapons,
                                    are not allowed!
                                </li>
                            </ul>
                        </>
                    ),
                },
                {
                    question: 'Can I bring my pet?',
                    answer: (
                        <p>
                            Of course! Just be sure to clean up after your pet,
                            and make sure that they are wearing pet diapers for
                            cleanliness measures.
                        </p>
                    ),
                },
                {
                    question: 'Can I sell without a booth?',
                    answer: (
                        <p>
                            Nope! Due to venue policies, any selling activity
                            must be documented. Please feel free to apply for
                            booths so you can safely and legally sell at the
                            event! Illegal selling activities may result in a
                            permanent ban as well as confiscation of all goods
                            being sold.
                        </p>
                    ),
                },
                {
                    question: 'What happens if I lose/find an item?',
                    answer: (
                        <p>
                            Please direct all concerns with lost or found items
                            to our Techbooth, which will be found near the stage
                            of our main event area! When the event ends, you may
                            contact us via our social media pages to inquire
                            about our inventory of lost items.
                        </p>
                    ),
                },
                {
                    question: 'Is this your event/announcement?',
                    answer: (
                        <>
                            <p>
                                All Otakufest PH&apos;s OFFICIAL announcements
                                are on our social media pages below. If you see
                                someone using our name or posting misinformation
                                about our event, please let us know.
                            </p>
                            <ul className="text-base list-disc ml-10">
                                <li>Facebook: @otakufestph</li>
                                <li>Instagram: @otakufestph</li>
                                <li>Twitter: @otakufestph</li>
                                <li>Tiktok: @otakufestph</li>
                            </ul>
                        </>
                    ),
                },
            ],
        },
        {
            title: 'TICKET AND ADMISSION',
            items: [
                {
                    question: 'When will pre-orders for ticket sales begin?',
                    answer: <p>June 15 until July 31! 💥</p>,
                },
                {
                    question: 'Can I pay for the tickets in cash?',
                    answer: (
                        <p>
                            Online payments only! Cash is only accepted during
                            the scheduled meet-ups! Follow our social media
                            pages to see when and where we&apos;ll be available
                            for in-person ticket purchases.
                        </p>
                    ),
                },
                {
                    question:
                        'I bought a ticket, but did not receive a confirmation email...',
                    answer: (
                        <>
                            <p>Please follow these steps!</p>
                            <ul className="text-base list-disc ml-10">
                                <li>
                                    Check your spam folder in case you missed
                                    it!
                                </li>
                                <li>
                                    Fill up the form again in the case that
                                    there was a typo or an error with inputting
                                    your email.
                                </li>
                                <li>
                                    If the previous steps didn&apos;t work,
                                    please contact our finance team at this
                                    email: sales.otakufest@gmail.com
                                </li>
                            </ul>
                        </>
                    ),
                },
                {
                    question:
                        'Will I receive physical tickets if I pre-ordered my tickets?',
                    answer: (
                        <p>
                            If your tickets were purchased online, you&apos;ll
                            be receiving an e-ticket in your email instead of a
                            physical ticket.
                        </p>
                    ),
                },
                {
                    question:
                        "I'll be cosplaying in the event, do I still need to pay for tickets?",
                    answer: <p>Yes, you still need to pay for a ticket.</p>,
                },
                {
                    question:
                        'I am accompanying my child as a parent/guardian, do I still need to pay for a ticket?',
                    answer: (
                        <p>
                            Yes, you still need to pay for a ticket. Children
                            aged 2 and below have free entry, and children aged
                            3-7 can purchase tickets half-off! These rates for
                            children only apply for walk-in ticket purchases. If
                            you have children, it is recommended that you
                            pre-order tickets online for yourself, and then pay
                            the discounted rates on the days of the event at the
                            pre-order registration booth.
                        </p>
                    ),
                },
                {
                    question: 'Are there discounts for seniors/PWD/children?',
                    answer: (
                        <p>
                            Yes! There are discounts available for
                            seniors/PWD/children, but these are only available
                            for on-the-day walk-in purchases at a separate line
                            at our registration booths.
                        </p>
                    ),
                },
                {
                    question: 'Is reservation of tickets allowed?',
                    answer: <p>No, reservations of tickets are not allowed.</p>,
                },
                {
                    question:
                        'What do I need to bring to the registration booth on the days of the event?',
                    answer: (
                        <>
                            <p>Please bring the following items with you:</p>
                            <ul className="text-base list-disc ml-10">
                                <li>Valid ID (School IDs are accepted)</li>
                                <li>
                                    If you pre-ordered online or at meet-ups,
                                    bring your e-ticket or screenshot of
                                    e-ticket.
                                </li>
                                <li>
                                    If you did not pre-order, bring your payment
                                    for the event pass. (Exact amount
                                    encouraged!)
                                </li>
                            </ul>
                        </>
                    ),
                },
                {
                    question: 'When will I receive my e-ticket?',
                    answer: (
                        <p>
                            E-tickets are included in your final confirmation
                            email. After filling out the form, kindly wait for
                            5-7 business days for your final confirmation email.
                        </p>
                    ),
                },
                {
                    question: 'Can I transfer my ticket?',
                    answer: (
                        <p>
                            Yes! No need to inform us. Just make sure that you
                            keep your tickets secured, especially as your
                            tickets unique code will only work ONCE. Sharing it
                            online or with other people will put your entrance
                            at risk.
                        </p>
                    ),
                },
                {
                    question: 'Can I refund my ticket?',
                    answer: <p>Tickets are non-refundable.</p>,
                },
                {
                    question: 'Am I allowed to buy a M&G ticket on the day?',
                    answer: (
                        <p>
                            Yes, if slots are still available! We suggest
                            following our page closely for any updates on slot
                            availability.
                        </p>
                    ),
                },
            ],
        },
        {
            title: 'BOOTHS',
            items: [
                {
                    question: 'Can I booth at your event?',
                    answer: (
                        <>
                            <ul className="space-y-1">
                                <li>
                                    <span className="font-semibold">
                                        At the moment, all booth applications
                                        are closed.
                                    </span>{' '}
                                    Please do NOT use our inquiry lines to ask
                                    if you may still apply beyond the deadlines,
                                    to ask if there are still slots, or to
                                    appeal your application.
                                </li>
                                <li className="font-semibold">
                                    If your application was not accepted, it is
                                    likely that you are waitlisted and may be
                                    contacted in case a slot becomes available.
                                </li>
                                <li>
                                    If you are interested in becoming a business
                                    partner, media partner, or sponsor, feel
                                    free to contact us!
                                </li>
                            </ul>
                        </>
                    ),
                },
                {
                    question: 'Did you receive my application?',
                    answer: (
                        <p>
                            You can always ask our team for verification!
                            Usually, we have an automailer system to confirm
                            your submission. If you didn&apos;t get one, please
                            inform us ASAP or try again!
                        </p>
                    ),
                },
                {
                    question: 'Can I edit my application?',
                    answer: (
                        <p>
                            For the ease of screening, you may not edit your
                            submitted application. However, you may resubmit or
                            inform us if there are slight changes!
                        </p>
                    ),
                },
                {
                    question: 'Can I sell food at my booth?',
                    answer: <p>Only if your booth is in Sky Garden B!</p>,
                },
                {
                    question: 'Can I sell NSFW/Gore/etc. at my booth?',
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                Rule of thumb: if it&apos;s not works that
                                you&apos;d show to a young child, then it should
                                be censored or kept in an off-display catalog!
                            </li>
                            <li>
                                For more information, please refer to our{' '}
                                <a
                                    className="underline underline-offset-4"
                                    href="https://docs.google.com/document/d/1PETa48e8jMo47OjPOm_yGysuU2SELAjki6jwEjATB30/preview#heading=h.z9o8p3kribs"
                                >
                                    product filtering guide!
                                </a>
                            </li>
                        </ul>
                    ),
                },
                {
                    question: 'Can I sell without a booth?',
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                Nope! Due to venue policies, any selling
                                activity must be documented. Please feel free to
                                apply for booths so you can safely and legally
                                sell in the event!
                            </li>
                            <li>
                                Illegal selling activities may result in a
                                permanent ban as well as confiscation of all
                                goods being sold.
                            </li>
                        </ul>
                    ),
                },
                {
                    question: 'About ingress...',
                    answer: (
                        <p>
                            Ingress details will be provided to you by our team
                            close to the event days, please stay tuned for
                            updates in your email/Messenger!
                        </p>
                    ),
                },
            ],
        },
        {
            title: 'ARTIST ALLEY',
            items: [
                {
                    question: 'Can I adopt an artist?',
                    answer: (
                        <>
                            <ul className="space-y-1">
                                <li>
                                    Adopted artists or artist pairs will have
                                    their own spotlight or shared spotlight for
                                    posting on our social media, as well as
                                    their own ID.
                                </li>
                                <li>
                                    Just let our team know by responding to the
                                    confirmation email so that our team can get
                                    it sorted.
                                </li>
                                <li>
                                    Please be aware that adopted artists are
                                    subject to{' '}
                                    <span className="font-semibold">
                                        submit their own samples (minimum of 3)
                                    </span>{' '}
                                    and{' '}
                                    <span className="font-semibold">icon</span>{' '}
                                    for Artist Alley spotlight for screening.
                                </li>
                            </ul>
                        </>
                    ),
                },
                {
                    question:
                        "Can I sell a friend's merch, even if they won't be present at the event?",
                    answer: (
                        <p>
                            They must be listed as an adopted or paired artist,
                            see previous question for more information!
                        </p>
                    ),
                },
                {
                    question:
                        "What's the grid height/max table display height for my booth?",
                    answer: (
                        <ul className="space-y-1">
                            <li>5 feet or 150cm!</li>
                            <li>
                                For reference, one 30cm mesh grid is
                                approximately equal to 1 foot, which means that
                                you are allowed to stack five mesh grids.
                            </li>
                            <li>
                                Please double check your grid size to make sure
                                it is{' '}
                                <span className="font-semibold">30cm</span> and{' '}
                                <span className="font-semibold">not 35cm</span>,
                                as five 35cm grids would equal to a total height
                                of 175cm!
                            </li>
                        </ul>
                    ),
                },
                {
                    question:
                        'Can I decorate my booth space? Can I bring an extra table? Can I bring an x-stand?',
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                You can decorate your booth space as you please!
                                However, please keep in mind to keep decorations
                                ON the table or on its sides (such as hanging
                                banners, fairy lights, etc.).
                            </li>
                            <li>
                                You may{' '}
                                <span className="font-semibold">not</span> bring
                                any extra tables or chairs due to venue policies
                                :(
                            </li>
                            <li>
                                Poster stands, x-stands, or other extraneous
                                stands (unless they are placed on top of the
                                table) are not encouraged, as these would be
                                obstructive to the given space and to
                                neighboring booths.
                            </li>
                        </ul>
                    ),
                },
                {
                    question:
                        'Can I plug in my lighting set-up/monitor/etc. devices at my booth?',
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                Yes, but due to limitations with our venue, not
                                all booths can be supplied with a
                                nearby/accessible outlet, which means that we
                                can only provide electricity to{' '}
                                <span className="font-semibold">necessary</span>{' '}
                                purposes, excluding phone or laptop charging.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Please let us know beforehand if you have
                                    any devices that need electricity
                                </span>{' '}
                                by contacting our team.
                            </li>
                        </ul>
                    ),
                },
                {
                    question:
                        "What are the table rates, sizes, and inclusions again? I forgot and didn't take a screenshot...",
                    answer: (
                        <ul className="space-y-3">
                            <li className="font-bold">
                                🍳 SINGLE ARTIST TABLE
                            </li>
                            <li>
                                <span className="font-semibold ">
                                    ✿ SKY HALL 900.00 PHP per day
                                </span>
                                <ul className="list-disc ml-10 space-y-1">
                                    <li>One 2ft × 4ft table with tablecloth</li>
                                    <li>One (1) ID</li>
                                    <li>
                                        • Entrance is inclusive of the tabling
                                        fee for the accepted artist but their
                                        companion must pay ticket rate for
                                        entrance and extra ID
                                    </li>
                                    <li>
                                        Located inside the air-conditioned Sky
                                        Hall
                                    </li>
                                    <li>Selling food is NOT allowed inside</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold ">
                                    ✿ SKY GARDEN B 600.00 PHP per day
                                </span>
                                <ul className="list-disc ml-10 space-y-1">
                                    <li>One 2ft × 4ft table with tablecloth</li>
                                    <li>One (1) ID</li>
                                    <li>
                                        Entrance is inclusive of the tabling fee
                                        for the accepted artist but their
                                        companion must pay ticket rate for
                                        entrance and extra ID
                                    </li>
                                    <li>
                                        Located at the exit close to the
                                        Cosplayer Crosswalk facing the warm and
                                        sunny Sky Park
                                    </li>
                                    <li>Selling food is ALLOWED</li>
                                </ul>
                            </li>

                            <li>
                                <span className="font-bold ">
                                    🍳 ARTIST COLLECTIVE TABLE 1,700.00 PHP per
                                    day
                                </span>
                                <ul className="list-disc ml-10 space-y-1">
                                    <li>
                                        For artist groups with three members and
                                        up! Up to 6 members. (e.g.
                                        Jupiterweathers, Dragoonheart, Kurissan,
                                        crimsonea)
                                    </li>
                                    <li>
                                        One (1) 2ft × 6ft table with tablecloth
                                    </li>
                                    <li>Three (3) IDs</li>
                                    <li>
                                        Entrance is inclusive of the tabling fee
                                        for three collective members but any
                                        additional members must pay ticket rate
                                    </li>
                                    <li>
                                        Located inside the air-conditioned Sky
                                        Hall
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    ),
                },
                {
                    question:
                        "How many people can be behind the booth at one time? I can't do math on my own!",
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                Me too! And for solo artist tables, you can have
                                up to <span className="font-semibold">two</span>{' '}
                                people behind the booth. For collective tables,
                                you can have up to{' '}
                                <span className="font-semibold">three</span>
                            </li>
                            <li>
                                These are our recommendations and we encourage
                                following them as much as possible in order to
                                ensure that the boothing areas are comfortable
                                for all boothers. 🙏
                            </li>
                        </ul>
                    ),
                },
                {
                    question: "What's an Artist Collective?",
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                An{' '}
                                <span className="font-semibold">
                                    Artist Collective
                                </span>{' '}
                                group is specifically for artists that
                                collaborate and partner up with one another to
                                sell their products under one name/entity. On
                                top of this, artist collectives allow for more
                                opportunities for less experienced boothers to
                                be able to sell products and have dependable
                                boothmates without the risks of tabling on their
                                own.
                            </li>
                            <li>
                                Our Artist Collective table option is built
                                around this ideal in order to welcome newer
                                tablers to the convention scene. 🌻
                            </li>
                        </ul>
                    ),
                },
                {
                    question: "How do I submit my Artist Collective's samples?",
                    answer: (
                        <ul className="space-y-1">
                            <li>
                                Please submit the samples under the
                                collective&apos;s name, and NOT as individual
                                artist samples!
                            </li>
                            <li>Example: ArtistCollectiveName_sample1</li>
                        </ul>
                    ),
                },
            ],
        },
        {
            title: 'GUEST AND MEET&GREET',
            items: [
                {
                    question:
                        "Do I need to buy M&G ticket to buy a guest's merch?",
                    answer: (
                        <p>
                            No need! You can buy their merch at their designated
                            merchandise booths found in the convention area.
                        </p>
                    ),
                },

                {
                    question:
                        'Am I allowed to bring gifts/letters/food/etc. for the guests?',
                    answer: (
                        <p>
                            Yes, you are allowed to bring gifts, but it depends
                            on the guests whether they accept it or not.
                        </p>
                    ),
                },
                {
                    question: 'Can the guests sign my personal stuff?',
                    answer: (
                        <p>
                            No, personal items are not allowed to be signed by
                            the guests unless it&apos;s the official merchandise
                            sold by the guests, or the photocards provided
                            during the Meet & Greet.
                        </p>
                    ),
                },
                {
                    question:
                        "What happens if I'm late to the M&G? Can I refund if I miss my session?",
                    answer: (
                        <p>
                            If there is still enough time left, you can catch up
                            with your M&G session. If you miss your session
                            completely, however, you will not be refunded.
                        </p>
                    ),
                },
                {
                    question:
                        'Am I allowed to request fanservice (kabedons, close-proximity poses, etc.) from the guest?',
                    answer: (
                        <p>
                            You are allowed{' '}
                            <span className="font-semibold">
                                ONLY if the guest consents and ONLY during their
                                exclusive M&G sessions
                            </span>
                            . This is also prohibited during merch selling in
                            their designated booths.
                        </p>
                    ),
                },
                {
                    question:
                        'How long is the one-on-one interaction with the guests during their Meet & Greets?',
                    answer: (
                        <p>
                            You will be given up to 2 minutes to personally
                            interact with the guest. Cosplay guests will have a
                            photobooth ready to take as many photos as you can.
                            VTuber guests will have a monitor set-up in a
                            private area where you can speak with them.
                        </p>
                    ),
                },
                {
                    question: 'What do I need to bring for the Meet & Greet?',
                    answer: (
                        <p>
                            Your M&G ticket for entry to your M&G session, guest
                            merch you&apos;ve purchased if you&apos;d like to
                            have them signed, and a phone/camera to take
                            pictures with the guest.
                        </p>
                    ),
                },
                {
                    question:
                        "What happens during the VTuber Meet & Greet? What's the set-up?",
                    answer: (
                        <p>
                            There will be a group Q&A session, which will then
                            be followed by private one-on-one interactions with
                            the guest VTuber. This goes the same way with live
                            guests.
                        </p>
                    ),
                },
                {
                    question:
                        'If I purchase a Meet & Greet ticket, do I still need to purchase a regular ticket?',
                    answer: (
                        <p>
                            Depending on your chosen bundle, your M&G
                            ticket/e-ticket can also serve as your entrance to
                            the event.
                        </p>
                    ),
                },
            ],
        },
        {
            title: 'STAGE AND EVENTS',
            items: [
                {
                    question: 'Do I have to audition for the competitions?',
                    answer: (
                        <>
                            <p>Yes, for the following competitions:</p>
                            <ul className="space-y-1 ml-10 text-sm list-disc">
                                <li>Kara-OK!! Japanese Singing Competition</li>
                                <li>Solo/Duo Asian Groove Showdown</li>
                                <li>Group Asian Groove Showdown</li>
                                <li>Solo/Duo Cosplay Competition</li>
                            </ul>
                            <p>
                                Audition details are found in the
                                competition&apos;s mechanics document found
                                before signing up for the competitions!
                            </p>
                        </>
                    ),
                },
                {
                    question: 'Am I allowed to join multiple competitions?',
                    answer: <p>Yes!</p>,
                },
                {
                    question:
                        'Can I be part of different teams for one competition?',
                    answer: (
                        <p>
                            No, participants are not allowed to cross teams. You
                            are only allowed to join one team for each
                            competition.
                        </p>
                    ),
                },
                {
                    question: 'Can we practice on the stage before the event?',
                    answer: (
                        <p>
                            Yes! The day before the event starts is allotted for
                            stepping and blocking practice so that the
                            competitors are able to do a dry run of their
                            performance.
                        </p>
                    ),
                },
                {
                    question: 'Are there games during stage events?',
                    answer: (
                        <p>
                            Yes, but they&apos;re only announced on the day of
                            the event! Stay tuned to the stage to join 👀
                        </p>
                    ),
                },
                {
                    question: 'Can kids participate in stage audience games?',
                    answer: <p>Only if they&apos;re aged 12 and above!</p>,
                },
                {
                    question: 'What do I need to bring for the Meet & Greet?',
                    answer: (
                        <p>
                            Your M&G ticket for entry to your M&G session, guest
                            merch you&apos;ve purchased if you&apos;d like to
                            have them signed, and a phone/camera to take
                            pictures with the guest.
                        </p>
                    ),
                },
                {
                    question: 'I want to perform on stage!',
                    answer: (
                        <p>
                            Contact us at production.otakufest@gmail.com if
                            you&apos;d like to perform as an intermission number
                            at Otakufest!
                        </p>
                    ),
                },
            ],
        },
        {
            title: 'MERCH AND SALES',
            items: [
                {
                    question: 'When can I receive my merch order?',
                    answer: (
                        <p>
                            Updates to follow! But you can expect that you will
                            be able to pick up your merch order during our event
                            days!
                        </p>
                    ),
                },
                {
                    question: 'Do you sell merch on the days of the event?',
                    answer: (
                        <p>
                            Yes, and we may have extra stock afterward as well!
                        </p>
                    ),
                },
            ],
        },
    ];

    const [expandedItems, setExpandedItems] = useState(
        sections.map((section) => Array(section.items.length).fill(false))
    );

    const [expandedSections, setExpandedSections] = useState(
        Array(sections.length).fill(false)
    );

    // Function to toggle the item at a given index within a section
    const toggleItem = (sectionIndex: number, itemIndex: number) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[sectionIndex][itemIndex] =
            !newExpandedItems[sectionIndex][itemIndex];
        setExpandedItems(newExpandedItems);
    };

    const toggleSection = (sectionIndex: number) => {
        const newExpandedSections = [...expandedSections];
        newExpandedSections[sectionIndex] = !newExpandedSections[sectionIndex];
        setExpandedSections(newExpandedSections);
    };

    return (
        <section className="bg-white flex flex-col items-center mt-12 text-site-main z-10 space-y-5  relative mb-4 overflow-hidden">
            {sections.map((section, sectionIndex) => (
                <div
                    key={sectionIndex + section.title}
                    className={`md:w-[45rem] w-[90%] z-10 md:px-4 p-2 `}
                >
                    <button
                        className={`flex flex-row justify-between items-center cursor-pointer w-full p-2 ${
                            expandedSections[sectionIndex]
                                ? 'border-b-2 border-site-main'
                                : 'border-b-2'
                        }`}
                        onClick={() => toggleSection(sectionIndex)}
                    >
                        <h1 className="md:text-2xl lg:text-3xl text-lg font-lato font-black text-start">
                            {section.title}
                        </h1>
                        <BsArrowDownCircleFill
                            className={`cursor-pointer z-10 ${
                                expandedSections[sectionIndex]
                                    ? 'rotate-180 duration-500'
                                    : 'rotate-0 duration-500'
                            }`}
                        />
                    </button>
                    <div
                        className={`  ${
                            expandedSections[sectionIndex]
                                ? 'max-h-full overflow-y-auto transition-max-height duration-500 ease-out '
                                : 'max-h-0 overflow-hidden transition-max-height duration-500 ease-out'
                        } `}
                    >
                        {section.items.map((item, itemIndex) => (
                            <div
                                className="text-sm md:text-lg items-center  font-yaldevi flex flex-col pr-5   z-10 "
                                key={itemIndex + item.question}
                            >
                                <button
                                    className={`flex flex-row justify-between items-center cursor-pointer w-full  p-4 ${expandedItems[sectionIndex][itemIndex] ? 'border-[1px] border-b-2 border-site-main' : 'border-b-2'}`}
                                    onClick={() =>
                                        toggleItem(sectionIndex, itemIndex)
                                    }
                                >
                                    <span className="text-start w-[90%]">
                                        {item.question}
                                    </span>
                                    <AiFillQuestionCircle
                                        className={`cursor-pointer z-10 ${expandedItems[sectionIndex][itemIndex] ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
                                    />
                                </button>
                                <div
                                    className={`text-xs md:text-base w-[92%] text-justify  ${expandedItems[sectionIndex][itemIndex] ? 'p-4 overflow-y-auto transition-max-height duration-300 ease-out' : 'max-h-0 overflow-hidden transition-max-height duration-300 ease-out'}`}
                                >
                                    {item.answer}
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
