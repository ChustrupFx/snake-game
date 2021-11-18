import CanvasConfiguration from '../CanvasConfiguration';
import Utils from './Utils';

class Fruit {
    private x: number;
    private y: number;

    constructor(
        x: number = Utils.generateRandomXValue(),
        y: number = Utils.generateRandomYValue()
    ) {
        this.x = Utils.fixAxisValue(x);
        this.y = Utils.fixAxisValue(y);
    }

    public spawnInRandomCoords() {
        const newX: number = Utils.generateRandomXValue();
        const newY: number = Utils.generateRandomYValue();

        this.x = newX;
        this.y = newY;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}

export default Fruit;
