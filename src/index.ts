import './assets/style.css';

class Canvas {
    private canvasEl: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(element: HTMLCanvasElement) {
        this.canvasEl = element;
        this.context = element.getContext('2d');
    }
}

const canvasEl = document.querySelector('canvas');
const canvas = new Canvas(canvasEl);
