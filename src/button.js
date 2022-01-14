import { Element } from "./element";

export class Button extends Element{
    constructor(game, {x, y, w, h, text, color, fontColor}) {
        super({game: game, x:x, y:y, h:h, w:w});
        this.text = text;
        this.controlType = "click";
        this.color = color;
        this.animation = {
            t: 50,
            currentTime: 0,
            running: false
        }
        
    }

    action() {
        this.animation.running = true;
    }

    getDisplayData() {
        const data = {
            x: this.position.x1,
            y: this.position.y1,
            w: this.sizes.w,
            h: this.sizes.h,
            color: this.color,
            text: this.text
        }
        return data;
    }

    render(time) {
        let displayData = this.getDisplayData();
        if (!this.animation.running) {
            this.game.screen.drawButton(displayData);
        } else {
            if ( this.animation.t > this.animation.currentTime) {
                displayData.color = `rgb(0,${20+this.animation.currentTime*2},0)`;
                this.animation.currentTime++;
                this.game.screen.drawButton(displayData);
            } else {
                this.animation.running = false;
                this.animation.currentTime = 0;
            }
        }
    }

    
}