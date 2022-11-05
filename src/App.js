import React from 'react';
import './App.css';
import { Graphics, Stage, withApp } from 'react-pixi-fiber/index';
import Bunny from './Bunny';
import { Apple, Crown, Diamond } from './sprites/SlotToken';
import Reel from './views/Reel';
import { genTokenList } from './generator/generateTokens';
import { Polygon, Rectangle } from 'pixi.js';

const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  autoDensity: true,
};

const style = {
  width: window.innerWidth,
  height: window.innerHeight
};

function App() {
  return (
    <div className="App">
      <Stage options={options} style={style}>
        <Reel tokenList={genTokenList(1000)} target={12} right={100}/>
        <Reel tokenList={genTokenList(1000)} target={150} right={400}/>
        <Reel tokenList={genTokenList(1000)} target={500} right={700}/>
      </Stage>
    </div >
  );
}

export default withApp(App);
