import SneakBodyPart from '../SneakBodyParts/SneakBodyPart';
import ISneakBody from './ISneakBody';

class SneakBody implements ISneakBody {
    public bodyPartSize: number;

    head: SneakBodyPart;
    tail: Array<SneakBodyPart>;

    constructor(headX: number, headY: number, tailLength: number) {
        this.head = new SneakBodyPart(headX, headY);
        this.tail = [];
        this.bodyPartSize = 15;

        this.generateTail(tailLength);
    }

    public moveTo(x: number, y: number): void {
        for (let i = this.tail.length; i >= 0; i--) {
            if (i === this.tail.length) {
                this.head.moveTo(x, y);
                continue;
            }

            if (i === this.tail.length - 1) {
                this.tail[i].moveTo(this.head.lastX, this.head.lastY);
                continue;
            }

            this.tail[i].moveTo(this.tail[i + 1].lastX, this.tail[i + 1].lastY);
        }
    }

    public getHead(): SneakBodyPart {
        return this.head;
    }

    public getTail() {
        return this.tail;
    }

    public increaseTailLength(): void {
        console.log('asd');
        const newTailX: number = this.tail[0].lastX;
        const newTailY: number = this.tail[0].lastY;
        const newTailPart: SneakBodyPart = new SneakBodyPart(
            newTailX,
            newTailY
        );
        this.tail.unshift(newTailPart);
    }

    private generateTail(tailLength: number): void {
        for (let i = tailLength; i >= 0; i--) {
            const newTailX: number = this.head.x - this.bodyPartSize * (i + 1);
            const newTailY: number = this.head.y;

            const tail: SneakBodyPart = new SneakBodyPart(newTailX, newTailY);

            this.tail.push(tail);
        }
    }
}

export default SneakBody;
