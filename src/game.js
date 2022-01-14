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
        this.currentScene = this.scenes.loading;
        this.currentScene.init();
    }

    changeScene(status) {
        switch(status){
            case Scene.LOADED:
                return this.scenes.menu;
                break;
            case Scene.START_GAME:
                return this.scenes.gameLevel;
                break;
            default:
                return this.scenes.menu;
                break;
        }
    }

    frame(time) {
        if(this.currentScene.status != Scene.WORKING) {
            this.currentScene = this.changeScene(this.currentScene.status);
            this.currentScene.init();
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.frame(time));
    }

    run() {
        requestAnimationFrame(time => this.frame(time));
    }
}
