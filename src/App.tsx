import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import NavigationBar from './components/NabigationBar/NavigationBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';

const App = () => {
  return (
      <Container className="container-md mb-md-5">
          <div className="mt-md-5 mt-sm-2 py-5">
              <Row>
                  <Col md="3">
                      <div >
                          <NavigationBar />
                          <div className="mb-sm-4">
                              <SocialMediaBar />
                          </div>
                      </div>
                  </Col>
                  <Col>
                      <Row>
                          <About />
                      </Row>
                      <Row className="mt-md-5 mt-sm-2">
                          <Experience />
                      </Row>
                      <Row className="mt-md-5 mt-sm-2">
                          <Skills />
                      </Row>
                  </Col>
              </Row>
          </div>
      </Container>
  );
};

export default App;
