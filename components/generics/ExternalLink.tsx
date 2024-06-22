import React from 'react';

interface PropsInterface {
    content: string;
    link?: string;
}

const ExternalLink = (props: PropsInterface) => {
    const { content, link } = props;
    return (
        <span className="text-site-main border-2 border-site-main px-3 py-2 rounded-md text-sm">
            <a href={link}>{content}</a>
        </span>
    );
};

export default ExternalLink;
