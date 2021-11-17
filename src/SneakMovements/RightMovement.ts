import SneakMovement from './ISneakMovement';
import Sneak from '../Sneak';

class RightMovement implements SneakMovement {
    sneak: Sneak;

    move() {
        this.sneak.moveRight();
    }
}

export default RightMovement;
