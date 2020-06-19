import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToByContainerId } from '../Helpers/helper.js'
import About from './about.js';
import Projects from './projects.js'
import Contact from './contact.js'

const Home = () => {
    // on load, scroll to element in url
    let location = useLocation();
    useEffect(() => {
        scrollToByContainerId(location.hash)
      }, []);

    return (
        <div className='content'>
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;
