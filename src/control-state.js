export class ControlState {
    constructor() {

        this.status = "up";
        this.eventPool = [
            
        ];
        this.coords = {
            move: {
                x: null,
                y: null
            },
            click: {
                x: null,
                y: null
            }
        }
        document.addEventListener('mousedown', (event)=> this.updateState(event, "down"));
        document.addEventListener('mouseup', (event)=> this.updateState(event, "up"));
        document.addEventListener("mousemove", (event)=> this.coordsUpdate(event));
    }

    coordsUpdate(event) {
        event.preventDefault();
        event.stopPropagation();
        let target = event.target.getBoundingClientRect();
        this.coords.move = {
            x: Math.round((event.clientX - target.left)),
            y: Math.round((event.clientY - target.top))
        }
    }

    updateState(event, status) {
        event.preventDefault();
        event.stopPropagation();
        let target = event.target.getBoundingClientRect();
        this.coords.click = {
            x: Math.round((event.clientX - target.left)),
            y: Math.round((event.clientY - target.top))
        }
        this.status = status;
        this.eventPool.unshift([status, this.coords.click]);
        if(this.eventPool.length >= 5) {
            this.eventPool.pop();
        }

    }

}