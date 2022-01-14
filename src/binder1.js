export class Binder {
    constructor(controlState, elements) {

        this.eventPool = controlState.eventPool;
        this.controlCoords = controlState.coords;
        this.elements = elements;
        this.clicked = false;
        this.coords;
        this.target;
        this.pressed = false;
        this.hold = false;

    }

    findElement(coord) {
        for(let i=0; i<this.elements.length; i++) {
            if((this.elements[i].position.x1 < this.coords.x) &&
            (this.elements[i].position.x2 > this.coords.x) &&
            (this.elements[i].position.y1 < this.coords.y) &&
            (this.elements[i].position.y2 > this.coords.y)) {

                return (this.elements[i]);

            }
        }
        return "nothing";
    }

    checkMatch(e1, e2) {
        if (e1 === e2) {
            return true;
        }
        return false;
    }

    update() {
        this.pressed = false;
        this.mousePos = this.controlCoords.move;
        if (this.eventPool[0]) {
            let e = this.eventPool[0]
            if (e[0] === "down" && !this.clicked) {
                this.coords = e[1];
                this.target = this.findElement(e[1]);
                this.clicked = true;
                this.hold = true;
                this.pressed = true;
            }
            
            if(this.target && this.target.controlType === "hold" && this.hold){
                let pos = this.target.position;
                const currentPos = {
                    x1: (this.mousePos.x - ((pos.x2 - pos.x1)/2)),
                    y1: (this.mousePos.y - ((pos.y2 - pos.y1)/2)),
                    x2: (this.mousePos.x + ((pos.x2 - pos.x1)/2)),
                    y2: (this.mousePos.y + ((pos.y2 - pos.y1)/2))
                }

                this.target.action(currentPos);
            }

            if (this.clicked && e[0] === "up") {
                this.hold = false;
                this.coords = e[1];
                let condition = this.checkMatch(this.target, this.findElement(e[1]));

                if (condition && this.target !== "nothing" && this.target.controlType === "click") {
                    console.log(this.target)
                    this.target.action();
                    this.pressed = true;
                }
                this.pressed = false;
                this.clicked = false;
            }
        }
    }  
}