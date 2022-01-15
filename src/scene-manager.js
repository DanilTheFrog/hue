import { Loading } from "./scenes/loading"
import { Menu } from "./scenes/menu"
import { GameLevel } from "./scenes/game-level"
import { Scene } from "./scene";
import { Lvl1 } from "./scenes/lvl1";
import { Lvl2 } from "./scenes/lvl2";

export class SceneManager {
    constructor({game, Scene}) {
        this.scenes = {
            loading: new Loading(game),
            menu: new Menu(game),
            gameLevel: new GameLevel(game),
            lvl1: new Lvl1(game),
            lvl2: new Lvl2(game)
        };

        this.offers;

        this.currentScene = this.scenes.loading

        this.session = {
            currentLevel: 0,
            levelsData: [],
            history: []
        }
        this.scene = Scene;
    }

    offerNextScene(scene) {
        if (scene) {
            this.offers = scene;
        }
    }

    processData(data) {

    }

    changeScene(status, results) {
            
        if (status && results) {
            this.currentScene = this.scenes[results]
            this.session.history.push(this.currentScene);
            return this.currentScene
        }
        if(status && this.offers) {
            if (this.offers === "back") {
                const last = this.session.history[this.session.history.length-2]
                this.session.history.pop();
                this.currentScene = last
                
                this.offers = undefined
                return this.currentScene
            }
            this.currentScene = this.scenes[this.offers]
            this.session.history.push(this.currentScene);
            const off = this.offers;
            this.offers = undefined;
            return this.currentScene
        }

    }
}