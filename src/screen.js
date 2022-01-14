export class Screen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas(width, height);
        this.context = this.canvas.getContext("2d");
    }

    createCanvas(width, height) {
        let elements = document.getElementsByTagName("canvas");

        const canvas = elements[0] || document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        document.getElementById("game").appendChild(canvas);
        return canvas;
    }

    getCanvas() {
        return this.canvas;
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    fillRect({x, y, w, h, color}) {
        this.context.fillStyle = color || "#000";
        this.context.fillRect(x, y, w, h);
    }

    print({text, x, y, size, fontColor}) {
        this.context.font = `${size || 24}px Arial`;
        this.context.fillStyle = fontColor || "#ffffff";
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.fillText((text || "Текст не найден"), x, y);
    }

    drawButton({text, x, y, w, h, size, color, fontColor}) {
        this.fillRect({x:x, y:y, w:w, h:h, color:color});
        this.print({text: text, x: (x+w/2), y: (y+h/2), size:size, fontColor:fontColor});
    }
}