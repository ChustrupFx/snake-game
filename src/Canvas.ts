import Snake from './Sneak';
import KeyboardListener from './KeyboardListener';
import SneakMovements from './SneakMovements/SneakMovementsEnum';
import CanvasConfiguration from '../CanvasConfiguration';
import Fruit from './Fruit';
import CanvasRenderer from './CanvasRederer';
import ColliderDetector from './ColliderDetector';

class Canvas {
    private canvasEl: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private width: number = CanvasConfiguration.width;
    private height: number = CanvasConfiguration.height;

    private snake: Snake;
    private fruit: Fruit;

    private canvasRenderer: CanvasRenderer;
    private colliderDetector: ColliderDetector;

    constructor(element: HTMLCanvasElement, snake: Snake, fruit: Fruit) {
        this.canvasEl = element;
        this.canvasEl.width = this.width;
        this.canvasEl.height = this.height;
        this.context = element.getContext('2d');

        this.snake = snake;
        this.fruit = fruit;

        this.canvasRenderer = new CanvasRenderer(this.context);
    }

    public update(): void {
        this.clearCanvas();
        this.drawLines();

        this.canvasRenderer.renderSnake(this.snake);
        this.canvasRenderer.renderSquare(this.fruit.getX(), this.fruit.getY());
    }

    private clearCanvas(): void {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    private drawLines() {
        const numberOfLines = this.width / this.snake.getSize();

        this.context.strokeStyle = 'gray';
        this.context.lineWidth = 2;

        this.drawHorizontalLines(numberOfLines);
        this.drawVerticalLines(numberOfLines);
    }

    private drawHorizontalLines(numberOfLines: number): void {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(0, i * this.snake.getSize());
            this.context.lineTo(this.width, i * this.snake.getSize());
            this.context.stroke();
            this.context.closePath();
        }
    }

    private drawVerticalLines(numberOfLines: number): void {
        for (let i = 0; i <= numberOfLines; i++) {
            this.context.beginPath();
            this.context.moveTo(i * this.snake.getSize(), 0);
            this.context.lineTo(i * this.snake.getSize(), this.height);
            this.context.stroke();
            this.context.closePath();
        }
    }
}

export default Canvas;
