import Sneak from '../Sneak';
import SneakMovement from './SneakMovement';

class LeftMovement implements SneakMovement {
    sneak: Sneak;

    constructor(sneak: Sneak) {
        this.sneak = sneak;
    }

    move(): void {
        this.sneak.moveLeft();
    }
}
