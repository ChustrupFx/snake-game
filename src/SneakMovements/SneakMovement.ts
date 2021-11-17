import Sneak from '../Sneak';

interface SneakMovement {
    constructor(sneak: Sneak): void;
    execute(): void;
}
