import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Tech from './tech.js';

import { COLORS } from '../../Core/constants.js';

export default class Skill extends Component {
  render() {
    const { skills, name } = this.props;
    const style = {
      fontSize: '20px',
      color: `${COLORS.headers}`,
    };

    return (
      <>
        <Card border='Light' className='mx-auto my-3 shadow-sm'>
          <Card.Header>
            <Card.Title style={style}>{name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup horizontal='md'>
              {skills.map((el) => {
                return <Tech key={el.key} info={el.info} stack={el.stack} />;
              })}
            </ListGroup>
          </Card.Body>
        </Card>
      </>
    );
  }
}
