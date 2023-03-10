import p5, { Vector } from "p5";

export default class Apple {
    size: number;
    gridSize: Vector;
    position: Vector;

    constructor(gridSize: Vector, size: number = 10) {
        this.size = size;
        this.gridSize = gridSize;
        this.position = new Vector(
            Math.round(Math.random() * (this.gridSize.x - 1)),
            Math.round(Math.random() * (this.gridSize.y - 1))
        );
    }

    draw(p: p5) {
        // p.fill(255, 0, 0, 255);
        // p.rect(this.position.x * this.size, this.position.y * this.size, this.size, this.size);
        p.circle((this.position.x + .5) * this.size, (this.position.y + .5) * this.size, this.size);
    }
}
