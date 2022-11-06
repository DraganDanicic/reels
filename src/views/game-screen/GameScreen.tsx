import { useMemo, useState } from "react";
import { genTokenList } from "../../generator/generateTokens";
import { tokenMap } from "../../sprites/SlotToken";
import ReelBoard from "../ReelBoard"

import './GameScreen.css';

// TODO: Check offset logic
const calcEndingToken = (reel: (keyof typeof tokenMap)[]) => Math.floor(1 + Math.random() * (reel.length - 3))
const calcWinStatus = (reels: (keyof typeof tokenMap)[][], line: [number, number, number, number, number]) => {
  let [potWin, maxWin] = [0, 0];
  line.slice(1).map((e, i) => {console.log(reels[i + 1][e] + i); return reels[i + 1][e]}).reduce((acc, e) => {
    if (acc === e) {
      potWin++;
      maxWin = potWin > maxWin ? potWin : maxWin
    } else {
      potWin = 0
    }
    return e;
  } , reels[0][line[0]])
  return maxWin;
}

export default () => {
  const reelLen = 30
  const [reels, setReels] = useState(Array.apply(null, Array(5)).map(e => genTokenList(reelLen)))
  const spin = () => setReels(prev => {
    return Array.apply(null, Array(5)).map((e, i) => { 
      return [
      reels[i][midHLine[i] - 1], 
      reels[i][midHLine[i]],
      reels[i][midHLine[i] + 1], 
      ...genTokenList(reelLen).slice(3)
    ]})
  })
  const midHLine = useMemo(() => 
    Array.apply(null, Array(5)).map((e, i) => calcEndingToken(reels[i])) as [number, number, number, number, number],
    [reels])
  const spinStatus = useMemo(() => calcWinStatus(reels, midHLine), [reels, midHLine])

  return (
    <div id="game-container">
      <div id="game-title"><h1>SpinnySpiner</h1></div>

      <div id="reel-board">
        <ReelBoard reels={reels} targetList={midHLine}></ReelBoard>
      </div>

      <div id="game-controls" >
        <div className="fancy-button" onClick={spin}>Spin</div>
        <div className="fancy-button">{spinStatus > 0 ? `You have streak of ${spinStatus +1}` : 'Better luck next time'}</div>
      </div>
    </div>
  )
}