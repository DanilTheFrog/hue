export class Scene {
    constructor(game) {
        this.game = game;
        this.status = this.constructor.WORKING;
        this.sceneResults;
    }

    static get WORKING () {return 'WORKING'};
    static get LOADED () {return 'LOADED'};
    static get START_GAME () {return 'START_GAME'};
    static get GAME_OVER () {return 'GAME_OVER'};
    static get GAME_WIN () {return 'GAME_WIN'};
    static get FINISHED () {return 'FINISHED'};

    init() {
        this.status = this.constructor.WORKING;
    }

    finish(status, data) {
        this.game.sceneManager.processData(data);
        this.status = status;
    }

    awake() {

    }

    render(time) {
        
    }
}