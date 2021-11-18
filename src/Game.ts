import Fruit from './Fruit';
import Sneak from './Sneak';
import KeyboardListener from './KeyboardListener';
import Canvas from './Canvas';
import SneakMovements from './SneakMovements/SneakMovementsEnum';
import ColliderDetector from './ColliderDetector';

class Game {
    private canvas: Canvas;

    private player: Sneak = new Sneak();
    private fruit: Fruit = new Fruit();
    private keyBoardListener: KeyboardListener = new KeyboardListener();
    private colliderDetector: ColliderDetector;

    constructor(element: HTMLCanvasElement) {
        this.canvas = new Canvas(element, this.player, this.fruit);
        this.colliderDetector = new ColliderDetector(this.player, this.fruit);

        this.bindKeyboardEvents();

        setInterval(() => {
            this.update();
        }, 100);
    }

    private update(): void {
        this.player.makeMovement();

        if (this.colliderDetector.snakeCollidedWithFruit()) {
            this.fruit.spawnInRandomCoords();
            this.player.increaseTailLength();
        }

        this.canvas.update();
    }

    private bindKeyboardEvents(): void {
        this.keyBoardListener.on('KeyW', () => {
            if (this.player.getCurrentMovement().type !== 'DOWN')
                this.player.setMovement(SneakMovements.UP);
        });
        this.keyBoardListener.on('KeyA', () => {
            if (this.player.getCurrentMovement().type !== 'RIGHT')
                this.player.setMovement(SneakMovements.LEFT);
        });
        this.keyBoardListener.on('KeyS', () => {
            if (this.player.getCurrentMovement().type !== 'UP')
                this.player.setMovement(SneakMovements.DOWN);
        });
        this.keyBoardListener.on('KeyD', () => {
            if (this.player.getCurrentMovement().type !== 'LEFT')
                this.player.setMovement(SneakMovements.RIGHT);
        });
    }
}

export default Game;
