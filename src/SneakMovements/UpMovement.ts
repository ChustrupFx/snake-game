import Sneak from '../Sneak';
import SneakMovement from './SneakMovement';

class UpMovement implements SneakMovement {
    sneak: Sneak;

    constructor(sneak: Sneak) {
        this.sneak = sneak;
    }

    move(): void {
        this.sneak.moveUp();
    }
}
