import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from './footer';

import { COLORS } from '../../Core/constants.js';

export default class ProjectCard extends Component {
  render() {
    const { name, description, screenshot, githubLink, link, stack, feature } =
      this.props.project;

    const logo = screenshot ? `./assets/${screenshot}` : '';

    const imageStyle = {
      objectFit: 'cover',
    };

    const titleStyle = {
      fontSize: '20px',
      color: `${COLORS.headers}`,
    };
    return (
      <>
        <Card border='Light' className='focus mx-auto my-3 shadow-sm'>
          <Card.Header>
            <Card.Title style={titleStyle}>{name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} md={6}>
                <Card.Img src={logo} style={imageStyle} className='mx-auto' />
              </Col>
              <Col xs={12} md={6}>
                <section className=' ml-3 my-auto'>
                  <Card.Text>{description}</Card.Text>

                  <ul className='list-group-flush'>
                    {feature.map((el) => {
                      return <li>{el}</li>;
                    })}
                  </ul>
                </section>
                <section className=' mx-auto my-auto text-center'>
                  {githubLink && (
                    <Card.Link href={githubLink} target='_blank'>
                      GitHub
                    </Card.Link>
                  )}
                  {link && (
                    <Card.Link href={link} target='_blanket'>
                      See live
                    </Card.Link>
                  )}
                </section>
              </Col>
            </Row>
          </Card.Body>

          <Card.Footer className='text-muted'>
            <Footer stack={stack} />
          </Card.Footer>
        </Card>
      </>
    );
  }
}
