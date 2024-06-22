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
            className="px-3 py-2 border-2 border-site-main rounded-md text-sm"
        >
            {content}
        </Link>
    );
};

export default InternalLink;
