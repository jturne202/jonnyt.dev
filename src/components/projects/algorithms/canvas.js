import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.draw = this.draw.bind(this);
        this.drawInstructions = this.drawInstructions.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    componentDidUpdate() {
        const { isPlaying, refresh, updateType } = this.props;
        if ((updateType !== 'Finished' && !isPlaying) || refresh) {
            const canvas = this.canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            this.draw();
        }
    }

    draw = () => {
        const { array, pass, index, updateType, updateText } = this.props;
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = '8';
        ctx.strokeStyle = 'white';
        ctx.font = '30px Roboto'
        ctx.fillStyle = 'white';
        let drawPos = 150;
        ctx.clearRect(0, 0, 1000, 500);
        ctx.fillText(`Pass: ${pass}`, 20, 70);
        ctx.fillText(updateText, 20, 110);
        ctx.font = '80px Roboto'
        // console.log(array, pass, index, updateType, updateText);
        if (updateType === 'Correct') {
            ctx.fillText('✔', (drawPos) * (index + 1) + 10, 375);
            ctx.fillText('✔', (drawPos) * (index + 2) + 10, 375);
        } else if (updateType === 'Swap') {
            ctx.fillText('→', (drawPos) * (index + 1) + 10, 375);
            ctx.fillText('←', (drawPos) * (index + 2) + 10, 375);
            ctx.font = '30px Roboto'
            ctx.fillText('Swapped', (drawPos) * (index + 1) + 70, 400);
        }
        ctx.font = '80px Roboto'
        for (const item of array) {
            ctx.rect(drawPos, 200, 100, 100);
            ctx.fillText(item.toString(), drawPos + 30, 275);
            ctx.stroke();
            ctx.restore();
            drawPos += 150;
        }
    }

    sleep = milliseconds => {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    
    drawInstructions = () => {
        console.log('draw instructions on load');
    }

    render() {
        return (
            <canvas id='algo-canvas' width='1000px' height='500%' ref={this.canvasRef}></canvas>
        )
    }
}

export default Canvas;
