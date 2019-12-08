import { Shape } from "./Shape";

export class Circle implements Shape {
    public draw(): void {
        console.log("Initial Circle:draw method");
    }
}