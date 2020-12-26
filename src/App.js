import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {Container, Row, Col} from 'react-bootstrap';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
   <>
      <Container fluid className = 'container'>
        <img src = '/logo.png' href = 'facebookLogo' className="logo"></img>
      </Container>
      <Container fluid>
        <Row>
      <Col sm = {8}><ProfilePhoto></ProfilePhoto></Col>
      <Col sm = {4}><FullName></FullName>
      <Adress></Adress>
      </Col>
      </Row>
      </Container>
      </>
  );
}

export default App;
