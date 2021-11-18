import SneakMovement from './ISneakMovement';
import Sneak from '../Sneak';

class RightMovement implements SneakMovement {
    type: string = 'RIGHT';

    move(sneak: Sneak): void {
        sneak.moveRight();
    }
}

export default RightMovement;
