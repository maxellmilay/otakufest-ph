import React from 'react';
import Link from 'next/link';

interface PropsInterface {
    content: string;
    route: string;
}

const InternalLink = (props: PropsInterface) => {
    const { content, route } = props;
    return (
        <Link
            href={route}
            className="px-3 py-2 border-2 border-site-main rounded-md text-xs xl:text-sm hover:bg-site-main hover:border-site-secondary hover:text-site-secondary duration-200 hover:cursor-pointer hover:scale-110"
        >
            {content}
        </Link>
    );
};

export default InternalLink;
