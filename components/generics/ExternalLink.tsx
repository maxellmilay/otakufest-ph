import React from 'react';

interface PropsInterface {
    content: string;
    link?: string;
}

const ExternalLink = (props: PropsInterface) => {
    const { content, link } = props;
    return (
        <p className="text-site-main text-center border-2 border-site-main px-3 py-2 rounded-md text-xs xl:text-sm w-fit">
            <a href={link}>{content}</a>
        </p>
    );
};

export default ExternalLink;
