import SneakMovements from './SneakMovements/SneakMovementsEnum';
import SneakMovement from './SneakMovements/ISneakMovement';

class Sneak {
    private x: number;
    private y: number;
    private size: number;
    private sneakMovement: SneakMovement = SneakMovements.RIGHT;

    constructor(x: number, y: number, size: number) {
        this.size = size;
        this.x = this.fixAxisValue(x);
        this.y = this.fixAxisValue(y);
    }

    private movePlayer(x: number, y: number): void {
        this.x = this.fixAxisValue(x);
        this.y = this.fixAxisValue(y);
    }

    private fixAxisValue(axisValue: number): number {
        return axisValue - (axisValue % this.size);
    }

    public setMovement(sneakMovementType: SneakMovement) {
        this.sneakMovement = sneakMovementType;
    }

    public makeMovement() {
        console.log(this);
        this.sneakMovement.move(this);
    }

    public moveRight(): void {
        this.movePlayer(this.x + this.size, this.y);
    }

    public moveLeft(): void {
        this.movePlayer(this.x - this.size, this.y);
    }

    public moveUp(): void {
        this.movePlayer(this.x, this.y - this.size);
    }

    public moveDown(): void {
        this.movePlayer(this.x, this.y + this.size);
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getSize(): number {
        return this.size;
    }
}

export default Sneak;
