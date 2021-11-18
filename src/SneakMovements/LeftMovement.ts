import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class LeftMovement implements SneakMovement {
    type: string = 'LEFT';

    move(sneak: Sneak): void {
        sneak.moveLeft();
    }
}

export default LeftMovement;
