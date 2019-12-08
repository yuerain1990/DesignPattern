import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Rectangle } from "./Rectangle";


export enum ShapeType {
    CIRCLE = 0,
    SQUARE = 1,
    RECTANGLE = 2,
}

export class ShapeFactory {
    public getShape(shapeType: ShapeType): Shape {
        switch (shapeType) {
            case ShapeType.CIRCLE:
                return new Circle();
            case ShapeType.SQUARE:
                return new Square();
            case ShapeType.RECTANGLE:
                return new Rectangle();
            default:
                return new Circle();
        }
    }
}