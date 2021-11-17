import DownMovement from './DownMovement';
import LeftMovement from './LeftMovement';
import RightMovement from './RightMovement';
import UpMovement from './UpMovement';

class SneakMovementsEnum {
    public static UP = new UpMovement();
    public static DOWN = new DownMovement();
    public static LEFT = new LeftMovement();
    public static RIGHT = new RightMovement();
}

export default SneakMovementsEnum;
