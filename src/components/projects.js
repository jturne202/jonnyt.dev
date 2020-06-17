import React from 'react';
import Project from './project.js'
import SearchForSelectionImage from '../Images/SearchForSelection.PNG'
import GlasgowWeatherbotImage from '../Images/GlasgowWeatherBot.png'
import ElectronScreenRecorder from '../Images/ElectronScreenRecorder.png'

export default Projects => {

    const projects = [
        {
            id: 1,
            title: 'Search For Selection Chrome Extension',
            summary: 'An extension published in the chrome web store to search highlighted text in some of the most popular websites around.',
            image: SearchForSelectionImage,
            imageLink: 'https://github.com/jturne202/SearchForSelection',
            buttonText: 'View',
            buttonLink: 'https://github.com/jturne202/SearchForSelection'
        },
        {
            id: 2,
            title: 'Glasgow Weather Twitter Bot',
            summary: 'A bot on twitter that tweets the weather in Glasgow every couple of hours.',
            image: GlasgowWeatherbotImage,
            imageLink: 'https://github.com/jturne202/GlasgowWeatherBot',
            buttonText: 'View',
            buttonLink: 'https://github.com/jturne202/GlasgowWeatherBot'
        },
        {
            id: 3,
            title: 'Electron Screen Recorder',
            summary: 'A screen recorder that can record a selected screen or window across windows, mac & linux.',
            image: ElectronScreenRecorder,
            imageLink: 'https://github.com/jturne202/Electron-Screen-Recorder',
            buttonText: 'View',
            buttonLink: 'https://github.com/jturne202/Electron-Screen-Recorder'
        }
    ];

    var renderedProjects = projects.map(project => <Project project={project} key={project.id}/>)

    return (
        <div id='projects-container'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {renderedProjects}
            </div>
        </div>
    )
}