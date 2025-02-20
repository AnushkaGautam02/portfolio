import React from 'react'
import './ContactMe.css'
import email from '../../../assets/images/email.png';
import github from '../../../assets/images/github.png';
import phone from '../../../assets/images/phone.png';
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard';
import { ContactForm } from './ContactForm/ContactForm';

export const ContactMe = () => {
  return (
   <section className="contact-container" id='contact'>
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{flex:1}}>
          <div style={{display:'flex', gap:'1.5rem'}}>
          <ContactInfoCard
          iconUrl={phone}
          text="6394696004 / 8542087044"
          style={{with:'100%'}}
          />
          <ContactInfoCard
          iconUrl={email}
          style={{with:'100%'}}
          text="anushkagautam0213@gmail.com"
          />
          </div>
        
          <ContactInfoCard
          iconUrl={github}
          text="https://github.com/AnushkaGautam02"
          />

        </div>
        <div style={{flex:1}}>
          <ContactForm/>
        </div>
      </div>
   </section>
  )
}
