import CanvasConfiguration from '../CanvasConfiguration';

class Utils {
    public static fixAxisValue(axisValue: number): number {
        return axisValue - (axisValue % CanvasConfiguration.tileSize);
    }

    public static generateRandomXValue(): number {
        const randomX: number = Math.random() * CanvasConfiguration.width;
        return Utils.fixAxisValue(randomX);
    }

    public static generateRandomYValue(): number {
        const randomY: number = Math.random() * CanvasConfiguration.height;
        return Utils.fixAxisValue(randomY);
    }
}

export default Utils;
