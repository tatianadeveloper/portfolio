import React, { Component } from 'react';

import { DataProjects } from '../../Data/Projects.js';
import ProjectCard from '../ProjectCard';
import PageContainer from '../../pages/PageContainer';

export default class Project extends Component {
  state = {
    projects: DataProjects,
  };
  render() {
    const { projects } = this.state;
    return (
      <>
        <PageContainer title='Projects'>
          {projects.map((el) => {
            return <ProjectCard key={el.id} project={el} />;
          })}
        </PageContainer>
      </>
    );
  }
}
