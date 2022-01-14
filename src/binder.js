export class Binder {
    constructor(controlState, elements) {
        this.controlState = controlState;
        this.eventPool = controlState.eventPool;
        this.controlCoords = controlState.coords;
        this.elements = elements;
        this.state = {
            click: false,
            hold: false
        }
        this.coords;
        this.target;
        this.targetPath;
    }

    findElement(coords) {
        // return [element [path, path]] path on layers
        for(let i=0; i<this.elements.length; i++) {
            for (let k=0; k<this.elements[i].length; k++) {
                if((this.elements[i][k].position.x1 < coords.x) &&
                (this.elements[i][k].position.x2 > coords.x) &&
                (this.elements[i][k].position.y1 < coords.y) &&
                (this.elements[i][k].position.y2 > coords.y)) {
    
                    return ([this.elements[i][k], [i, k]]);
    
                }
            }
        }
        return [null, null];
    }

    findElementByPath([i, k] = path){

    }

    checkMatch(e1, e2) {
        if (e1 === e2 && e1 != null && e1 != undefined) {
            return true;
        }
        return false;
    }

    update() {
        this.mousePos = this.controlCoords.move;
        // const currentPos = {
        //     x1: (this.mousePos.x - ((pos.x2 - pos.x1)/2)),
        //     y1: (this.mousePos.y - ((pos.y2 - pos.y1)/2))
        // }
        
        if (this.eventPool[0]) {
            const e = this.eventPool[0];
            if (e[0] === "down" && !this.state.click) {
                [this.target, this.targetPath] = this.findElement(e[1]);
                this.state.click = true;
            }

            



            if (e[0] === "up" && this.state.click) {

                const match = this.checkMatch(this.target, this.findElement(e[1])[0]);
                if (match && this.target.controlType === "click") {
                    this.target.action();
                }
                this.state.click = false;
                this.state.hold = false;
            }

        }
    }  
}