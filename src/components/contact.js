import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Resume from '../Content/Jonathan Turner CV.pdf'
import Description from '@material-ui/icons/Description'

export default Contact => {
    return (
        <div id='contact-me-container'>
            <div className='contact-container' id='resume'>
                <a href={Resume} target='_blank' rel='noopener noreferrer'>< Description /></a>
                <p><a href={Resume} target='_blank' rel='noopener noreferrer'>View Resume</a></p>
            </div>
            <div className='contact-container'>
                <a href='mailto:contact@jonnyt.dev'><EmailIcon /></a>
                <p>Send me an email: <a href='mailto:contact@jonnyt.dev'>contact@jonnyt.dev</a></p>  {/* TODO: npm copy to clipboard */} 
            </div>
            <div className='contact-container'>
                <a href='mailto:contact@jonnyt.dev'><LinkedInIcon /></a>
                <p>Contact me via: <a href='https://www.linkedin.com/in/jonathanturner95' target='_blank'>LinkedIn</a></p>
            </div>
            {/* TODO: Add message area */}
        </div>
    )
}