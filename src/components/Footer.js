import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a
          href='https://github.com/venkatachalamGopal'
          target='_blank'
          rel='noreferrer'>
          <GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/venkatachalam-g-371bbb22b/'
          target='_blank'
          rel='noreferrer'>
          <LinkedInIcon />
        </a>
      </div>
      <p>
        {' '}
        &copy; {new Date().getFullYear()}{' '}
        {/* <a
          href='https://kavyakavi.netlify.app/'
          style={{ textDecoration: 'none', color: 'inherit' }}
          target='_blank'
          rel='noreferrer'>
          Kavya Karuppusamy
        </a> */}
        venkatachalam
      </p>
    </div>
  );
}

export default Footer;
