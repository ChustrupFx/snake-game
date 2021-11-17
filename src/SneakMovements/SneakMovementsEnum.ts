import DownMovement from './DownMovement';
import SneakMovement from './ISneakMovement';
import LeftMovement from './LeftMovement';
import RightMovement from './RightMovement';
import UpMovement from './UpMovement';

export default class SneakMovementsEnum {
    public static UP: SneakMovement = new UpMovement();
    public static DOWN: SneakMovement = new DownMovement();
    public static LEFT: SneakMovement = new LeftMovement();
    public static RIGHT: SneakMovement = new RightMovement();
}
