import Sneak from '../Sneak';

interface SneakMovement {
    type: string;

    move(sneak: Sneak): void;
}

export default SneakMovement;
