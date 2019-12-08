import { ShapeFactory, ShapeType } from "./ShapeFactory";

class FactoryPatternDemo {
    public main(): void {
        let shapeFactory: ShapeFactory = new ShapeFactory();

        // 获取Circle的对象，并调用它的draw方法
        let shape1 = shapeFactory.getShape(ShapeType.CIRCLE);
        shape1.draw();

        // 获取Square的对象，并调用它的draw方法
        let shape2 = shapeFactory.getShape(ShapeType.SQUARE);
        shape2.draw();

        // 获取Rectangle的对象，并调用它的draw方法
        let shape3 = shapeFactory.getShape(ShapeType.RECTANGLE);
        shape3.draw();
    }
}

let fp = new FactoryPatternDemo();
fp.main();