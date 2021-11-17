import './assets/style.css';
import Canvas from './Canvas';

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

const canvasEl: HTMLCanvasElement = document.querySelector('canvas');
const canvas = new Canvas(canvasEl);
