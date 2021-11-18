import Fruit from './Fruit';
import Snake from './Sneak';

class ColliderDetector {
    private fruit: Fruit;
    private snake: Snake;

    constructor(snake: Snake, fruit: Fruit) {
        this.fruit = fruit;
        this.snake = snake;
    }

    public collisionDetected() {
        return this.isSameXAxisValue() && this.isSameYAxisValue();
    }

    private isSameXAxisValue(): boolean {
        return this.fruit.getX() === this.snake.getX();
    }

    private isSameYAxisValue(): boolean {
        return this.fruit.getY() === this.snake.getY();
    }
}

export default ColliderDetector;
