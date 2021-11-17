class Utils {
    public static fixAxisValue(axisValue: number): number {
        return axisValue - (axisValue % 15);
    }
}

export default Utils;
