import React from 'react';
import Resume from '../Content/Jonathan Turner CV 3.0.0.pdf'
import Description from '@material-ui/icons/Description'

export default class About extends React.Component {

    render() {
        return (
        <div id='about-me-container'>
            <h1>About Me</h1>
            <p id='about-paragragh'>
                I am a driven, hard working, passionate software developer located in Glasgow. 
                Graduating in 2018 from Glasgow Caledonian University, I have experience working within both team and solo evnironments over the course of my career and education. 
                I adapt well to new teams and I am a fast learner, with a thirst for learning new technologies and design patterns, whether that be on my own creating personal projects (some of which can be seen below) or within the work environment to build solutions for enterprise software. 
            </p>
            <p className='contact-container'>
                <a href={Resume} target='_blank' rel='noopener noreferrer'>< Description /></a>
                <a href={Resume} target='_blank' rel='noopener noreferrer'>View Resume</a>
            </p>
        </div>   
    )}
}