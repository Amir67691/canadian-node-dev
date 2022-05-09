import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navigation.css';
const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' style={{ padding: 0 }}>
        <Container fluid className='px-3 nav_container'>
          <div>
            <Navbar.Brand href='/' className='brand_link'>
              XCASH CENTRAL
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls='navbarScroll' className='menu' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='right-menu'>
                <Nav.Link href='/xcash_merch' className='link'>
                  XCASH Merch
                </Nav.Link>
                <Nav.Link href='/delegates' className='link'>
                  Delegates
                </Nav.Link>
                <Nav.Link href='/xcash_news' className='link'>
                  XCASH News
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
