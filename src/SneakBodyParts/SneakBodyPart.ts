import Utils from '../Utils';
import ISneakBodyPart from './ISneakBodyPart';

class SneakBodyPart implements ISneakBodyPart {
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    size: number;

    constructor(x: number, y: number) {
        this.x = Utils.fixAxisValue(x);
        this.y = Utils.fixAxisValue(y);
        this.size = 15;
    }

    public moveTo(x: number, y: number): void {
        this.lastX = this.x;
        this.lastY = this.y;

        this.x = Utils.fixAxisValue(x);
        this.y = Utils.fixAxisValue(y);
    }
}

export default SneakBodyPart;
