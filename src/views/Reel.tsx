import React, { useCallback, useState } from "react";
import { Container, usePixiTicker } from "react-pixi-fiber/index";
import { tokenMap } from "../sprites/SlotToken";

export type Token = keyof typeof tokenMap

const Reel = ({ tokenList, target, right}: { tokenList: Token[], target: number, right: number}) => {

  console.log(tokenList)
  const baseOffset = -100 * tokenList.length + 700;
  const targetOffset = (target - 1) * 100;
  const step = targetOffset / 50
  const [topOffset, setTopOffset] = useState(0)
  const animate = useCallback(() => {
      setTopOffset(prev => targetOffset > prev ? prev + 0.5 + step - step * (prev / targetOffset): prev)
  }, [])

  usePixiTicker(animate)

  return (

    <Container x={right} y={ baseOffset + topOffset}>
      {tokenList.map((t, i) => React.createElement(tokenMap[t], { x: 100, y: (i + 1) * 100, key: t + i}))}
    </Container>
  )
}

export default Reel;