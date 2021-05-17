import React, { Component } from 'react';

import { DataSkills } from '../../Data/Skills.js';

import PageContainer from '../../pages/PageContainer';
import Skill from '../Skill';

export default class Skills extends Component {
  state = {
    skills: DataSkills,
  };
  render() {
    const { skills } = this.state;
    return (
      <>
        <PageContainer title='Skills'>
          {Object.keys(skills).map((el) => {
            return <Skill key={el} name={el} skills={skills[el]} />;
          })}
        </PageContainer>
      </>
    );
  }
}
