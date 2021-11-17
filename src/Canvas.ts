import Sneak from './Sneak';
import KeyboardListener from './KeyboardListener';
import SneakMovements from './SneakMovements/SneakMovementsEnum';

class Canvas {
    private canvasEl: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private width: number = 600;
    private height: number = 600;

    private player = new Sneak(50, 50, 10);
    private keyBoardListener = new KeyboardListener();

    constructor(element: HTMLCanvasElement) {
        this.canvasEl = element;
        this.canvasEl.width = this.width;
        this.canvasEl.height = this.height;

        this.bindKeyboardEvents();

        this.context = element.getContext('2d');

        setInterval(() => {
            this.update();
        }, 100);
    }

    private update(): void {
        this.clearCanvas();
        this.drawLines();

        this.player.makeMovement();

        this.context.fillRect(
            this.player.getX(),
            this.player.getY(),
            this.player.getSize(),
            this.player.getSize()
        );
    }

    private bindKeyboardEvents() {
        this.keyBoardListener.on('KeyW', () => {
            this.player.setMovement(SneakMovements.UP);
        });
        this.keyBoardListener.on('KeyA', () => {
            this.player.setMovement(SneakMovements.LEFT);
        });
        this.keyBoardListener.on('KeyS', () => {
            this.player.setMovement(SneakMovements.DOWN);
        });
        this.keyBoardListener.on('KeyD', () => {
            this.player.setMovement(SneakMovements.RIGHT);
        });
    }

    private clearCanvas(): void {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    private drawLines() {
        const numberOfLines = this.width / this.player.getSize();

        this.context.strokeStyle = 'gray';
        this.context.lineWidth = 2;

        this.drawHorizontalLines(numberOfLines);
        this.drawVerticalLines(numberOfLines);
    }

    private drawHorizontalLines(numberOfLines: number): void {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(0, i * this.player.getSize());
            this.context.lineTo(this.width, i * this.player.getSize());
            this.context.stroke();
            this.context.closePath();
        }
    }

    private drawVerticalLines(numberOfLines: number): void {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(i * this.player.getSize(), 0);
            this.context.lineTo(i * this.player.getSize(), this.height);
            this.context.stroke();
            this.context.closePath();
        }
    }
}

export default Canvas;
