import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class DownMovement implements SneakMovement {
    sneak: Sneak;

    move(sneak: Sneak): void {
        sneak.moveDown();
    }
}

export default DownMovement;
