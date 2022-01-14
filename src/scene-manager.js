import { Loading } from "./scenes/loading"
import { Menu } from "./scenes/menu"
import { GameLevel } from "./scenes/game-level"

export class SceneManager {
    constructor({game, Scene}) {
        this.scenes = {
            loading: new Loading(game),
            menu: new Menu(game),
            gameLevel: new GameLevel(game)
        };
        this.session = {
            currentLevel: 0,
            levelsData: []
        }
        this.scene = Scene;
    }
}