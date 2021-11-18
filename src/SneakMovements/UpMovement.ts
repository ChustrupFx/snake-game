import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class UpMovement implements SneakMovement {
    type: string = 'UP';

    move(sneak: Sneak): void {
        sneak.moveUp();
    }
}

export default UpMovement;
