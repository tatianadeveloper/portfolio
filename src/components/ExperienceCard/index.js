import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { COLORS } from '../../Core/constants.js';

export default class ExperienceCard extends Component {
  render() {
    const {
      title,
      location,
      company,
      dataStart,
      dataFinish,
      description,
      responsibilities,
    } = this.props.experience;

    const titleStyle = {
      fontSize: '20px',
      color: `${COLORS.headers}`,
    };

    return (
      <>
        <Card border='Light' className='focus mx-auto my-3 shadow-sm'>
          <Card.Header>
            <Card.Title style={titleStyle}>{title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>
              {company}. {location}, {dataStart}-{dataFinish}
            </Card.Subtitle>

            <Card.Text>
              {description.map((el) => {
                return <section className=' mt-3'>{el}</section>;
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
