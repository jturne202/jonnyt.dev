import React from 'react';
import Scroll from 'react-scroll-to-element';
import logo from '../Images/JT-white.png';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = ({navigationClicked}) => {
    const offset = -25;
    return (
        <div className='header'>
            <div id='logo'>
                <a href='https://jonnyt.dev'><img className='logo-image' src={logo} alt='logo'/></a>
            </div>
            <div id='navigation'>
                <Scroll type='id' element='about-me-container' offset={offset}><div className='navigation-link'>About</div></Scroll>
                <Scroll type='id' element='projects-container' offset={offset}><div className='navigation-link'>Projects</div></Scroll>
                <Scroll type='id' element='contact-me-container' offset={offset}><div className='navigation-link'>Contact</div></Scroll>
            </div>
            <div id='external-contact'>
                <a href='https://github.com/jturne202' target='_blank' rel='noopener noreferrer'><GitHubIcon /></a>
                <a href='mailto:contact@jonnyt.dev'><EmailIcon /></a>
                <a href='https://www.linkedin.com/in/jonathanturner95/' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
                <a href='https://www.instagram.com/jonnydt95/' target='_blank' rel='noopener noreferrer'><InstagramIcon /></a>
            </div>
        </div>
    )
}

export default Header;
