import {Shape} from "./Shape";
import {Circle} from "./Shape";
import {Rectangle} from "./Shape";
import {Square} from "./Shape";

let shape: Shape = new Shape("red", false);
console.log(shape);
console.log(shape.toString());

let circle = new Circle('red',true,3.5);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());

let rectangle: Rectangle = new Rectangle("orange", true,20,10);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

let square: Square = new Square("yellow", true,5.8);
console.log(square);
console.log(square.toString());