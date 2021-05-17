import React from 'react';

const AboutMe = ({ data }) => {
  return (
    <>
      <article>
        {data.map((el) => {
          return <section className=' mt-3'>{el}</section>;
        })}
      </article>
    </>
  );
};

export default AboutMe;
