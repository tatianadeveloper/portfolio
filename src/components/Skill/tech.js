import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export default class Tech extends Component {
  render() {
    const info = this.props.info;
    const { link, location, name } = this.props.stack;
    const styleLogo = {
      height: '40px',
    };
    return (
      <ListGroup.Item style={{ border: 'none' }} className='  text-center'>
        <a href={link} target='_blank'>
          <Image src={location} style={styleLogo} />
          <p>{name}</p>
        </a>
      </ListGroup.Item>
    );
  }
}
