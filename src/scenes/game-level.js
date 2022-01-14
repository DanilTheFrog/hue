import { Scene } from "../scene";
import { Button } from "../button";
import { ElementsManager } from "../elements-manager";
import { Binder } from "../binder";
import { Tile } from "../tile";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.game = game;
        let elements = [
            new Tile(game, {x: 100, y: 100, h: 100, w:70, color: "#880000"}),
            new Tile(game, {x: 200, y: 100, h: 100, w:70, color: "#000066"}),
            new Tile(game, {x: 300, y: 100, h: 100, w:70, color: "#6f61f2"}),
            new Tile(game, {x: 400, y: 100, h: 100, w:70, color: "#c861f2"}),
            new Tile(game, {x: 500, y: 100, h: 100, w:70, color: "#c881f2"}),
            new Tile(game, {x: 600, y: 100, h: 100, w:70, color: "#c86662"}),
        ]
        this.elementsManager = new ElementsManager(elements);
        this.binder = new Binder(this.game.control, this.elementsManager.elements);
    }

    init() {
        super.init();
    }

    render(time) {
        this.binder.update();
        this.game.screen.fill("#111");
        this.elementsManager.render(time);
        super.render(time);
    }
}