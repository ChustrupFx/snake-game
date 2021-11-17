import SneakBodyPart from '../SneakBodyParts/SneakBodyPart';
import ISneakBody from './ISneakBody';

class SneakBody implements ISneakBody {
    public tailLength: number;
    public bodyPartSize: number;

    head: SneakBodyPart;
    tail: Array<SneakBodyPart>;

    constructor(headX: number, headY: number) {
        this.head = new SneakBodyPart(headX, headY, 15);
        this.bodyPartSize = 15;
    }

    public moveTo(x: number, y: number): void {
        this.head.moveTo(x, y);
    }

    public getHead(): SneakBodyPart {
        return this.head;
    }

    public getTail() {
        return this.tail;
    }
}

export default SneakBody;
