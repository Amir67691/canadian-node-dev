import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../../components/Navigation';
import './header.css';
const Header = () => {
  return (
    <>
      <Container fluid className='header'>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <h1 className='header-heading'>
            Lorem ipsum
            <br />
            Lorem ipsum, Lorem ipsum!
          </h1>
        </Row>
      </Container>
    </>
  );
};

export default Header;
