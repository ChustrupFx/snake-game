import SneakMovement from './SneakMovement';
import Sneak from '../Sneak';

class RightMovement implements SneakMovement {
    sneak: Sneak;

    constructor(sneak: Sneak) {
        this.sneak = sneak;
    }

    move() {
        this.sneak.moveRight();
    }
}
 