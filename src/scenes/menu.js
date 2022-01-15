import { Scene } from "../scene";
import { Button } from "../button";
import { ElementsManager } from "../elements-manager";
import { Binder } from "../binder";

export class Menu extends Scene {
    constructor(game) {
        super(game);
        this.game = game;
        this.delay = 0;
        this.elements = [
            new Button(game, {text:"1 lvl", x:200, y:200, h:50, w:100, link: "lvl1"}),
            new Button(game, {text:"2 lvl", x:200, y:300, h:50, w:100, link: "lvl2"}),
            new Button(game, {text:"gameLevel", x:200, y:400, h:50, w:150, link: "gameLevel"}),
            new Button(game, {text:"4 lvl", x:200, y:500, h:50, w:100}),
            new Button(game, {text:"bruh", x:400, y:500, h:50, w:200}),
            new Button(game, {text:"ура победа", x:800, y:300, h:100, w:40}),
            
        ];
        this.elementsManager = new ElementsManager(this.game, this.elements);
        this.binder = new Binder(this.game.control, this.elementsManager.elements);
        
    }

    update(time) {
        if (this.game.sceneManager.offers) {
            this.finish(Scene.FINISHED);
        }

    }
    
    render(time) {
        this.binder.update();
        this.update(time);
        this.game.screen.fill("#222222");
        this.game.screen.print({text: "Нажми пробел",x: this.game.screen.width/2, y: this.game.screen.height/2});
        
        this.elementsManager.render(time);
        super.render(time);
    }
}