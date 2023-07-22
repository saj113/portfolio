import React from 'react';
import pdf from './resume.pdf';
import ArrowLink from "../ArrowLink";

const Header: React.FC = () => (
    <div className="header mb-md-5">
        <div className="header__title">Oleksandr Holub</div>
        <div className="header__description">Software Engineer</div>
        <ArrowLink className="mt-2" href={pdf} text="View my resume" />
    </div>
);

export default Header;
