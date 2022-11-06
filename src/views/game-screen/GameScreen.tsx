import { useMemo, useState } from "react";
import { genTokenList } from "../../generator/generateTokens";
import { tokenMap } from "../../sprites/SlotToken";
import ReelBoard from "../ReelBoard"

import './GameScreen.css';

// TODO: Check offset logic
const calcEndingToken = (reel: (keyof typeof tokenMap)[]) => Math.floor(reel.length / 2 + Math.random() * (reel.length / 2 - 3))
const calcWinStatus = (reels: (keyof typeof tokenMap)[][], line: [number, number, number, number, number]) => {
  const winnings: Record<string, number> = {}
  line.map((e, i) => { return reels[i][e] }).forEach(e => {
    winnings[e] ? winnings[e]++ : winnings[e] = 1
    console.log(winnings)
  })
  const winningsArr = Object.entries(winnings);
  return winningsArr.slice(1).reduce((acc, e) => e[1] > acc[1] ? e : acc
    , winningsArr[0]);
}

export default () => {
  const reelLen = 50
  const [reels, setReels] = useState(Array.apply(null, Array(5)).map(e => genTokenList(reelLen)))
  const spin = () => setReels(prev => {
    return Array.apply(null, Array(5)).map((e, i) => {
      return [
        reels[i][midHLine[i] - 1],
        reels[i][midHLine[i]],
        reels[i][midHLine[i] + 1],
        ...genTokenList(reelLen).slice(3)
      ]
    })
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
        <div className="fancy-button">{spinStatus[1] > 0 ? `You have sum of ${spinStatus[1]} ${spinStatus[0]}s` : 'Better luck next time'}</div>
      </div>
    </div>
  )
}