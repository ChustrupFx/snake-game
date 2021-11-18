import CanvasConfiguration from '../CanvasConfiguration';
import Sneak from './Sneak';
import SneakBodyPart from './SneakBodyParts/SneakBodyPart';

class CanvasRenderer {
    private context: CanvasRenderingContext2D;
    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    public renderSnake(snake: Sneak): void {
        const head = snake.getHead();
        const tail = snake.getTail();

        this.context.fillRect(
            head.x,
            head.y,
            CanvasConfiguration.tileSize,
            CanvasConfiguration.tileSize
        );

        tail.forEach((tailPart: SneakBodyPart) => {
            this.context.fillRect(
                tailPart.x,
                tailPart.y,
                CanvasConfiguration.tileSize,
                CanvasConfiguration.tileSize
            );
        });
    }

    public renderSquare(
        x: number,
        y: number,
        size = CanvasConfiguration.tileSize
    ): void {
        this.context.fillRect(x, y, size, size);
    }
}

export default CanvasRenderer;
