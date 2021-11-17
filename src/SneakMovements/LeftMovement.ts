import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class LeftMovement implements SneakMovement {
    sneak: Sneak;

    move(): void {
        this.sneak.moveLeft();
    }
}

export default LeftMovement;
