// components/Rectangle.js
import { CustomPIXIComponent } from "react-pixi-fiber/index";
import * as PIXI from "pixi.js";

type RectProps = {fill: number, x: number, y: number , width: number, height : number}

const TYPE = "Rectangle";
export const behavior = {
  // @ts-ignore
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance: any, oldProps: RectProps, newProps: RectProps) {
    const { fill, x, y, width, height } = newProps;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  }
};
// TODO: Type properly call below.
// @ts-ignore
export default CustomPIXIComponent(behavior, TYPE);