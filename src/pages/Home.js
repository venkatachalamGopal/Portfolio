import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect';
import SkillContainer from "../components/SkillContainer"
import { dividerClasses } from '@mui/material';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
          Hi
          <span className='wave'>👋🏻</span>, My Name is{' '}
          <span className='name-shadow'>Venkatachalam</span>
        </h2>

        <h1>
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'MERN Stack Dev',
                'NodeJs Developer',
                'ReactJS Developer',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <div className='prompt'>
          <p style={{textAlign:"justify"}}>
            A software developer with a passion for learning and creating.
           I want to explore my knowledge in
            the web development field.
          </p>
          <a
            href='https://github.com/venkatachalamGopal'
            target='_blank'
            rel='noreferrer'>
            <GithubIcon />
          </a>
          <a
            href='mailto:venkatvenki3940@gmail.com'
            target='_blank'
            rel='noreferrer'>
            <EmailIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/venkatachalam-g-371bbb22b/'
            target='_blank'
            rel='noreferrer'>
            <LinkedInIcon />
          </a>
          <a
            href='https://drive.google.com/file/d/1Q89abmytyjoZSYSxnRFZe2cUFJ1Uq8jL/view'
            target='_blank'
            rel='noreferrer'>
            <button className='resume-btn'>Resume</button>
          </a>
        </div>
       
      </div>

       {/* <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End :</h2>
            <span>
              HTML, CSS,BootStrap,ReactJS, Redux, MaterialUI, Styled
              Components
            </span>
          </li>
          <li className='item'>
            <h2>Back-End :</h2>
            <span>MongoDB,NodeJS, ExpressJS</span>
          </li>
          <li className='item'>
            <h2>Language</h2>
            <span>JavaScript</span>
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <span>
              VS Code, Postman, Netlify, Heroku, Render,Github
            </span>
          </li>
        </ol>
         
      </div>  */}
      <div className='hgt'>
      <SkillContainer/>
      </div>

      
      
    </div>
  );
}

export default Home;
