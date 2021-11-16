import './assets/style.css';

class Sneak {
    private x;
    private y;
    private size;

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
}

class Canvas {
    private canvasEl: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private width: number = 600;
    private height: number = 600;

    private player = {
        x: 50,
        y: 50,
        size: 15,
    };

    constructor(element: HTMLCanvasElement) {
        this.canvasEl = element;
        this.canvasEl.width = this.width;
        this.canvasEl.height = this.height;

        this.context = element.getContext('2d');

        setInterval(() => {
            this.update();
        }, 100);
    }
    

    private update(): void {
        this.clearCanvas();
        this.drawLines();

        this.context.fillRect(
            this.player.x,
            this.player.y,
            this.player.size,
            this.player.size
        );
    }

    private clearCanvas(): void {
        this.context.clearRect(0, 0, this.width, this.height);
    }


    private drawLines() {
        const numberOfLines = this.width / this.player.size;

        this.context.strokeStyle = 'gray';
        this.context.lineWidth = 2;

        this.drawHorizontalLines(numberOfLines);
        this.drawVerticalLines(numberOfLines);
    }

    private drawHorizontalLines(numberOfLines: number): void {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(0, i * this.player.size);
            this.context.lineTo(this.width, i * this.player.size);
            this.context.stroke();
            this.context.closePath();
        }
    }

    private drawVerticalLines(numberOfLines: number): void {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(i * this.player.size, 0);
            this.context.lineTo(i * this.player.size, this.height);
            this.context.stroke();
            this.context.closePath();
        }
    }
}

const canvasEl: HTMLCanvasElement = document.querySelector('canvas');
const canvas = new Canvas(canvasEl);
