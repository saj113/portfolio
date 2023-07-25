import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import NavigationBar from './components/NabigationBar/NavigationBar';
import Header from './components/Header/Header';
import {AppContextProvider} from './context/AppContext';
import {data} from './data';
import Content from './components/Content/Content';

const App = () => {
  return (
    <AppContextProvider value={{...data}}>
      <Container className="desktop-bottom-margin">
        <div className="mt-md-5 mt-sm-2 py-5 d-flex flex-column">
          <Row>
            <Col md="2">
              <NavigationBar />
            </Col>
            <Col md="10">
              <div className="mb-5">
                <Header />
              </div>
              <Content />
            </Col>
          </Row>
        </div>
      </Container>
    </AppContextProvider>
  );
};

export default App;
