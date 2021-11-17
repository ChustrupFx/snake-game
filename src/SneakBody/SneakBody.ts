import SneakBodyPart from '../SneakBodyParts/SneakBodyPart';
import ISneakBody from './ISneakBody';

class SneakBody implements ISneakBody {
    public bodyPartSize: number;

    head: SneakBodyPart;
    tail: Array<SneakBodyPart>;

    constructor(headX: number, headY: number, tailLength: number) {
        this.head = new SneakBodyPart(headX, headY, 15);
        this.tail = [];
        this.bodyPartSize = 15;

        this.generateTail(tailLength);
    }

    public moveTo(x: number, y: number): void {
        for (let i = 0; i <= this.tail.length; i++) {
            if (i === 0) {
                this.head.moveTo(x, y);
                continue;
            }
        }
    }

    public getHead(): SneakBodyPart {
        return this.head;
    }

    public getTail() {
        return this.tail;
    }

    private generateTail(tailLength: number): void {
        for (let i = 0; i < tailLength; i++) {
            const newTailX: number = this.head.x - this.bodyPartSize * (i + 1);
            const newTailY: number = this.head.y;

            const tail: SneakBodyPart = new SneakBodyPart(
                newTailX,
                newTailY,
                this.bodyPartSize
            );

            this.tail.push(tail);
        }
    }
}

export default SneakBody;
