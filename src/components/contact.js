import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default Contact => {
    return (
        <div id='#contact-container'>
            <h1>Contact Me</h1>
            <div className='contact-container'>
                <a href='mailto:contact@jonnyt.dev'><EmailIcon /></a>
                <p>Send me an email: <a href='mailto:contact@jonnyt.dev'>contact@jonnyt.dev</a></p>  {/* TODO: npm copy to clipboard */} 
            </div>
            <div className='contact-container'>
                <a href='mailto:contact@jonnyt.dev'><LinkedInIcon /></a>
                <p>Contact me via: <a href='https://www.linkedin.com/in/jonathanturner95'>LinkedIn</a></p>
            </div>
            {/* TODO: Add message area */}
        </div>
    )
}