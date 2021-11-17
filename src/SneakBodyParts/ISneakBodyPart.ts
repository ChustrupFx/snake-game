interface BodyPart {
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    size: number;

    moveTo(x: number, y: number): void;
}

export default BodyPart;
