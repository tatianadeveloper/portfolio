import React, { Component } from 'react';

import PageContainer from '../../pages/PageContainer';

import { DataContact } from '../../Data/Contact.js';

export default class Contact extends Component {
  state = {
    contacts: DataContact,
  };

  render() {
    const { contacts } = this.state;
    const listStyle = { listStyleType: 'none' };
    return (
      <>
        <PageContainer title='Contact'>
          <div className='text-center mt-5 justify-content-center'>
            <article>
              Do not hesitate to contact me if you are looking for a team member
              to develop a great product.
            </article>

            <article>
              <ul style={listStyle}>
                {Object.keys(contacts).map((el) => {
                  const contact = contacts[el];
                  return (
                    <li className='mt-5 mb-3'>
                      <div> {contact.name} </div>
                      <a href={contact.path} target='_blank'>
                        <span>{contact.description || contact.path}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </PageContainer>
      </>
    );
  }
}
