import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1> {project.title}</h1>
      <div className='proj-sec'>
        <div className='tit'>
          <p className='des'>{project.description}</p>
          
          <div className='view'>
            <a href={project.sourceFront} target='_blank' rel='noreferrer'>
              <button>
                <GitHubIcon />
                Front-end Code
              </button>
            </a>
            
            <a href={project.visit} target='_blank' rel='noreferrer'>
              {' '}
              <button className='view-btn'>
                <OpenInNewIcon />
                Live
              </button>
            </a>
          </div>
        </div>
        <img src={project.image} alt={`${project.title}`} />
      </div>
    </div>
  );
}

export default ProjectDisplay;
