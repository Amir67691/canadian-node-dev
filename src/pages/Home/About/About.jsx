import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CashVector from './../../../assests/images/cash.png';
import ListItem from './../../../components/List';
import './about.css';
const About = () => {
  let features = [
    {
      title: `FlexPrivacy - Private and public transactions on the same
    blockchain`,
      description: `Private by default, X-Cash's FlexPrivacy lets the
    user decide if he/she wants the transaction to be made
    public.`,
    },
    {
      title: `Delegated-Proof-of-Private-Stake - X-Cash custom consensus
    designed for privacy coins`,
      description: `X-Cash consensus model gets rid
    of the decentralized yet unsustainable PoW consensus to
    propose its own variation of a DPoS with DBFT consensus.`,
    },
    {
      title: `Sidechains - The next step in blockchain hosting `,
      description: `X-Cash will
    make it easy to create and host your own blockchain, while
    being able to profit from X-Cash's unique features.`,
    },
  ];

  return (
    <>
      <Container className='about-container'>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className='about-heading'>
              <h1>About</h1>
              <img src={CashVector} alt='Icon' />
              <h1>cash</h1>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className='about-intro'>
              <p>
                The X-Cash Foundation is an open-source, no-ICO blockchain
                project launched in 2018 developing a privacy centered
                cryptocurrency inheriting from Monero and bringing new
                innovation in the privacy coin space.
              </p>
            </div>
            <div className='about-features'>
              <ul>
                <p className='list-heading'>X-Cash main features are: </p>
                {features.map((value, index) => {
                  return (
                    <ListItem
                      key={index}
                      title={value.title}
                      description={value.description}
                    />
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
