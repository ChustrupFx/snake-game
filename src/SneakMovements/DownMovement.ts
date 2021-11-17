import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

export default class DownMovement implements SneakMovement {
    sneak: Sneak;

    move(sneak: Sneak): void {
        sneak.moveDown();
    }
}
