
export class ElementsManager {
    constructor(elements) {
        this.elements = [
            [],
            [],
            []
        ];
        if (elements) {
            this.addElements(elements);
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