import React, { Component } from 'react';

import { DataEducation } from '../../Data/Education.js';

import EducationCard from '../EducationCard';
import PageContainer from '../../pages/PageContainer';

export default class Education extends Component {
  state = {
    education: DataEducation,
  };
  render() {
    const { education } = this.state;
    return (
      <>
        <PageContainer title='Education'>
          {education.map((el) => {
            return <EducationCard key={el.id} education={el} />;
          })}
        </PageContainer>
      </>
    );
  }
}
