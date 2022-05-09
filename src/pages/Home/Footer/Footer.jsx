import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';
const Footer = () => {
  return (
    <>
      <Container fluid className='footer-container'>
        <Row>
          <Col lg={2} md={2} sm={3} xs={6}>
            <ul>
              <li>XCASH CENTRAL</li>
              <li>XCASH MERCH</li>
            </ul>
          </Col>
          <Col lg={2} md={2} sm={3} xs={6}>
            <ul className=' text-center'>
              <li>Delegates</li>
              <li>Canadian Note</li>
            </ul>
          </Col>
          <Col lg={2} md={2} sm={3} xs={6}>
            <ul>
              <li>XCash News</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className='address'>
              <p>UK, London</p>
              <p>+1 891 481 483</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
