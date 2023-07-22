import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {useAppContext} from '../../context/AppContext';

const SocialMediaBar: React.FC = () => {
  const {socialMediaLinks} = useAppContext();
  return (
    <Navbar className="social-links justify-content-start">
      <Navbar.Collapse>
        <Nav className="ml-auto">
          { socialMediaLinks.map((link, index) => (
            <Nav.Link key={index} href={link.link}>
              <i className={`bi ${link.icon} fs-4`}></i>
            </Nav.Link>
          )) }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SocialMediaBar;
