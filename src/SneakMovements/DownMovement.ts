import Sneak from '../Sneak';
import SneakMovement from './ISneakMovement';

export default class DownMovement implements SneakMovement {
    type: string = 'DOWN';

    move(sneak: Sneak): void {
        sneak.moveDown();
    }
}
