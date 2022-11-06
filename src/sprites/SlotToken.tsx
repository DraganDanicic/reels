import { DisplayObjectProps, PixiComponent, PixiElement, Sprite } from "react-pixi-fiber/index";
import crown from '../assets/1.png';
import grape from '../assets/2.png';
import bell from '../assets/3.png';
import heart from '../assets/4.png';
import strawberry from '../assets/5.png';
import diamond from '../assets/6.png';
import cherry from '../assets/7.png';
import lemon from '../assets/8.png';
import goldBag from '../assets/9.png';
import hearts from '../assets/10.png';
import bar from '../assets/11.png';
import chips from '../assets/12.png';
import apple from '../assets/13.png';
import gift from '../assets/14.png';
import watermelon from '../assets/15.png';
import * as PIXI from 'pixi.js'

const SlotToken: PixiComponent<Sprite & { textureLink: string }> = ({ textureLink, ...rest }) => {
  return (
    <Sprite anchor="0.5,0.5" texture={PIXI.Texture.from(textureLink)} {...rest} />
  );
}

const [Crown, Grape, Bell, Heart, Strawberry, Diamond, Cherry, Lemon, GoldBag, Hearts, Bar, Chips, Apple, Gift, Watermelon] = [
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: crown, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: grape, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: bell, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: heart, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: strawberry, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: diamond, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: cherry, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: lemon, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: goldBag, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: hearts, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: bar, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: chips, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: apple, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: gift, ...props }),
  (props: DisplayObjectProps<PIXI.Sprite>) => SlotToken({ textureLink: watermelon, ...props }),
]

const tokenMap = {
  crown: Crown,
  grape: Grape,
  bell: Bell,
  // heart: Heart,
  // strawberry: Strawberry,
  // diamond: Diamond,
  // cherry: Cherry,
  // lemon: Lemon,
  // goldBag: GoldBag,
  // hearts: Hearts,
  // bar: Bar,
  // chips: Chips,
  // apple: Apple,
  // gift: Gift,
  // watermelon: Watermelon,
}

export { tokenMap, Crown, Grape, Bell, Heart, Strawberry, Diamond, Cherry, Lemon, GoldBag, Hearts, Bar, Chips, Apple, Gift, Watermelon }
