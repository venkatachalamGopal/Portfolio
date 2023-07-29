import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ id, title, image }) {
  const navigate = useNavigate();
  return (
    <div
      className='projectItem'
      onClick={() => {
        navigate('/project/' + id);
      }}>
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <h1> {title} </h1>
    </div>
  );
}

export default ProjectItem;
