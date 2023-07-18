import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

type SocialMediaLink = {
    link: string;
    icon: string;
};

const links: SocialMediaLink[] = [{
    link: 'https://github.com/saj113',
    icon: 'bi-github',
}, {
    link: 'https://instagram.com/aleksandr.golub.113',
    icon: 'bi-instagram',
}, {
    link: 'https://www.linkedin.com/in/oleksandr-holub-ua/',
    icon: 'bi-linkedin',
}, {
    link: 'https://www.facebook.com/aleksander.golub.9/',
    icon: 'bi-facebook',
}];

const SocialMediaBar: React.FC = () => (
    <Navbar className="social-links justify-content-start">
        <Navbar.Collapse>
            <Nav className="ml-auto">
                { links.map((link, index) => (
                    <Nav.Link key={index} href={link.link}>
                        <i className={`bi ${link.icon} fs-4`}></i>
                    </Nav.Link>
                )) }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default SocialMediaBar;
