import React from 'react';
import $ from 'jquery'

export default class Construction extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                //         black      green      blue       orange     purple     yellow     pink     
                colours: ['#000000', '#66FF66', '#50BFE6', '#FF6037', '#8B72BE', '#FFFF66', '#D96CBE'],
                //colours: ['#8B72BE'], for testing single colours
                currentColour: {}
            };
    }

    changeBg() {
        const { colours } = this.state;
        let newColour = this.state.currentColour;

        // Prevent the same colour being applied
        do {
            newColour = colours[Math.floor(Math.random() * colours.length)];
        } while (this.state.currentColour === newColour );
        
        this.state.currentColour = newColour;
        $('.noselect').css('color', newColour);
    }

    componentDidMount() {
        this.changeBg();
    }

    render() {
        return (
            <div className='construction'>
                <p>
                    <span className='construction-bold construction-span'>[</span> &nbsp;
                    <span className={'noselect construction-span'} onClick={() => this.changeBg()}> UNDER CONSTRUCTION </span> &nbsp; 
                    <span className='construction-bold construction-span'>]</span>
                </p>
            </div>
        )
    }
}
