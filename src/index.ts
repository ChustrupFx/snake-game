import './assets/style.css';
import Canvas from './Canvas';
import Game from './Game';

const canvasEl: HTMLCanvasElement = document.querySelector('canvas');

const game = new Game(canvasEl);
