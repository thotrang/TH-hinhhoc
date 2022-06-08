export class Shape {
    private _color: string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set fiiler(value: boolean) {
        this._filled = value;
    }

    toString() {
        return `A Shape with color of ${this._color} and ${this._filled ? 'filled' : 'not filled'}`
    }
}

export class Circle extends Shape {
    private _radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    getArea() {
        return Math.PI * this._radius * this._radius;
    }

    getPerimeter() {
        return 2 * this._radius * Math.PI;
    }

    toString(): string {
        return `A Circle with radius=${this._radius}, which is a subclass of ${super.toString()}`
    }
}

export class Rectangle extends Shape {
    private _width: number;
    private _length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    getArea() {
        return this._width * this._length;
    }

    getPerimeter() {
        return (this._width + this._length) * 2;
    }

    toString(): string {
        return `A Rectangle with width=${this._width} and length=${this._length}, which is a subclass of ${super.toString()}`
    }
}

export class Square extends Rectangle {

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }

    getSide() {
        return this.length;
    }

    setSide(side:number) {
        this.length = side;
    }


    //Override method
    public toString(): string {

        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}