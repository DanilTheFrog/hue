import { Screen } from "./screen";
import { ControlState } from "./control-state";
import { Scene } from "./scene";
import { SceneManager } from "./scene-manager";


export class Game {
    constructor({width = 1000, height = 600} = {}){
        this.control = new ControlState();
        this.screen = new Screen(width, height);
        this.sceneManager = new SceneManager({game: this});
        this.scenes = this.sceneManager.scenes;
        this.currentScene = this.sceneManager.currentScene;
        this.currentScene.init();
    }



    frame(time) {
        if(this.currentScene.status != Scene.WORKING) {
            // console.log("Смена c");
            // console.log(this.currentScene)
            this.currentScene = this.sceneManager.changeScene(this.currentScene.status, this.currentScene.results);
            this.currentScene.init();
            // console.log("Смена на");
            // console.log(this.currentScene)
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.frame(time));
    }

    run() {
        requestAnimationFrame(time => this.frame(time));
    }
}
