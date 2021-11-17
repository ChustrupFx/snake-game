import SneakMovements from './SneakMovements/SneakMovementsEnum';
import SneakMovement from './SneakMovements/ISneakMovement';
import Utils from './Utils';
import SneakBodyPart from './SneakBodyParts/SneakBodyPart';

class Sneak {
    private head = new SneakBodyPart(50, 50);
    private sneakMovement: SneakMovement = SneakMovements.RIGHT;

    constructor(x: number, y: number) {
        this.head.size = 15;
        this.head.x = Utils.fixAxisValue(x);
        this.head.y = Utils.fixAxisValue(y);
    }

    private movePlayer(x: number, y: number): void {
        this.head.moveTo(x, y);
    }

    public setMovement(sneakMovementType: SneakMovement) {
        this.sneakMovement = sneakMovementType;
    }

    public makeMovement() {
        this.sneakMovement.move(this);
    }

    public moveRight(): void {
        this.movePlayer(this.head.x + this.head.size, this.head.y);
    }

    public moveLeft(): void {
        this.movePlayer(this.head.x - this.head.size, this.head.y);
    }

    public moveUp(): void {
        this.movePlayer(this.head.x, this.head.y - this.head.size);
    }

    public moveDown(): void {
        this.movePlayer(this.head.x, this.head.y + this.head.size);
    }

    public getX(): number {
        return this.head.x;
    }

    public getY(): number {
        return this.head.y;
    }

    public getSize(): number {
        return this.head.size;
    }
}

export default Sneak;
