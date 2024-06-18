import React from 'react';
import Link from 'next/link';
import Routes from '@/enums/routes';

interface PropsInterface {
    setIsNavbarDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TheNavBar = (props: PropsInterface) => {
    const { setIsNavbarDropdownOpen } = props;
    return (
        <>
            <Link
                href="/#guestSection"
                className="hover:-translate-y-1 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                Guests
            </Link>
            <Link
                href="/#shirtSection"
                className="hover:-translate-y-1 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                Merch
            </Link>
            <Link
                href="/#eventSection"
                className="hover:-translate-y-1 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                Events
            </Link>
            <Link
                href={Routes.FAQS}
                className="hover:-translate-y-1 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                FAQs
            </Link>
            <Link
                href={Routes.CONTACT_US}
                className="border-lg"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                <div className="md:bg-white md:px-5 md:py-2 md:rounded-lg md:text-site-main md:border md:hover:bg-site-main md:hover:border-site-secondary md:hover:text-site-secondary md:duration-200">
                    Contact Us
                </div>
            </Link>
        </>
    );
};

export default TheNavBar;
