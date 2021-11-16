import './assets/style.css';

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
        this.movePlayer(this.player.x + this.player.size, this.player.y);

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

    private movePlayer(x: number, y: number): void {
        this.player.x = x - (x % this.player.size);
        this.player.y = y - (y % this.player.size);
    }

    private drawLines() {
        const numberOfLines = this.width / this.player.size;

        this.context.strokeStyle = 'gray';
        this.context.lineWidth = 2;

        this.drawHorizontalLines(numberOfLines);
        this.drawVerticalLines(numberOfLines);
    }

    private drawHorizontalLines(numberOfLines) {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(0, i * this.player.size);
            this.context.lineTo(this.width, i * this.player.size);
            this.context.stroke();
            this.context.closePath();
        }
    }

    private drawVerticalLines(numberOfLines) {
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
