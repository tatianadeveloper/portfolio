import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';

import { DataAbout } from '../../Data/About.js';
import { DataContact } from '../../Data/Contact.js';

import logo from '../../images/PrudnikovaTatianaRound.jpg';
import LinkedinLogo from '../../images/icons/linkedin.svg';
import GitHubLogo from '../../images/icons/github.svg';

const Logo = ({ contact, stack }) => {
  const photoStyle = {
    width: '200px',
    height: '200px',
  };
  const LnStyle = {
    margin: '20px',
    height: '20px',
  };

  return (
    <>
      <section className=' mx-auto my-4 text-center'>
        <Image
          src={logo}
          style={photoStyle}
          alt='Prudnikova Tatiana photo'
          roundedCircle
          fluid
        />
      </section>
      <section className=' mx-auto my-auto text-center'>
        <a href={contact.linkedin.path} target='_blank'>
          <Image src={LinkedinLogo} style={LnStyle} fluid />
        </a>
      </section>
      <section className=' mx-auto mb-3 text-center'>
        <b>Tech stack I am focused on:</b>
        <div> {stack}</div>
      </section>
    </>
  );
};

export default Logo;
