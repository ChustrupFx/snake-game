import Fruit from './Fruit';
import Snake from './Sneak';
import SneakBodyPart from './SneakBodyParts/SneakBodyPart';

class ColliderDetector {
    private fruit: Fruit;
    private snake: Snake;

    constructor(snake: Snake, fruit: Fruit) {
        this.fruit = fruit;
        this.snake = snake;
    }

    public snakeCollidedWithItself(): boolean {
        const snakeHead: SneakBodyPart = this.snake.getHead();
        const snakeTail: Array<SneakBodyPart> = this.snake.getTail();

        for (const tailPart of snakeTail) {
            if (
                this.twoPointsCollided(
                    tailPart.x,
                    tailPart.y,
                    snakeHead.x,
                    snakeHead.y
                )
            ) {
                return true;
            }
        }

        return false;
    }

    public snakeCollidedWithFruit(): boolean {
        return this.twoPointsCollided(
            this.fruit.getX(),
            this.fruit.getY(),
            this.snake.getX(),
            this.snake.getY()
        );
    }

    private twoPointsCollided(
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): boolean {
        return this.isSameXAxisValue(x1, x2) && this.isSameXAxisValue(y1, y2);
    }

    private isSameXAxisValue(x1: number, x2: number): boolean {
        return x1 === x2;
        return this.fruit.getX() === this.snake.getX();
    }

    private isSameYAxisValue(y1: number, y2: number): boolean {
        return y1 === y2;
        return this.fruit.getY() === this.snake.getY();
    }
}

export default ColliderDetector;
