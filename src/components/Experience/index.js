import React, { Component } from 'react';

import ExperienceCard from '../ExperienceCard';
import PageContainer from '../../pages/PageContainer';
import { DataExperience } from '../../Data/Experience.js';

export default class Experience extends Component {
  state = {
    experience: DataExperience,
  };

  render() {
    const { experience } = this.state;
    return (
      <>
        <PageContainer title='Experience'>
          {experience.map((el) => {
            return <ExperienceCard key={el.id} experience={el} />;
          })}
        </PageContainer>
      </>
    );
  }
}
