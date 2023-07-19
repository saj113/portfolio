import React from 'react';
import { Link } from 'react-scroll';


type SectionLinkProps = {
    to: string;
    title: string;
};
const SectionLink: React.FC<SectionLinkProps> = ({ to, title }) => (
    <Link
        className="section-link"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-200}
        duration={50}>{title}</Link>
);

const NavigationBar: React.FC = () => {

    return (
        <div className="navigation-bar justify-content-start d-none d-md-flex">
            <ul>
                <li><SectionLink to="section-about" title="About" /></li>
                <li><SectionLink to="section-experience" title="Experience" /></li>
                <li><SectionLink to="section-skills" title="Skills" /></li>
                <li><SectionLink to="section-leetcode" title="LeetCode" /></li>
                <li><SectionLink to="section-education" title="Education" /></li>
            </ul>
        </div>
    );
};

export default NavigationBar;
