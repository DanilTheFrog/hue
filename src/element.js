export class Element {
    constructor ({game, x, y, w, h}) {
        if (!(game && x && y && w && h)) {
            throw new Error("При создании элемента в базовый класс Element не было передано какое-то из следующих требуемых значений: game x y w h")
        }
        this.game = game;
        this.name;
        this.scale = 1;
        this.sizes = {
            h: h,
            w: w
        }
        this.position = {
            x1: undefined,
            x2: undefined,
            y1: undefined,
            y2: undefined,
        }
        this.setPosition({x1: x, y1:y});
    }



    setName(name) {
        if (name) {
            this.name = name;
        }
    }

    transformScale(s) {
        if((typeof(s) === 'number') && s > 0.01) {
            this.scale = s;
        }
    }

    setPosition({x1, y1} = {}) {
        if((typeof(x1) !== 'number') || typeof(y1) !== 'number') {
            throw new Error("Начальные координаты были заданы не верно. Элемент: " + this.name);
        } else {
            this.position = {
                x1: x1,
                y1: y1,
                x2: x1 + this.sizes.w * this.scale,
                y2: y1 + this.sizes.h * this.scale
            };
        }
    }

    getPosition() {
        return this.position;
    }

    render(time) {

    }
}