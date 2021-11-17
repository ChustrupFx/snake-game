import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class UpMovement implements SneakMovement {
    sneak: Sneak;

    move(sneak: Sneak): void {
        sneak.moveUp();
    }
}

export default UpMovement;
