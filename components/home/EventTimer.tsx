'use client';
import { IoMdClock } from 'react-icons/io';
import React, { useRef, useState, useEffect } from 'react';

export const EventTimer = () => {
    const [isTimerVisible, setIsTimerVisible] = useState<boolean>(false);
    const [timer, setTimer] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    let interval = useRef<number | null>(null);

    const startTimer = () => {
        const countdownDate = new Date('August 17, 2024 00:00:00').getTime();

        interval.current = window.setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // Stop timer if the countdown is finished
                if (interval.current) {
                    clearInterval(interval.current);
                }
            } else {
                // Update the timer state
                setTimer({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0'),
                });
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);

    const handleVisibilityToggle = () => {
        setIsTimerVisible(!isTimerVisible);
    };

    return (
        <div className="flex fixed p-2 xs:p-3 md:p-4 bg-black/50 z-20  top-32 lg:top-52 right-0">
            <div
                className="flex flex-col items-center  xs:gap-y-1"
                style={{
                    transformOrigin: 'top center',
                    animation: isTimerVisible
                        ? 'growDown 500ms ease-out forwards'
                        : 'none',
                    display: isTimerVisible ? 'block' : 'none',
                }}
            >
                <p className="font-bold text-xs md:text-base lg:text-xl tracking-wide text-center">
                    Otakufest is coming soon!
                </p>
                <p className="text-xs text-center">We will launch in</p>
                <div className="flex justify-evenly gap-x-2 w-full px-4">
                    <div className="flex flex-col items-center">
                        <span className="text-xs md:text-base  lg:text-2xl font-bold">
                            {timer.days}
                        </span>
                        <span className="text-xs">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs md:text-base  lg:text-2xl font-bold">
                            {timer.hours}
                        </span>
                        <span className="text-xs">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs md:text-base  lg:text-2xl font-bold">
                            {timer.minutes}
                        </span>
                        <span className="text-xs">Mins</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs md:text-base  lg:text-2xl font-bold">
                            {timer.seconds}
                        </span>
                        <span className="text-xs">Secs</span>
                    </div>
                </div>
            </div>
            <button
                onClick={handleVisibilityToggle}
                className={`animate-pulse flex items-center hover:scale-110 duration-500 ${isTimerVisible ? 'justify-end' : 'justify-center'}`}
            >
                <IoMdClock size={30} />
            </button>
        </div>
    );
};
