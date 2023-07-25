import React from 'react';
import pdf from './resume.pdf';
import ArrowLink from '../ArrowLink';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar';

const Header: React.FC = () => (
  <div className="header">
    <div className="header__title">Oleksandr Holub</div>
    <div className="header__description">Software Engineer</div>
    <ArrowLink className="mt-2" href={pdf} text="View my resume" />
    <SocialMediaBar />
  </div>
);

export default Header;
