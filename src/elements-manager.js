import { Button } from "./button";
import { Tile } from "./tile";

export class ElementsManager {
    constructor(game, elements) {
        this.game = game;
        this.elements = [
            [],
            [],
            []
        ];
        if (elements) {
            this.addElements(elements);
        }
        this.create = {
            Button: (data)=> { return new Button(this.game, data); },
            Tile: (data)=> { return new Tile(this.game, data); }
        }
    }

    replaceElement(from, to) {
        
    }

    createNewElement(name, data) {
        console.log("create element")
        if (name && data) {
            this.elements[1].push(this.create[name](data));
        }
    }

    addElements(elements) {
        for(let i=0; i<elements.length; i++) {
            this.elements[1].push(elements[i]);
        }

    }


    render(time) {
        if (this.elements.length > 0) {
            for(let i=0; i<this.elements.length; i++) {
                if (this.elements[i].length > 0) {

                    for(let k=0; k<this.elements[i].length; k++) {
                        
                        this.elements[i][k].render(time);
                    }
                }
            }
        }


    }
}