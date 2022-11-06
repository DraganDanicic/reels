import { Stage } from "react-pixi-fiber/index";
import { genTokenList } from "../generator/generateTokens";
import Rectangle from "../sprites/Rectangle";
import { tokenMap } from "../sprites/SlotToken";
import Reel from "./Reel";

const options = {
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio,
  width: 700,
  height: 300,
  antialias: true,
  autoDensity: true,
};

const style = {
  width: window.innerWidth,
  height: window.innerHeight
};

export default ({ reels, targetList }: { reels: (keyof typeof tokenMap)[][], targetList: [number, number, number, number, number] }) => {
  console.log(reels, targetList)
  return (
    <Stage options={options} style={style}>
      <Reel tokenList={reels[0]} target={targetList[0]} right={0} reelHight={300} speed={30} />
      <Reel tokenList={reels[1]} target={targetList[1]} right={120} reelHight={300} speed={60} />
      <Reel tokenList={reels[2]} target={targetList[2]} right={240} reelHight={300} speed={90} />
      <Reel tokenList={reels[3]} target={targetList[3]} right={360} reelHight={300} speed={120} />
      <Reel tokenList={reels[4]} target={targetList[4]} right={480} reelHight={300} speed={150} />
      <Rectangle x={0} y={100} width={700} height={3} fill={0xDE3163}/> 
      <Rectangle x={0} y={108} width={700} height={3} fill={0xDE3163}/> 
      <Rectangle x={0} y={192} width={700} height={3} fill={0xDE3163}/> 
      <Rectangle x={0} y={200} width={700} height={3} fill={0xDE3163}/> 
    </Stage>
  )
}