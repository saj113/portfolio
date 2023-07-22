import React from "react";

type ArrowLinkProps = {
    href: string;
    text: string;
    className?: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = (props) => {
    const className = `regular-text-color icon-link icon-link-hover mt-2 ${props.className ? props.className : ''}`;
    return <a className={className} href={props.href} target="_blank">
        {props.text}
        <i className="bi bi-arrow-right"></i>
    </a>;
};

export default ArrowLink;
