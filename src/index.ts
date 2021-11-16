import './assets/style.css';

class Canvas {
    private canvasEl: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private player = {
        x: 590,
        y: 590,
        size: 10,
    };

    constructor(element: HTMLCanvasElement) {
        this.canvasEl = element;
        this.context = element.getContext('2d');

        this.context.fillRect(
            this.player.x,
            this.player.y,
            this.player.size,
            this.player.size
        );
    }

    private movePlayer(x, y) {
        this.player.x = x - (x % this.player.size);
        this.player.y = y - (y % this.player.size);
    }
}

const canvasEl = document.querySelector('canvas');
const canvas = new Canvas(canvasEl);
