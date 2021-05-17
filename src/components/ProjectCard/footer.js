import React from 'react';

import Image from 'react-bootstrap/Image';

const Footer = ({ stack }) => {
  const styleLogo = {
    height: '40px',
  };
  return (
    <>
      {stack.map((el) => {
        return (
          el.link && (
            <a href={el.link} target='_blank' className='focus mx-1 my-auto'>
              <Image src={el.location} alt='' style={styleLogo} />
            </a>
          )
        );
      })}
    </>
  );
};

export default Footer;
