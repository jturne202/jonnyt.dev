import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/JT-white.png';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
    return (
        <div className='header'>
            <div id='logo'>
                <Link to='/'><img className='logo-image' src={logo} alt='logo'/></Link>
            </div>
            <div id='navigation'>
                <Link to='/#about' className='navigation-link' onClick={scrollTo}><div data-value='#about'>About</div></Link> 
                <Link to='/#projects' className='navigation-link' onClick={scrollTo}><div data-value='#projects'>Projects</div></Link> 
                <Link to='/#contact' className='navigation-link' onClick={scrollTo}><div data-value='#contact'>Contact</div></Link> 
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
