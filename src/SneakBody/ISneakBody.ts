import SneakBodyPart from '../SneakBodyParts/SneakBodyPart';

interface ISneakBody {
    head: SneakBodyPart;
    tail: Array<SneakBodyPart>;
    bodyPartSize: number;

    moveTo(x: number, y: number): void;
    getHead(): SneakBodyPart;
}

export default ISneakBody;
