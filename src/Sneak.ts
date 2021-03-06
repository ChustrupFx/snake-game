import SneakMovements from './SneakMovements/SneakMovementsEnum';
import SneakMovement from './SneakMovements/ISneakMovement';
import SneakBody from './SneakBody/SneakBody';
import SneakBodyPart from './SneakBodyParts/SneakBodyPart';
import Utils from './Utils';

class Sneak {
    private body: SneakBody;
    private sneakMovement: SneakMovement = SneakMovements.RIGHT;
    private initialTailLength: number;

    constructor(
        x: number = Utils.generateRandomXValue(),
        y: number = Utils.generateRandomYValue(),
        tailLenght = 3
    ) {
        this.body = new SneakBody(x, y, tailLenght);
        this.initialTailLength = tailLenght;
    }

    private movePlayer(x: number, y: number): void {
        this.body.moveTo(x, y);
    }

    public setMovement(sneakMovementType: SneakMovement) {
        this.sneakMovement = sneakMovementType;
    }

    public makeMovement() {
        this.sneakMovement.move(this);
    }

    public moveRight(): void {
        this.movePlayer(
            this.body.getHead().x + this.body.getHead().size,
            this.body.getHead().y
        );
    }

    public moveLeft(): void {
        this.movePlayer(
            this.body.getHead().x - this.body.getHead().size,
            this.body.getHead().y
        );
    }

    public moveUp(): void {
        this.movePlayer(
            this.body.getHead().x,
            this.body.getHead().y - this.body.getHead().size
        );
    }

    public moveDown(): void {
        this.movePlayer(
            this.body.getHead().x,
            this.body.getHead().y + this.body.getHead().size
        );
    }

    public spawnInRandomCoords(): void {
        this.body = new SneakBody(
            Utils.generateRandomXValue(),
            Utils.generateRandomYValue(),
            this.initialTailLength
        );
        this.setMovement(SneakMovements.RIGHT);
    }

    public increaseTailLength(): void {
        this.body.increaseTailLength();
    }

    public getX(): number {
        return this.body.getHead().x;
    }

    public getY(): number {
        return this.body.getHead().y;
    }

    public getSize(): number {
        return this.body.bodyPartSize;
    }

    public getHead(): SneakBodyPart {
        return this.body.getHead();
    }

    public getTail(): Array<SneakBodyPart> {
        return this.body.getTail();
    }

    public getCurrentMovement(): SneakMovement {
        return this.sneakMovement;
    }
}

export default Sneak;
