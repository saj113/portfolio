import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import NavigationBar from './components/NabigationBar/NavigationBar';
import Header from './components/Header/Header';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';
import {AppContextProvider} from './context/AppContext';
import {data} from './data';
import Content from './components/Content/Content';

const App = () => {
  return (
    <AppContextProvider value={{...data}}>
      <Container className="desktop-bottom-margin">
        <div className="mt-md-5 mt-sm-2 py-5 d-flex flex-column">
          <Row className="mb-5 justify-content-end">
            <Col md="10">
              <Header />
            </Col>
          </Row>
          <Row className="mb-5 justify-content-end">
            <Col md="10">
              <SocialMediaBar />
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="position-fixed">
                <NavigationBar />
              </div>
            </Col>
            <Col>
              <Content />
            </Col>
          </Row>
        </div>
      </Container>
    </AppContextProvider>
  );
};

export default App;
