import React from 'react';
import Canvas from './canvas.js'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StopIcon from '@material-ui/icons/Stop';

var refresh = false;

class Algorithms extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.switchSelected = this.switchSelected.bind(this);
        this.getStartingArray = this.getStartingArray.bind(this);
        this.runVisualisation = this.runVisualisation.bind(this);
        this.getAlgorithm = this.getAlgorithm.bind(this);
        this.setupCanvas = this.setupCanvas.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.setStateSynchronous = this.setStateSynchronous.bind(this);
        this.state = {
            array: [],
            pass: 1,
            index: 0,
            updateType: 'None',
            updateText: 'Starting Array',
            isPlaying: false,
            playingType: 'None',
            refresh: refresh
        }
    }

    switchSelected = e => {
        const selectedButton = document.getElementsByClassName('algo-button selected');
        const selectedDescription = document.getElementsByClassName('algo-description selected');
        const button = e.target.closest('.algo-button');
        const id = button.id;
        this.setState({array: []});
        if (this.state.isPlaying) {
            refresh = true;
            this.setStateSynchronous(this.setState(({isPlaying: false, playingType: 'None', refresh: refresh})), 0)
        } else {
            // remove selected class from current selected button
            for (let item of selectedButton) {
                item.classList.remove('selected');
            }
            
            // add selected class to clicked button
            button.classList.add('selected');
            
            // remove selected class from current description
            for (let item of selectedDescription) {
                item.classList.remove('selected');
            }
        
            // add selected class to relevant description
            document.getElementById(`${id}-description`).classList.add('selected')
        
            setTimeout(() => {
                this.setStateSynchronous(this.setState({array: this.getStartingArray(), isPlaying: true, playingType: id, refresh: false}, () => this.runVisualisation(id)), 2500);
            }, 2500)
            
        }
    }
    
    getStartingArray = () => {
        const inputs = document.getElementsByClassName('algo-starting-input');
        const array = [];
    
        for (let item of inputs) {
            let val = item.value;
            let number = parseInt(val);
            if (Object.is(NaN, number)) {
                const rand = Math.floor((Math.random() * 9) + 1)
                array.push(rand);
                item.value = rand;
            } else {
                array.push(number);
            }
        }
        
        return array;
    }
    
    runVisualisation = name => {
        this.getAlgorithm(name)();
    }
    
    getAlgorithm = name => {
        const algorithms = {
            'bubble-sort': this.bubbleSort,
            'insertion-sort': this.insertionSort,
            'selection-sort': this.selectionSort,
            'merge-sort': this.mergeSort,
            'default': this.errorSort
        }
    
        return algorithms[name] || algorithms['default'];
    }
    
    setupCanvas = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = '8';
        ctx.strokeStyle = 'white';
        ctx.font = '80px Roboto'
        ctx.fillStyle = 'white';
    
        return ctx;
    }

    setStateSynchronous = (stateUpdate, ms) => {
        return new Promise(resolve => {
            this.setState(stateUpdate, () => setTimeout(resolve, ms));
        });
    }
    
    async bubbleSort () {
        console.log('bubble-sort', this.state.array)
        var len = this.state.array.length;
        let stop = false;
        for (var i = 0; i < len ; i++) {            
            for(var j = 0 ; j < len - i - 1; j++) {
                await this.setStateSynchronous(this.setState({pass: i + 1}), 2500);

                if (this.state.array[j] > this.state.array[j + 1]) {
                    const updateText = `${this.state.array[j]} is more than ${this.state.array[j + 1]}, swapping ${this.state.array[j]} with ${this.state.array[j + 1]}`
                    var temp = this.state.array[j];
                    const tempArr = this.state.array;
                    tempArr[j] = tempArr[j+1]
                    tempArr[j + 1] = temp;
                    await this.setStateSynchronous(this.setState(() => {
                        console.log(refresh, this.state.refresh)
                        if (refresh) {
                            stop = true;
                            return {
                                array: [],
                                pass: 1,
                                index: 0,
                                updateType: 'None',
                                updateText: 'Starting Array',
                                isPlaying: false,
                                playingType: 'None',
                                refresh: true
                            };  
                        }
                        return {array: tempArr, pass: i + 1, index: j, updateType: 'Swap', updateText};
                    }), 2500)
                }
                else {
                    const updateText = `${this.state.array[j]} is not more than ${this.state.array[j + 1]}, no swap needed`
                    await this.setStateSynchronous(this.setState(() => {
                        console.log(refresh, this.state.refresh)
                        if (refresh) {
                            stop = true;
                            return {
                                array: [],
                                pass: 1,
                                index: 0,
                                updateType: 'None',
                                updateText: 'Starting Array',
                                isPlaying: false,
                                playingType: 'None',
                                refresh: true
                            };
                        }
                        return {pass: i + 1, index: j, updateType: 'Correct', updateText};
                    }), 2500)
                    // await this.setStateSynchronous(this.setState(() => ({pass: i + 1, index: j, updateType: 'Correct', updateText})), 2500);
                }

                if (stop) {
                    refresh = false;
                    this.setState({refresh: refresh});
                    return;
                };
            }
        }
        await this.setStateSynchronous(this.setState(() => ({updateType: 'Finished',updateText: 'Array Sorted :)', isPlaying: false})), 2500);
    }
    
    insertionSort = () => {
        console.log('insertion-sort', this.state.array)
    }
    
    selectionSort = () => {
        console.log('selection-sort', this.state.array)
    }
    
    mergeSort = () => {
        console.log('merge-sort', this.state.array)
    }
    
    errorSort = () => {
        console.log('error-sort')
    }

    render() {
        return (
        <div className='content'>
            <div id='#algorithm-container'>
                <h1>Popular Sorting Algorithms Visualised</h1>
                <div id='algo-starting-array'>
                    <span id='algo-starting-array-text'>Starting Array:</span>
                    <input className='algo-starting-input' type='text' maxLength='1'/>
                    <input className='algo-starting-input' type='text' maxLength='1'/>
                    <input className='algo-starting-input' type='text' maxLength='1'/>
                    <input className='algo-starting-input' type='text' maxLength='1'/>
                    <input className='algo-starting-input' type='text' maxLength='1'/>
                </div>
                <Canvas array={this.state.array} pass={this.state.pass} index={this.state.index} updateType={this.state.updateType} updateText={this.state.updateText} isPlaying={this.state.isPlaying} refresh={this.state.refresh}/>
                <div id='algo-buttons'>
                    <button id='bubble-sort' className='algo-button selected' onClick={this.switchSelected}>Bubble Sort {
                        this.state.isPlaying && this.state.playingType === 'bubble-sort' 
                            ? <StopIcon className='algo-stop-button'/>
                            : <PlayCircleFilledIcon className='algo-play-button'/> 
                    }</button>
                    <button id='insertion-sort' className='algo-button' onClick={this.switchSelected}>Insertion Sort {
                        this.state.isPlaying && this.state.playingType === 'insertion-sort' 
                            ? <StopIcon className='algo-stop-button'/>
                            : <PlayCircleFilledIcon className='algo-play-button'/>  
                    }</button>
                    <button id='selection-sort' className='algo-button' onClick={this.switchSelected}>Selection Sort {
                        this.state.isPlaying && this.state.playingType === 'selection-sort' 
                            ? <StopIcon className='algo-stop-button'/>
                            : <PlayCircleFilledIcon className='algo-play-button'/> 
                    }</button>
                    <button id='merge-sort' className='algo-button' onClick={this.switchSelected}>Merge Sort {
                        this.state.isPlaying && this.state.playingType === 'merge-sort' 
                            ? <StopIcon className='algo-stop-button'/>
                            : <PlayCircleFilledIcon className='algo-play-button'/> 
                    }</button>
                    <p id='bubble-sort-description' className='algo-description selected'>Bubble sort is a very simple sorting algorithm. The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second, it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass. Over a number of passes, at most equal to the number of elements in the list, all of the values drift into their correct positions (large values “bubble” rapidly toward the end, pushing others down around them). Because each pass finds the maximum item and puts it at the end, the portion of the list to be sorted can be reduced at each pass. A boolean variable is used to track whether any changes have been made in the current pass; when a pass completes without changing anything, the algorithm exits.

This algorithm’s average and worst-case performance is O(n2), so it is rarely used to sort large, unordered data sets. Bubble sort can be used to sort a small number of items (where its asymptotic inefficiency is not a high penalty). Bubble sort can also be used efficiently on a list of any length that is nearly sorted (that is, the elements are not significantly out of place). For example, if any number of elements are out of place by only one position (e.g. 0123546789 and 1032547698), bubble sort’s exchange will get them in order on the first pass, the second pass will find all elements in order, so the sort will take only 2n time.</p>
                    <p id='insertion-sort-description' className='algo-description'>insertion-sort</p>
                    <p id='selection-sort-description' className='algo-description'>selection-sort</p>
                    <p id='merge-sort-description' className='algo-description'>merge-sort</p>
                </div>
            </div>
        </div>
        );
    };
};

export default Algorithms 

