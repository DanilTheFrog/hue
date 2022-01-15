import { Scene } from "../scene.js";
import { ElementsManager } from "../elements-manager";
import { Button } from "../button.js";
import { Binder } from "../binder.js";

export class Lvl2 extends Scene {
    constructor(game) {
        super(game);
        this.elementsManager = new ElementsManager(this.game);
        this.elementsManager.createNewElement("Button", {x:1, y:1, h:50, w:70, text: "back", link:"back"});
        this.binder = new Binder(this.game.control, this.elementsManager.elements)
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
        this.binder.update(time)
        this.update(time)
        this.game.screen.fill("#006588");
        this.game.screen.print({text: "It is lvl 2", x:300, y:300})
        this.elementsManager.render(time);
        super.render(time);
    }
}