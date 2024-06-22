'use client';
import React, { useRef, useState, useEffect } from 'react';

export const EventTimer = () => {
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

    return (
        <div className="fixed p-2 xs:p-3 md:p-4 bg-black/50 z-20  top-32 lg:top-52 right-0 ">
            <div className="flex flex-col items-center xs:gap-y-1">
                <p className="font-bold text-xs md:text-base lg:text-xl tracking-wide">
                    Otakufest is coming soon!
                </p>
                <p className="text-xs">We will launch in</p>
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
        </div>
    );
};
