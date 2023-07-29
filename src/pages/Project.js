import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

function Project() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'> My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project) => {
          return (
            <ProjectItem
              id={project.id}
              title={project.title}
              image={project.image}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
