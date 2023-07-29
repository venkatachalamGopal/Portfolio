import '../styles/Contact.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'react-simple-snackbar';

function Contact() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const form = useRef();


  return (
    <section>
      <h1>Contact Me</h1>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MailOutlineIcon />
            <h4>Email</h4>
            <h5>venkatvenki3940@gmail.com</h5>
            <a
              href='mailto:venkatvenki3940gmail.com'
              target='_blank'
              rel='noreferrer'>
              Send a mail
            </a>
          
          </article>
          <article className='contact__option'>
            <WhatsAppIcon />
            <h4>WhatsApp</h4>
            <h5>8778620133</h5>
            <a
              href='https://api.whatsapp.com/send?phone=8778620133'
              target='_blank'
              rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>

      </div>
    </section>
  );
}

export default Contact;
