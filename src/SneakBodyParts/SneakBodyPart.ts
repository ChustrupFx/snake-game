import CanvasConfiguration from '../../CanvasConfiguration';
import Utils from '../Utils';
import ISneakBodyPart from './ISneakBodyPart';

class SneakBodyPart implements ISneakBodyPart {
    public x: number;
    public y: number;
    public size: number;

    lastX: number;
    lastY: number;

    constructor(x: number, y: number) {
        this.x = Utils.fixAxisValue(x);
        this.y = Utils.fixAxisValue(y);
        this.size = CanvasConfiguration.tileSize;
    }

    public moveTo(x: number, y: number): void {
        this.lastX = this.x;
        this.lastY = this.y;

        this.x = Utils.fixAxisValue(x);
        this.y = Utils.fixAxisValue(y);
    }
}

export default SneakBodyPart;
