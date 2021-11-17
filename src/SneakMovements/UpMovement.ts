import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class UpMovement implements SneakMovement {
    sneak: Sneak;

    move(): void {
        this.sneak.moveUp();
    }
}

export default UpMovement;
