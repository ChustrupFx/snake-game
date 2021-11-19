import Fruit from '../Fruit';
import Game from '../Game';
import Sneak from '../Sneak';

test('if fruit respawns when sneak collides with it', () => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');

    const game = new Game(canvas);

    const gameFruit: Fruit = game.getFruit();
    const gameSnake: Sneak = game.getSneak();

    const currentFruitCoords = {
        x: gameFruit.getX(),
        y: gameFruit.getY(),
    };

    gameSnake.movePlayer(currentFruitCoords.x, currentFruitCoords.y);
    console.log(gameFruit.getX());

    game.update();

    console.log(gameFruit.getX());
    expect.expect(currentFruitCoords.x).not.toEqual(gameFruit.getX());
});
