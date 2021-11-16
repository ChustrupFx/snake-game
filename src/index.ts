import './assets/style.css';

interface Listener {
    code: string;
    callback: Function;
}

class KeyboardListener {
    private listeners: Array<Listener> = [];

    constructor() {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            this.handleKeyDown(event);
        });
    }

    private handleKeyDown(e: KeyboardEvent): void {
        this.listeners.forEach((listener) => {
            if (e.code === listener.code) listener.callback();
        });
    }

    public on(code: string, callback: Function): void {
        this.listeners.push({
            code,
            callback,
        });
    }
}

class Sneak {
    private x: number;
    private y: number;
    private size: number;

    constructor(x, y, size) {
        this.size = size;
        this.x = this.fixAxisValue(x);
        this.y = this.fixAxisValue(y);
    }

    private movePlayer(x: number, y: number): void {
        this.x = this.fixAxisValue(x);
        this.y = this.fixAxisValue(y);
    }

    private fixAxisValue(axisValue: number): number {
        return axisValue - (axisValue % this.size);
    }

    public moveRight(): void {
        this.movePlayer(this.x + this.size, this.y);
    }

    public moveLeft(): void {
        this.movePlayer(this.x - this.size, this.y);
    }

    public moveUp(): void {
        this.movePlayer(this.x, this.y + this.size);
    }

    public moveDown(): void {
        this.movePlayer(this.x, this.y - this.size);
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getSize(): number {
        return this.size;
    }
}

class Canvas {
    private canvasEl: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private width: number = 600;
    private height: number = 600;

    private player = new Sneak(50, 50, 10);

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
            this.player.getX(),
            this.player.getY(),
            this.player.getSize(),
            this.player.getSize()
        );
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

const canvasEl: HTMLCanvasElement = document.querySelector('canvas');
const canvas = new Canvas(canvasEl);
