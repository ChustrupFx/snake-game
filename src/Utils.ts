import CanvasConfiguration from '../CanvasConfiguration';

class Utils {
    public static fixAxisValue(axisValue: number): number {
        return axisValue - (axisValue % CanvasConfiguration.tileSize);
    }
}

export default Utils;
