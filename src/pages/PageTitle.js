import React from 'react';

import { COLORS } from '../Core/constants.js';

const PageTitle = ({ title }) => {
  const style = {
    fontSize: '22px',
    color: `${COLORS.headers}`,
    textAlign: 'center',
  };
  return (
    <>
      <h2 style={style}> {title}</h2>
    </>
  );
};

export default PageTitle;
