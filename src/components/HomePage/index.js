import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DataAbout } from '../../Data/About.js';
import { DataContact } from '../../Data/Contact.js';

import Quote from './quote.js';
import Logo from './logo.js';
import AboutMe from './aboutme.js';

export default class HomePage extends Component {
  state = {
    data: DataAbout,
    contact: DataContact,
  };
  render() {
    const { data, contact } = this.state;

    return (
      <>
        <Container className='my-3'>
          <Row>
            <Col xs={12} md={7}>
              <Quote />
              <AboutMe data={data.about} />
            </Col>
            <Col xs={12} md={4} className='justify-content-md-center'>
              <Logo contact={contact} stack={data.stack} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
