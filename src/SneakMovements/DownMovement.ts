import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

class DownMovement implements SneakMovement {
    sneak: Sneak;

    move(): void {
        this.sneak.moveDown();
    }
}

export default DownMovement;
