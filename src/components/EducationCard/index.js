import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

import { COLORS } from '../../Core/constants.js';

export default class EducationCard extends Component {
  render() {
    const {
      name,
      location,
      link,
      dataStart,
      dataFinish,
      qualification,
      comment,
    } = this.props.education;
    const style = {
      fontSize: '20px',
      color: `${COLORS.headers}`,
    };
    return (
      <>
        <Card border='Light' className='mx-auto my-3 shadow-sm'>
          <Card.Header>
            <Card.Title style={style}>{qualification}</Card.Title>
            {dataStart}-{dataFinish}
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>
              <a href={link} target='_blank'>
                {name}
              </a>{' '}
              {location}
            </Card.Subtitle>
            <Card.Text>{comment}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
