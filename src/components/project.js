import React from 'react';

const Project = props => {
    const project = props.project; 
    
    return (
        <div className='project-container'>
            <a href={project.imageLink} target='_blank' rel='noopener noreferrer'><img src={project.image} className='project-image' alt={project.title}/></a>
            <h3 className='project-title'>{project.title}</h3>
            <div className='project-summary-container'>
                <p className='project-summary'>{project.summary}</p>
                <a href={project.buttonLink} target='_blank' rel='noopener noreferrer' className='project-button'>{project.buttonText || 'See more'}</a>
            </div>
        </div>   
    )
}

export default Project;