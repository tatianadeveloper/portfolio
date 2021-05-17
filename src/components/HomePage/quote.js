import React from 'react';

const Quote = () => {
  return (
    <>
      <blockquote className='blockquote my-3 text-right'>
        <section>
          "So if you want to go fast, if you want to get done quickly, if you
          want your code to be easy to write, make it easy to read"
        </section>
        <footer className='blockquote-footer'>
          Robert C. Martin, The Clean Coder: A Code of Conduct for Professional
          Programmers
        </footer>
      </blockquote>
    </>
  );
};

export default Quote;
