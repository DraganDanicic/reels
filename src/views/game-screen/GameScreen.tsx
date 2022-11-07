import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genTokenList } from "../../generator/generateTokens";
import { tokenMap } from "../../sprites/SlotToken";
import { betLost, betWon, placeBet } from "../../store/potReducer";
import { RootState } from "../../store/store";
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
  const reelLen = 50;
  const [reels, setReels] = useState(Array.apply(null, Array(5)).map(e => genTokenList(reelLen)))
  const [midHLine, setMidHLine] = useState<[number, number, number, number, number]>([2, 2, 2, 2, 2])
  const [winMessage, setWinMessage] = useState('Spinning...')
  const winStatus = useMemo(() => calcWinStatus(reels, midHLine), [reels, midHLine])
  const [balance, bet] = useSelector<RootState, [number, number]>(state => [state.pot.balance, state.pot.bet]);

  const dispatch = useDispatch()

  const spin = () => setReels(prev => {
    setWinMessage('Spinning...');
    return Array.apply(null, Array(5)).map((e, i) => {
      return [
        reels[i][midHLine[i] - 1],
        reels[i][midHLine[i]],
        reels[i][midHLine[i] + 1],
        ...genTokenList(reelLen).slice(3)
      ]
    })
  })

  useEffect(() =>
    setMidHLine(Array.apply(null, Array(5)).map((e, i) => calcEndingToken(reels[i])) as [number, number, number, number, number]),
    [reels])

  useEffect(() => {
    window.setTimeout(() => {

      setWinMessage(
        winStatus[1] > 2 ? `You have sum of ${winStatus[1]} ${winStatus[0]}s` : 'Better luck next time'
      )
      if (winStatus[1] > 2) {
        dispatch(betWon(bet * (winStatus[1] - 2)))
      } else {
        dispatch(betLost())
      }
    }, 10500)
  }, [winStatus, bet]
  )
 /// BET * {1,2,3} * FACTOR E {2...10}



  return (
    <div id="game-container">
      <div id="game-title"><h1>SpinnySpiner</h1></div>

      <div id="reel-board">
        <ReelBoard reels={reels} targetList={midHLine}></ReelBoard>
      </div>

      <div id="game-controls" >
        <div className="fancy-button" onClick={spin}>Spin</div>
        <div className="fancy-button">{winMessage}</div>
        <div className="fancy-button">Balance {balance}$</div>
        <div className="fancy-button">Pot {bet}$</div>
        <div className="fancy-button" onClick={() => dispatch(placeBet(1))}>Bet 1$</div>
        <div className="fancy-button" onClick={() => dispatch(placeBet(5))}>Bet 5$</div>
        <div className="fancy-button" onClick={() => dispatch(placeBet(10))}>Bet 10$</div>
      </div>
    </div>
  )
}