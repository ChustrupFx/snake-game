import CanvasConfiguration from '../CanvasConfiguration';
import Utils from './Utils';

class Fruit {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = Utils.fixAxisValue(x);
        this.y = Utils.fixAxisValue(y);
    }

    public respawnInRandomCoords() {
        const newX = Math.random() * CanvasConfiguration.width;
        const newXFixed = Utils.fixAxisValue(newX);

        const newY = Math.random() * CanvasConfiguration.height;
        const newYFixed = Utils.fixAxisValue(newY);

        this.x = newXFixed;
        this.y = newYFixed;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}

export default Fruit;
