import { Element } from './element';

export class Tile extends Element {
    constructor(game, {x, y, w, h, color} = {}) {
        super({game: game, x:x, y:y, w:w, h:h});
        this.controlType = "hold";
        this.color = color;
    }
    
    action(data) {
        if(data) {
            this.setPosition(data);
        }
    }

    getDisplayData() {
        const pos = this.position;
        return {
            x: pos.x1,
            y: pos.y1,
            h: this.sizes.h,
            w: this.sizes.w,
            color: this.color
        };

    }


    render(time) {
        this.game.screen.fillRect(this.getDisplayData());
    }
}