import SneakMovement from './ISneakMovement';
import Sneak from '../Sneak';

class RightMovement implements SneakMovement {
    sneak: Sneak;

    move(sneak: Sneak): void {
        sneak.moveRight();
    }
}

export default RightMovement;
