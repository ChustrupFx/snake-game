import Sneak from '../Sneak';

interface SneakMovement {
    sneak: Sneak;

    move(sneak: Sneak): void;
}

export default SneakMovement;
