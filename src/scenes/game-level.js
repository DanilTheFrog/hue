import { Scene } from "../scene";
import { Button } from "../button";
import { ElementsManager } from "../elements-manager";
import { Binder } from "../binder";
import { Tile } from "../tile";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);

        let elements = [
            new Button(game, {x: 1, y: 1, h: 50, w:70, text: "back", link: "back"}),
            new Tile(game, {x: 100, y: 100, h: 100, w:70, color: "#880000"}),
            new Tile(game, {x: 200, y: 100, h: 100, w:70, color: "#000066"}),
            new Tile(game, {x: 300, y: 100, h: 100, w:70, color: "#6f61f2"}),
            new Tile(game, {x: 400, y: 100, h: 100, w:70, color: "#c861f2"}),
            new Tile(game, {x: 500, y: 100, h: 100, w:70, color: "#c881f2"}),
            new Tile(game, {x: 600, y: 100, h: 100, w:70, color: "#c86662"}),
        ]
        this.elementsManager = new ElementsManager(this.game, elements);
        this.binder = new Binder(this.game.control, this.elementsManager.elements);
    }

    init() {
        super.init();
    }

    update(time) {
        if (this.game.sceneManager.offers) {
            this.finish(Scene.FINISHED);
        }
    }

    render(time) {
        this.binder.update();
        this.update()
        this.game.screen.fill("#111");
        this.elementsManager.render(time);
        super.render(time);
    }
}