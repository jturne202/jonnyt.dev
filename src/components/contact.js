import React from 'react';
import instagram from '../Images/instagram.png'
import email from '../Images/email.png'

export default class Contact extends React.Component {

    render() {
        return (
            <div className='contact'>
                <a href='mailto:contact@jonnyt.dev'><img className='contact-image' src={email} /></a>
                <a className='contact-link' href='mailto:contact@jonnyt.dev'>contact@jonnyt.dev</a>
                <a href='https://www.instagram.com/jonnydt95/'><img className='contact-image' src={instagram} /></a>
                <a className='contact-link' href='https://www.instagram.com/jonnydt95/' target="_blank">Instagram</a>
            </div>
        )
    }
}