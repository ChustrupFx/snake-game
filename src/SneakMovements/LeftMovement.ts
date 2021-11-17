import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class LeftMovement implements SneakMovement {
    sneak: Sneak;

    move(sneak: Sneak): void {
        sneak.moveLeft();
    }
}


export default LeftMovement;
