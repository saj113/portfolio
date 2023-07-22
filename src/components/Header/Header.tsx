import React from 'react';
import pdf from './resume.pdf';

const Header: React.FC = () => (
    <div className="header mb-md-5">
        <div className="header__title">Oleksandr Holub</div>
        <div className="header__description">Software Engineer</div>
        <a className="link icon-link icon-link-hover mt-2" href={pdf} target="_blank">
            View my resume
            <i className="bi bi-arrow-right"></i>
        </a>
    </div>
);

export default Header;
